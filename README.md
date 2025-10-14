# 🚀 Hackathon Registration Web App

A cyberpunk-themed, mobile-responsive registration portal for hackathons.  
Frontend in React + Tailwind, backend in Node.js + Express, stores team registrations in a CSV file with easy admin download.

---

## ✨ Features

- Responsive UI for laptop, tablet, and mobile
- Glassmorphism design, neon/cyberpunk effects (customizable!)
- Register teams with:  
  - Team Leader: Name, Email, Phone, USN (10-char)
  - Member 1: Name, Email, Phone, USN (10-char)
  - Member 2: Name, Email, Phone, USN (10-char)
- Real-time validation (emails, phone numbers, USN length)
- Registrations saved instantly to CSV for admin review
- Admin CSV download endpoint
- Easy-to-deploy on Vercel (frontend) and Render/Railway (backend)

---

## 🖥️ Tech Stack

- **Frontend:** React, TailwindCSS, Framer Motion
- **Backend:** Node.js, Express, CORS
- **Validation:** React Hook Form + Zod
- **CSV Storage:** Native filesystem
- **Design:** Responsive grid & glassmorphism, cyber-blue color palette

---

## ⚡ Getting Started (Local Development)

1. **Clone this repo:**
git clone https://github.com/yourusername/hackathon-registration.git
cd hackathon-registration
2. **Install dependencies:**
npm install
npm install express cors

3. **Start the frontend:**
npm start
- Opens [http://localhost:3000](http://localhost:3000) — your web registration page

4. **Start the backend (Express server):**
node server.js

- Runs on [http://localhost:3001](http://localhost:3001) — API for registration/CSV

---

## 📲 Mobile/Tablet/Desktop Responsive

- Fully optimized layouts for all device sizes
- All inputs: tap-friendly, stacked or in grid depending on screen

---

## 📝 Registration Data

- Each registration is appended to `/registrations/team-registrations.csv`
- **CSV columns:** Date, Time, Leader + Member1 + Member2 [Name, Email, Phone, USN]

---

## 🔒 Admin CSV Download

- Download all registrations (CSV) from:
http://localhost:3001/api/register/download

- **Production:** Use your remote backend URL instead.

---

## 🌐 Deployment (Production)

### **Frontend (React):**
- [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- Connect repo, auto-deploy

### **Backend (Express):**
- [Render](https://render.com) or [Railway](https://railway.app)
- Set start script: `node server.js`
- Use public backend URL in frontend fetch requests.

### **Update API URLs:**
- In React code, change `fetch('/api/register'...)` to your production backend:
fetch('https://your-backend.onrender.com/api/register', ...)



---

## 💡 Customization & Security

- To restrict CSV downloads, secure `/api/register/download` with a token or admin login in production.
- To use a database (instead of CSV), swap for mongoose/MongoDB/SQL/Supabase.
- Want to add new fields? Update both frontend schema and backend CSV headers/logic.
- Customize branding, color palette, and effects in `tailwind.config.js` and components.

---

## 👨‍💻 Author & License

Made for hackathon organizers and developers.  
MIT License.

---

## 📣 Feedback/Issues

Raise an issue or PR for suggestions, improvements, or bug fixes!
