# Azhar's Mobile Cafe - Official Website

A modern, responsive website for Azhar's Mobile Cafe built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Fast Performance** - Built with Vite for blazing-fast development
- **Modern UI** - Beautiful gradient colors matching the brand
- **Multiple Pages** - Home, About, Services, Contact
- **WhatsApp Integration** - Easy customer support via WhatsApp
- **Service Carousel** - Showcase services with smooth transitions
- **Contact Form** - Functional contact form for inquiries
- **Mobile Menu** - Responsive navigation for all screen sizes

## 📋 Pages Included

1. **Home** - Hero carousel, features, services overview, video section
2. **About** - Company story, team, values, statistics
3. **Services** - Detailed repair services for all device types
4. **Contact** - Contact form, location, phone, email, maps

## 🛠 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Extract the project folder** to your desired location

2. **Navigate to the project directory**
   ```bash
   cd azhars-mobile-cafe
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - The app will typically run on `http://localhost:5173`
   - Open this URL in your web browser

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder and ready for deployment.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- `azhar-red`: #C41E3A
- `azhar-brown`: #8B6F47
- `azhar-dark`: #2C3E50
- `azhar-light`: #F5F1E8

### Phone Numbers
Update contact details in:
- `src/components/Navbar.jsx` (line ~25)
- `src/components/Footer.jsx` (line ~34-36)
- `src/components/WhatsAppSupport.jsx` (line ~6)
- `src/pages/Services.jsx`
- `src/pages/Contact.jsx`

### Content
- Edit text and descriptions in respective page files
- Replace image URLs with your own images
- Update business information as needed

## 📁 Project Structure

```
azhars-mobile-cafe/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppSupport.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🌐 Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📞 Contact Numbers

- Primary: 8688349726
- Alternate: 8885078632
- Support: 9966599969

## 💡 Tips

- The WhatsApp button in the bottom right is fully functional
- Services section includes pricing and detailed repair information
- Use the carousel navigation on the home page to showcase services
- All pages are SEO-friendly and optimized for search engines

## 🔧 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Module not found errors?**
```bash
rm -rf node_modules
npm install
```

## 📝 License

All rights reserved. Azhar's Mobile Cafe © 2026

## 🤝 Support

For any issues or customizations, contact the development team.

---

**Happy to serve!** 🎉
