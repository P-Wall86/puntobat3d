'use client';

import { useEffect, useState } from 'react';
import type { Product } from "@/types/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PreviewModal from "@/components/PreviewModal";
import PromoCarousel from "@/components/PromoCarousel";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());

  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(console.error);
  }, []);

  function toggleProduct(name: string) {
    setSelectedProducts(prev => {
      const copy = new Set(prev);
      copy.has(name) ? copy.delete(name) : copy.add(name);
      return copy;
    });
  }

  function sendWhatsApp() {
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
    <main className="min-h-screen">
      <div className="relative z-10">
        <section className="relative w-full overflow-hidden h-[170px] sm:h-[200px] md:h-[250px]">
          <div className="absolute left-4 sm:left-6 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 bg-[#013b7b]/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-5 md:px-6 text-white max-w-[55%]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide whitespace-nowrap">
              Punto BAT 3D
            </h1>
            <p className=" mt-1 text-sm sm:text-base lg:text-lg font-normal whitespace-nowrap">
              Soluciones en impresión 3D
            </p>
          </div>
          <img src="/images/logo/LogoColor.png" alt="Punto BAT 3D" className="absolute top-1/2 right-4 sm:right-6 md:right-10 lg:right-20 -translate-y-1/2 w-24 sm:w-32 md:w-40 lg:w-48 "/>
        </section>

        <PromoCarousel />

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl my-8 uppercase tracking-wide font-extrabold text-white">
            Nuestro Catálogo
          </h2>
        </div>

        {categories.map(cat => (
            <section 
              key={cat.id} 
              id={cat.id} 
              className="max-w-6xl mx-auto px-4 mb-10 scroll-mt-20"
            >
              <h2 className="mb-6 flex items-center gap-3">
                <span className="h-px w-16 bg-[#0F172A]"/>
                <span className="text-lg font-extrabold uppercase tracking-wide text-white">
                  {cat.title}
                </span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products
                  .filter(p => p.category === cat.id)
                  .map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product} 
                    isSelected={selectedProducts.has(product.name)} 
                    onOpenModal={() => setModalProduct(product)}/>
                  ))}
              </div>
            </section>
          ))
        }

        {modalProduct && (
            <ProductModal 
            product={modalProduct} 
            isSelected={selectedProducts.has(modalProduct.name)} 
            onClose={() => setModalProduct(null)} 
            onToggle={() => toggleProduct(modalProduct.name)}/>
          )
        }
        
            <WhatsAppButton
            count={selectedProducts.size}
            onClick={() => setPreviewOpen(true)}/>

        {previewOpen && (
            <PreviewModal
              selectedProducts={Array.from(selectedProducts)}
              onClose={() => setPreviewOpen(false)}
              onRemove={toggleProduct}
              onSendWhatsApp={sendWhatsApp}/>
          )
        }

        <BackToTop activeCart={selectedProducts.size > 0}/>
      </div>
    </main >
  );
}