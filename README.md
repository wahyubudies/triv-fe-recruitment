
# Frontend Test Triv

## List Page
* http://localhost:5173/ (halaman utama)
* http://localhost:5173/products (halaman produk)
* http://localhost:5173/carts (halaman cart)


## Installation and Running

Install with npm

```bash
  cd triv-fe-recruitment
  npm install
  npm run dev
```
    
## Features

- Add Item to Cart
- Remove Item
- Clear All Item



## Structure Folder
```
src/
├── assets/                        # Kumpulan aset statis
│   ├── icons/                     # Aset ikon
│   └── images/                    # Aset gambar
├── components/                    # Komponen global yang dapat digunakan di seluruh aplikasi
│   ├── common/                    # Komponen umum (Navbar, Footer, dll)
│   └── layouts/                   # Komponen layout global
├── features/                      # Modul fitur-fitur utama
│   ├── carts/                     # Fitur keranjang (Cart)
│   │   ├── components/            # Komponen lokal khusus fitur Cart
│   │   ├── context/               # State management lokal (misalnya Recoil atom atau Context API)
│   │   ├── hooks/                 # Custom hooks lokal untuk fitur Cart
│   │   └── types/                 # Tipe data (TypeScript) untuk fitur Cart
│   └── ...                        # Folder fitur lainnya (misalnya: home/, products/)
├── pages/                         # Halaman utama aplikasi
├── routes/                        # Konfigurasi routing aplikasi
├── styles/                        # Global styling (misal: Tailwind, CSS, atau SCSS)

```
## Video

![App Video](https://raw.githubusercontent.com/wahyubudies/triv-fe-recruitment/refs/heads/main/public/demo.mp4)


## Tech Stack and Library

React, TypeScript, RecoilJS, TailwindCSS, React Router, React Toastify, Vite