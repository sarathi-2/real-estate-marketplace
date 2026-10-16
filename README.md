# Haven — Real Estate Marketplace

A responsive real-estate marketplace frontend built with React, Vite, Tailwind CSS, React Router, Framer Motion and Lucide React.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Included routes
- `/` — landing page and search
- `/properties` — searchable listings, filters, sorting and pagination
- `/properties/:id` — property details, gallery, amenities, location/map preview, viewing request UI
- `/wishlist` — saved properties (localStorage)
- `/compare` — compare up to 3 properties
- `/agents` — agent profiles and contact enquiry UI
- `/login` — login/register UI demo
- `/add-property` — property submission form UI

## Notes
- The project uses demo property data in `src/data/properties.js`.
- Property images are loaded from Unsplash, so internet access is needed for images.
- Login, agent enquiries, viewing requests, and property submission are frontend demos only; they do not send data to a server. Add a backend/auth provider to make them production-ready.
- The map preview is a stylized visual; the address link opens Google Maps search.
- Tailwind CSS is configured with PostCSS in `postcss.config.js`.
