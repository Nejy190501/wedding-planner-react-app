# 💍 Wedding

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An elegant, interactive, and fully-featured digital wedding invitation and management platform created for **Léonie & Liverance**. This application goes beyond a simple invitation, offering a complete guest experience with RSVPs, interactive maps, and bilingual support.

---

## ✨ Features

- **Dynamic RSVP System**: Connected to a Firebase backend for real-time guest tracking and management.
- **Admin Dashboard**: A hidden `/admin` route to securely manage responses and guest lists.
- **Multi-language Support (i18n)**: Seamless language switching context for international guests.
- **Interactive Maps**: Leaflet-powered maps highlighting key locations (Ceremony, Reception, Hotels).
- **Beautiful UI/UX**:
  - Custom animations via `motion/react`.
  - Elegant typography and ornament dividers.
  - Floating RSVP buttons and scroll-to-top behaviors.
- **Rich Sections**:
  - Our Story & Timeline
  - Event Schedule
  - FAQ & Recommendations
  - Countdown Timer

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Core** | React 19, TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (Framer Motion) |
| **Maps** | Leaflet / React-Leaflet |
| **Database** | Firebase Firestore |
| **Effects** | Canvas Confetti |

---

## 🚀 Getting Started

### Prerequisites

You will need a Firebase project set up for the RSVP backend.
1. Create a Firebase project.
2. Enable Firestore.
3. Rename `.env.example` to `.env.local` and add your Firebase credentials.

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nejy190501/wedding-01.git
   cd wedding-01
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

---

## 📂 Project Structure

```text
src/
├── components/      # 20+ UI Components (Hero, RSVP, Map, Navbar...)
├── contexts/        # React Contexts (LanguageContext)
├── i18n/            # Translations and language dictionaries
├── firebase.ts      # Firebase initialization and config
├── App.tsx          # Main application routing and layout
└── index.css        # Global styles and Tailwind directives
```

---

## 👤 Author

**Jean Yves Nkwane**  
Web Developer

- 🐙 GitHub: [@Nejy190501](https://github.com/Nejy190501)

---

<p align="center">Made with 💻 and 🤍 for Léonie & Liverance</p>
