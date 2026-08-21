# Punto BAT 3D – Ecommerce de impresión 3D

Sitio web tipo ecommerce desarrollado para Punto BAT 3D, un emprendimiento de impresión 3D que ofrece productos personalizados como mates, llaveros, figuras, carteles, organizadores y más.
El sitio permite navegar por productos en categorías y subcategorías, agregar productos a un carrito de consulta y enviar la selección por WhatsApp.

🌐 **Demo**  
https://puntobat3d.netlify.app

---

## 📌 Características

- Diseño responsive adaptado a desktop, tablet y mobile.
- Navegación por categorías: Mates, Llaveros, Figuras, Organizadores y Varios.
- Subcategorías dentro de "Varios": Fiestas, Carteles, Toppers y Otros.
- Filtros de subcategoría en el frontend (sin recarga de página).
- Paginación por categoría (4 productos en mobile, 6 en desktop).
- Modal de producto con imagen, descripción y botón de selección.
- Carrito de consulta (preview modal) que agrupa los productos seleccionados por categoría.
- Envío de consulta por WhatsApp con mensaje estructurado.
- Carrusel de promociones.
- Botón flotante de WhatsApp.
- Botón "volver arriba".
- Animaciones y transiciones CSS.

---

## 🛠️ Tecnologías utilizadas

- **Next.js 15** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS**
- **Google Fonts** (Arial Rounded, vía local)
- **Netlify** (deploy)

---

## 📂 Estructura del proyecto
```
/
├── public/
│   ├── data/
│   │   └── products.json
│   └── images/
│       ├── products/
│       ├── logo/
│       ├── banners/
│       └── hero/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── PreviewModal.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── PromoCarousel.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   └── types/
│       └── products.ts
├── README.md
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
```

---

## Diseño responsive

La interfaz se adapta según el dispositivo:

**Desktop**
- Nav en una sola fila.
- Grid de 4 columnas.
- 6 productos por página.

**Tablet**
- Ajuste de grillas y espaciados.
- Nav en una sola fila.

**Mobile**
- Nav en dos filas.
- Grid de 2 columnas.
- 2 productos por página.

---
## Gestión de productos (importante)

Los productos se cargan del archivo `public/data/products.json`.

**Estructura de cada producto:**
```
{
  "id": "identificador-unico",
  "name": "Nombre del producto",
  "category": "mates | llaveros | figuras | organizadores | varios",
  "subcategory": "fiestas | carteles | toppers | otros", // solo para "varios"
  "image": "/images/products/nombre-de-la-imagen.jpeg",
  "alt": "Texto alternativo",
  "description": "Descripción del producto"
}
```

Para agregar o modificar un producto:
1. Editar el archivo products.json.
2. Agregar o reemplazar la imagen en public/images/products/.
3. La ruta de la imagen debe ser relativa al dominio.

## Deploy
El proyecto se encuentra desplegado en:
https://puntobat3d.com.ar

## Objetivo del proyecto
Crear una tienda online funcional y visualmente atractiva para Punto BAT 3D, que facilite la exploración de productos y la comunicación con clientes potenciales a través de WhatsApp.

## Autor
[Pamela Pared](https://instagram.com/pame.wall)
