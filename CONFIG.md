# ⚙️ Configuration & Customization Guide

## 📞 Contact Information

**Primary Contact Numbers:**
-  9966599969
- 8885078632
- 9966599969

**Email:**
- support@azharsmobilecafe.com

**Location:**
- Shop No. 55, Chandralok Complex
- Near Paradise Circle
- Secunderabad, India

---

## 🎨 Brand Colors

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Red | #C41E3A | Primary buttons, accents |
| Brown | #8B6F47 | Secondary, backgrounds |
| Dark | #2C3E50 | Text, dark elements |
| Light | #F5F1E8 | Backgrounds |

**Location to change:** `tailwind.config.js`

---

## 🔄 Quick Updates Checklist

### Homepage
- [ ] Update hero carousel images
- [ ] Change service cards descriptions
- [ ] Update testimonials if needed

### About Page
- [ ] Update company story
- [ ] Change team member details
- [ ] Modify statistics (customers, repairs, etc.)

### Services Page
- [ ] Add/update service descriptions
- [ ] Update pricing information
- [ ] Add new device types if needed
- [ ] Update repair listings

### Contact Page
- [ ] Verify all phone numbers
- [ ] Update email address
- [ ] Confirm business hours
- [ ] Update location details

---

## 📁 Important Files to Edit

| File | Purpose | Edit? |
|------|---------|-------|
| `src/pages/Home.jsx` | Homepage content | ✏️ Update text & images |
| `src/pages/About.jsx` | About & team | ✏️ Update info |
| `src/pages/Services.jsx` | Services & pricing | ✏️ Add/update services |
| `src/pages/Contact.jsx` | Contact details | ✏️ Update numbers |
| `src/components/Navbar.jsx` | Navigation menu | ✏️ Update phone |
| `src/components/Footer.jsx` | Footer info | ✏️ Update contact |
| `tailwind.config.js` | Brand colors | ✏️ Customize colors |

---

## 🖼️ Image URLs to Replace

### Home Page
- Carousel images (3 total)
- Feature section backgrounds

### About Page
- Company story image
- Team member photos (3)

### Services Page
- Mobile phones image
- Tablets image
- MacBooks image
- iPads image
- Smartwatches image

**Pro Tip:** Use high-quality images from:
- Unsplash.com (free)
- Pexels.com (free)
- Your own photos

---

## 🔗 Key Contact Points

**Phone Numbers appear in:**
1. Navbar (top right)
2. Footer (bottom)
3. WhatsApp button (bottom right)
4. Contact page
5. Services page CTAs

**Always update all occurrences!**

---

## 📱 Device Types Covered

✅ Mobile Phones
✅ Tablets
✅ MacBooks
✅ iPads
✅ Smartwatches

Each device type has its own service listing with:
- Description
- Common repairs
- Starting prices
- Call-to-action buttons

---

## 💰 Pricing

Current pricing structure in `src/pages/Services.jsx`:

- Mobile Screen: Starting ₹2,999
- Tablet Screen: Starting ₹3,999
- MacBook Screen: Starting ₹8,999
- Battery Repairs: ₹999 - ₹4,999
- Various other services

**Update in:** Services page component

---

## 🎬 Video Section

Location: Homepage - "See Our Magic in Action" section

**To add a real video:**
1. Upload to YouTube
2. Get the embed code
3. Replace placeholder in `src/pages/Home.jsx`

---

## 📧 Contact Form

**Current fields:**
- Full Name (required)
- Email (required)
- Phone (optional)
- Message (required)

**Form submission:** Currently logs success/error
**To enable email:** Connect to backend service

---

## 🔐 Support Hours

Current hours in Contact page:
- Monday-Friday: 9 AM - 8 PM
- Saturday: 10 AM - 6 PM
- Sunday: 10 AM - 4 PM
- Emergency: 24/7 available

**Update in:** `src/pages/Contact.jsx`

---

## 🎯 Business Statistics

Current stats displayed on About page:
- Customers: 500+
- Repairs: 1000+
- Years: 10+
- Support: 24/7

**Update in:** `src/pages/About.jsx`

---

## 📊 Services Offered

### Mobile Phones
- Screen Replacement
- Battery Replacement
- Camera Repair
- Charging Port
- Water Damage
- Speaker/Mic

### Tablets
- Screen Replacement
- Battery Replacement
- Charging Issues
- Camera Repair
- Water Damage
- Speaker Issues

### MacBooks
- Screen Replacement
- Battery Replacement
- Keyboard Repair
- Camera Issues
- Water Damage
- Speaker Repair

### iPads
- Screen Replacement
- Battery Replacement
- Camera Repair
- Logic Board
- Water Damage
- Speaker/Audio

### Smartwatches
- Screen Replacement
- Battery Replacement
- Band Replacement
- Sensor Issues
- Water Damage
- Speaker Issues

---

## 🎨 Customization Tips

### Change Colors Without Coding
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'azhar-red': '#NEW_HEX_CODE',
      'azhar-brown': '#NEW_HEX_CODE',
    },
  },
},
```

### Add More Services
Edit `src/pages/Services.jsx` and duplicate a service block

### Update Testimonials
Edit `src/pages/Home.jsx` if needed

### Add New Pages
Create new file in `src/pages/` and add route in `App.jsx`

---

## 🚀 Deployment Checklist

Before going live:

- [ ] Update all phone numbers
- [ ] Change business information
- [ ] Add your images
- [ ] Verify links work
- [ ] Test on mobile
- [ ] Check all pages load
- [ ] Test contact form
- [ ] Test WhatsApp link
- [ ] Verify phone links
- [ ] Check spelling

---

## 📞 Contact & Support Numbers

Use these consistently throughout:

| Use Case | Number |
|----------|--------|
| Primary Call/WhatsApp |  9966599969 |
| Secondary Call | 8885078632 |
| Tertiary Call | 9966599969 |

---

## 🎁 Bonus Features Included

✅ Dark mode ready (can be added)
✅ Analytics ready (can integrate)
✅ SEO optimized structure
✅ Mobile responsive
✅ Fast loading
✅ Smooth animations
✅ Professional layout

---

## 📈 Growth Tips

1. **Add blog section** for repairs tips
2. **Customer testimonials** build trust
3. **Before/After photos** showcase quality
4. **FAQs section** answers common questions
5. **Live chat** for instant support
6. **Service booking** calendar integration

---

## 🔔 Important Reminders

1. ✅ Always test changes locally first
2. ✅ Keep backup of original files
3. ✅ Update consistently across all pages
4. ✅ Use high-quality images
5. ✅ Test links regularly
6. ✅ Monitor performance
7. ✅ Get customer feedback

---

## 📝 Version Control

**Current Version:** 1.0
**Last Updated:** July 2026
**Platform:** React 18 + Vite
**Styling:** Tailwind CSS 3

---

Good luck with your website! 🚀
