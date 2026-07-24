# ⚡ Quick Start Guide

## 🎯 5-Minute Setup

### 1️⃣ Install Node.js
- Download: https://nodejs.org/ (LTS version)
- Install normally
- Verify: `node --version` in terminal

### 2️⃣ Navigate to Folder
```bash
cd path/to/azhars-mobile-cafe
```

### 3️⃣ Install Dependencies (2-3 minutes)
```bash
npm install
```

### 4️⃣ Start Server
```bash
npm run dev
```

### 5️⃣ Open Browser
- Go to `http://localhost:5173/`
- **Done!** 🎉

---

## 🛑 Stop Server
Press `Ctrl + C` in terminal

---

## 📦 Build for Production
```bash
npm run build
```
Creates optimized `dist` folder for deployment

---

## 🎨 Customize Quickly

**Update Phone Numbers:**
```
Search for: 8688349726
Replace with: Your number
```

**Update Business Name:**
```
Search for: Azhar's Mobile Cafe
Replace with: Your name
```

---

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
Upload `dist` folder to netlify.com

### Traditional Hosting
Upload `dist` contents via FTP

---

## 📂 File Structure Quick View

```
azhars-mobile-cafe/
├── src/
│   ├── pages/          ← Edit content here
│   ├── components/     ← Navigation & footer
│   └── index.css       ← Styles
├── package.json        ← Dependencies
├── README.md           ← Full docs
├── CONFIG.md          ← Configuration
└── INSTALLATION_GUIDE.md ← Detailed setup
```

---

## 🔥 Most Important Files

1. **Homepage:** `src/pages/Home.jsx`
2. **Services:** `src/pages/Services.jsx`
3. **About:** `src/pages/About.jsx`
4. **Contact:** `src/pages/Contact.jsx`
5. **Colors:** `tailwind.config.js`

---

## 💡 Tips

- Ctrl+S to save (changes auto-reload)
- F12 to open browser console for debugging
- Test on mobile with Chrome DevTools
- Keep terminal open while developing

---

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| npm: command not found | Install Node.js |
| Port 5173 in use | `npm run dev -- --port 3000` |
| Module errors | `rm -rf node_modules && npm install` |
| Styles not working | Restart server: Ctrl+C then `npm run dev` |

---

## ✨ Features Ready to Use

✅ 4 Complete Pages (Home, About, Services, Contact)
✅ WhatsApp Integration
✅ Contact Form
✅ Image Carousel
✅ Responsive Mobile Design
✅ Professional Animations
✅ Dark Color Theme
✅ Phone Number Links
✅ Service Listings with Pricing
✅ Team Information

---

## 📞 Contact Details

**To Update Phone Numbers, Search For:**
- 8688349726 (appears ~15 times)
- 8885078632 (appears ~5 times)
- 9966599969 (appears ~3 times)

---

## 🚀 Next Steps

1. ✅ Get it running locally
2. ✅ Update contact info
3. ✅ Add your images
4. ✅ Test everything
5. ✅ Deploy online

---

## 📖 Need More Help?

- Full guide: `README.md`
- Detailed setup: `INSTALLATION_GUIDE.md`
- Configuration: `CONFIG.md`

---

**That's it! Your website is ready!** 🎉
