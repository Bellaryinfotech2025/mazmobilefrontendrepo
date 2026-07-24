# 🚀 Complete Installation Guide - Azhar's Mobile Cafe Website

## Step-by-Step Setup Instructions

### ✅ Step 1: Check System Requirements

Make sure you have these installed:
- **Node.js** (v14 or newer) - Download from https://nodejs.org/
- **npm** (comes with Node.js) - Check by running: `npm --version`

**Check your Node.js version:**
```bash
node --version
npm --version
```

Should output something like:
```
v18.x.x
9.x.x
```

---

### ✅ Step 2: Extract the Project

1. Download the `azhars-mobile-cafe` folder
2. Extract it to a location of your choice
3. Remember the folder path

---

### ✅ Step 3: Install Dependencies

1. **Open Terminal/Command Prompt**
   - **Windows**: Press `Win + R`, type `cmd`, press Enter
   - **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
   - **Linux**: Press `Ctrl + Alt + T`

2. **Navigate to project folder**
   ```bash
   cd path/to/azhars-mobile-cafe
   ```
   
   Example on Windows:
   ```bash
   cd C:\Users\YourName\Desktop\azhars-mobile-cafe
   ```

3. **Install all dependencies**
   ```bash
   npm install
   ```
   
   This will create a `node_modules` folder and download all required packages.
   **⏳ This may take 2-5 minutes** - let it complete!

---

### ✅ Step 4: Start Development Server

1. **In the same terminal, run:**
   ```bash
   npm run dev
   ```

2. **You should see output like:**
   ```
   ➜  Local:   http://localhost:5173/
   ➜  Press q to stop the server
   ```

3. **Open the link in your browser:**
   - Click on `http://localhost:5173/`
   - Or copy-paste it in your browser address bar

🎉 **Your website is now live!**

---

## 🎨 Customization Guide

### 🔴 Update Phone Numbers

Open these files and update the phone numbers:

**File 1: `src/components/Navbar.jsx`**
- Find line with `8688349726`
- Replace with your numbers

**File 2: `src/components/Footer.jsx`**
- Find phone numbers in the footer section
- Replace with: 8688349726, 8885078632, 9966599969

**File 3: `src/components/WhatsAppSupport.jsx`**
- Find `const phoneNumber = '8688349726'`
- Replace with your primary number

**File 4: `src/pages/Contact.jsx`**
- Update all phone numbers for contact page

### 📝 Update Business Information

**Edit `src/pages/Contact.jsx`:**
- Change email address
- Update location details
- Modify support hours

**Edit `src/pages/About.jsx`:**
- Update company story
- Change team member names
- Modify company statistics

### 🖼️ Add Your Images

Replace these image URLs with your own:
- Home page carousel images
- Service images
- Team member photos

In each file, search for `https://images.unsplash.com/` and replace with your image URLs.

### 🎯 Change Brand Colors

Open `tailwind.config.js` and modify:
```javascript
colors: {
  'azhar-red': '#C41E3A',      // Change this
  'azhar-brown': '#8B6F47',    // Or this
  'azhar-dark': '#2C3E50',     // Or this
  'azhar-light': '#F5F1E8',    // Or this
}
```

---

## 📦 Build for Production

When ready to upload to the internet:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **This creates a `dist` folder** with optimized files
3. **Upload the `dist` folder contents** to your hosting provider

---

## 🌐 Deployment Options

### Option 1: **Free Hosting on Vercel** ⭐ (Recommended)

1. Sign up at https://vercel.com (free)
2. Connect your GitHub account (or upload folder directly)
3. Click "Deploy"
4. Get a free domain like `yourname.vercel.app`

### Option 2: **Netlify** (Also Free)

1. Go to https://app.netlify.com/signup
2. Deploy by dragging the `dist` folder

### Option 3: **Paid Hosting**

Use any web hosting service and upload the `dist` folder via FTP.

---

## 🔧 Troubleshooting

### ❌ Problem: "npm command not found"
**Solution:** Node.js not installed. Download from https://nodejs.org/

### ❌ Problem: "Port 5173 already in use"
**Solution:** Run on different port:
```bash
npm run dev -- --port 3000
```

### ❌ Problem: "Module not found" errors
**Solution:** Delete and reinstall:
```bash
rm -rf node_modules
npm install
```

### ❌ Problem: Website won't load
**Solution:** 
- Check browser console (F12) for errors
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser

### ❌ Problem: Styles not working
**Solution:** Tailwind CSS not compiled. Try:
```bash
npm install
npm run dev
```

---

## 📱 Mobile Preview

To view on mobile while developing:

1. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` (look for inet)

2. On your phone, open:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```

---

## 💡 Pro Tips

✅ **Keep terminal open** while working
✅ **Files auto-reload** - no need to refresh browser
✅ **Use Ctrl+C** to stop the server
✅ **Save files** to see changes instantly
✅ **Check console (F12)** for any error messages

---

## 📞 Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clear cache and reinstall
rm -rf node_modules && npm install
```

---

## ✨ Features You Have

✅ Responsive mobile-friendly design
✅ Beautiful animations and transitions
✅ Working WhatsApp integration
✅ Contact form
✅ Image carousel on home page
✅ Service listing with pricing
✅ About page with team info
✅ Fast loading times
✅ SEO optimized
✅ Professional appearance

---

## 🎉 You're All Set!

Your Azhar's Mobile Cafe website is ready to impress your customers!

### Next Steps:
1. ✅ Install and run locally
2. ✅ Customize with your content
3. ✅ Test on mobile devices
4. ✅ Deploy to production
5. ✅ Share with your customers!

---

## 📧 Need Help?

Check the README.md file for more information.

**Happy Building!** 🚀
