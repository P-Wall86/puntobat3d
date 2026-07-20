import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative bg-[#013b7b] text-white">

        <div
          className="
    fixed
    inset-0
    bg-[url('/images/hero/Hero.png')]
    bg-cover
    bg-center
    opacity-63
    -z-10
  "
        />
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}