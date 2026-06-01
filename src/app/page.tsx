'use client';

import { useEffect, useState } from 'react';
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PreviewModal from "@/components/PreviewModal";


type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  category: string;
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());

  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // Carousel
  const slides = [
    '/images/hero/mates.webp',
    '/images/hero/cockades.webp',
    '/images/hero/aboutus.jpeg'

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function toggleProduct(name: string) {
    setSelectedProducts(prev => {
      const copy = new Set(prev);
      copy.has(name) ? copy.delete(name) : copy.add(name);
      return copy;
    });
  }

  function sendWhatsApp() {
    console.log("Ejecutando sendWhatsApp", selectedProducts);
    if (selectedProducts.size === 0) return;

    const message = encodeURIComponent(
      "Hola! Me interesan los siguientes productos:\n- " +
      Array.from(selectedProducts).join("\n- ")
    );

    const phone = "5491124834551";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    
    window.open(url, "_blank");
  }

  const categories = [
    { id: 'section1', title: 'Mates' },
    { id: 'section2', title: 'Llaveros' },
    { id: 'section3', title: 'Adornos y Accesorios' },
  ];

  return (
    <main>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4">

        <div className="overflow-hidden rounded-lg">
  <img
    src={slides[currentSlide]}
    alt="Hero"
    className="w-full max-h-[450px] object-contain"
  />
</div>
      </section>

      <div className="flex justify-center gap-2 py-4">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`h-2.5 w-2.5 rounded-full ${
        currentSlide === index
          ? "bg-cyan-400"
          : "bg-gray-500"
      }`}
    />
  ))}
</div>

      {/* TITLE */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl my-8 uppercase tracking-widest">
          Nuestro Catálogo
        </h2>
      </div>

      {/* CATEGORIES */}
      {categories.map(cat => (
        <section
          key={cat.id}
          id={cat.id}
          className="max-w-6xl mx-auto px-4 mb-10"
        >
          <h2 className="text-lg uppercase tracking-widest mb-4">
            {cat.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter(p => p.category === cat.id)
              .map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProducts.has(product.name)}
                  onOpenModal={() => setModalProduct(product)}
                />
              ))}
          </div>
        </section>
      ))}

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          isSelected={selectedProducts.has(modalProduct.name)}
          onClose={() => setModalProduct(null)}
          onToggle={() => toggleProduct(modalProduct.name)}
        />
      )}

      <WhatsAppButton
        count={selectedProducts.size}
        onClick={() => setPreviewOpen(true)}
      />

      {previewOpen && (
        <PreviewModal
          selectedProducts={Array.from(selectedProducts)}
          onClose={() => setPreviewOpen(false)}
          onRemove={toggleProduct}
          onSendWhatsApp={sendWhatsApp}
        />
      )}

      <BackToTop activeCart={selectedProducts.size > 0} />

    </main>
  );
}