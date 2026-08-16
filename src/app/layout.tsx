import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const arialRounded = localFont({
  src: [
    {
      path: "./fonts/ArialRoundedMTLight.ttf",
      weight: "300",
    },
    {
      path: "./fonts/ArialRoundedMT.ttf",
      weight: "400",
    },
    {
      path: "./fonts/ArialRoundedMTExtraBold.ttf",
      weight: "800",
    },
  ],
});

export const metadata = {
  metadataBase: new URL('https://puntobat3d.com.ar'),
  title: 'Punto BAT 3D - Impresión 3D Personalizada',
  description: 'Tienda de impresión 3D con productos personalizados: mates, llaveros, figuras, carteles y más. Hecho en Argentina con calidad y diseño.',
  keywords: 'impresión 3D, mates personalizados, llaveros 3D, figuras impresas, carteles, decoración, Punto BAT 3D',
  openGraph: {
    title: 'Punto BAT 3D - Impresión 3D Personalizada',
    description: 'Tienda de impresión 3D con productos personalizados: mates, llaveros, figuras, carteles y más.',
    url: 'https://puntobat3d.com.ar',
    siteName: 'Punto BAT 3D',
    images: [
      {
        url: '/images/logo/puntobat3d.png',
        width: 800,
        height: 600,
        alt: 'Punto BAT 3D',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punto BAT 3D - Impresión 3D Personalizada',
    description: 'Tienda de impresión 3D con productos personalizados: mates, llaveros, figuras, carteles y más.',
    images: ['/images/logo/puntobat3d.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${arialRounded.className} bg-[#0F172A] text-white`}>
        <div className="fixed inset-0 bg-[url('/images/hero/Hero.png')] bg-cover bg-center opacity-55 -z-10"/>
        
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}