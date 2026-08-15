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
  const [pageState, setPageState] = useState<{ [key: string]: number }>({});
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const productsPerPage = isMobile ? 2 : 6;

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
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
    const phone = "5493764991692";
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, "_blank");
  }

  const categories = [
    { id: 'mates', title: 'Mates' },
    { id: 'llaveros', title: 'Llaveros' },
    { id: 'figuras', title: 'Figuras' },
    { id: 'organizadores', title: 'Organizadores' },
    { id: 'varios', title: 'Varios' },
  ];

  const subcategories = [
    { id: 'fiestas', label: 'Fiestas' },
    { id: 'carteles', label: 'Carteles' },
    { id: 'toppers', label: 'Toppers' },
    { id: 'otros', label: 'Otros' },
  ];

  const goToPage = (categoryId: string, page: number) => {
    setPageState(prev => ({ ...prev, [categoryId]: page }));
  };

  return (
    <main className="min-h-screen">
      <div className="relative z-10">
        <section className="relative w-full overflow-hidden h-[170px] sm:h-[200px] md:h-[250px]">
          <div className="absolute left-4 sm:left-6 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 bg-[#013b7b]/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-5 md:px-6 text-white max-w-[55%]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide whitespace-nowrap">
              Punto BAT 3D
            </h1>
            <p className="mt-1 text-sm sm:text-base lg:text-lg font-normal whitespace-nowrap">
              Soluciones en impresión 3D
            </p>
          </div>
          <img src="/images/logo/LogoColor.png" alt="Punto BAT 3D" className="absolute top-1/2 right-4 sm:right-6 md:right-10 lg:right-20 -translate-y-1/2 w-24 sm:w-32 md:w-40 lg:w-48" />
        </section>

        <PromoCarousel />

        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl my-8 uppercase tracking-wide font-extrabold text-white">
            Nuestro Catálogo
          </h2>
        </div>

        {categories.map(cat => {
          const currentPage = pageState[cat.id] || 1;

          let filtered: Product[] = [];

          if (cat.id === 'figuras') {
            filtered = products.filter(product => product.category === 'figuras');
          } else if (cat.id === 'organizadores') {
            filtered = products.filter(product => product.category === 'organizadores');
          } else if (cat.id === 'varios') {
            if (selectedSubcategory) {
              filtered = products.filter(product => product.category === 'varios' && product.subcategory === selectedSubcategory);
            } else {
              filtered = products.filter(product => product.category === 'varios');
            }
          } else {
            filtered = products.filter(product => product.category === cat.id);
          }

          const totalPages = Math.ceil(filtered.length / productsPerPage);
          const indexOfLast = currentPage * productsPerPage;
          const indexOfFirst = indexOfLast - productsPerPage;
          const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

          const subcategoryLabel = subcategories.find(sub => sub.id === selectedSubcategory)?.label;

          return (
            <section
              key={cat.id}
              id={cat.id}
              className="max-w-5xl mx-auto px-4 mb-10 scroll-mt-20"
            >
              <h2 className="mb-6 flex items-center gap-3">
                <span className="h-px w-16 bg-[#0F172A]" />
                <span className="text-lg font-extrabold uppercase tracking-wide text-white">
                  {cat.id === 'varios' && selectedSubcategory && subcategoryLabel
                    ? subcategoryLabel
                    : cat.title}
                </span>
              </h2>

              {cat.id === 'varios' && (
                <div className="mb-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedSubcategory(null);
                        setPageState(prev => ({ ...prev, ['varios']: 1 }));
                      }}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-xl border transition text-center ${!selectedSubcategory
                          ? 'bg-[#2cb7c9] text-[#0F172A] border-[#2cb7c9] shadow-md'
                          : 'bg-[#1E293B] text-white/80 border-[#2cb7c9]/30 hover:bg-[#2cb7c9]/20 hover:border-[#2cb7c9]/60'
                        }`}
                    >
                      Todos
                    </button>
                    {subcategories.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          setSelectedSubcategory(sub.id);
                          setPageState(prev => ({ ...prev, ['varios']: 1 }));
                        }}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-xl border transition text-center ${selectedSubcategory === sub.id
                            ? 'bg-[#2cb7c9] text-[#0F172A] border-[#2cb7c9] shadow-md'
                            : 'bg-[#1E293B] text-white/80 border-[#2cb7c9]/30 hover:bg-[#2cb7c9]/20 hover:border-[#2cb7c9]/60'
                          }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col min-h-[200px] sm:min-h-[300px]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={selectedProducts.has(product.name)}
                    onOpenModal={() => setModalProduct(product)}
                  />
                ))}
              </div>
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8">
                  <button
                    onClick={() => {
                      const newPage = currentPage - 1;
                      setPageState(prev => ({ ...prev, [cat.id]: newPage }));
                    }}
                    disabled={currentPage === 1}
                    className="px-2 sm:px-4 py-2 text-sm sm:text-base font-bold uppercase tracking-widest text-white bg-[#013b7b]/50 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2cb7c9] transition flex items-center justify-center min-w-[40px] sm:min-w-[100px]"
                  >
                    <span className="sm:hidden">←</span>
                    <span className="hidden sm:inline">← Anterior</span>
                  </button>

                  <span className="text-sm text-white/70 font-mono">
                    {currentPage} / {totalPages}
                  </span>

                  <button
                    onClick={() => {
                      const newPage = currentPage + 1;
                      setPageState(prev => ({ ...prev, [cat.id]: newPage }));
                    }}
                    disabled={currentPage === totalPages}
                    className="px-2 sm:px-4 py-2 text-sm sm:text-base font-bold uppercase tracking-widest text-white bg-[#013b7b]/50 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2cb7c9] transition flex items-center justify-center min-w-[40px] sm:min-w-[100px]"
                  >
                    <span className="sm:hidden">→</span>
                    <span className="hidden sm:inline">Siguiente →</span>
                  </button>
                </div>
              )}
            </section>
          );
        })}

        {modalProduct && (
          <ProductModal
            product={modalProduct}
            isSelected={selectedProducts.has(modalProduct.name)}
            onClose={() => setModalProduct(null)}
            onToggle={() => toggleProduct(modalProduct.name)}
          />
        )}

        <WhatsAppButton count={selectedProducts.size} onClick={() => setPreviewOpen(true)} />

        {previewOpen && (
          <PreviewModal
            selectedProducts={Array.from(selectedProducts)}
            onClose={() => setPreviewOpen(false)}
            onRemove={toggleProduct}
            onSendWhatsApp={sendWhatsApp}
          />
        )}

        <BackToTop activeCart={selectedProducts.size > 0} />
      </div>
    </main>
  );
}