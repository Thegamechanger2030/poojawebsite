# Maa Rajrajeshwari Puja Platform & Astrological Services
### (मां राजराजेश्वरी ज्योतिष एवं राशि रत्न केंद्र - आचार्य अंकित मिश्रा, बरेली)

Official website for **Maa Rajrajeshwari Puja Platform**, using the site's own devotional branding, content, and booking experience.

---

## 📍 Brand & Contact Details
- **Brand**: मां राजराजेश्वरी ज्योतिष एवं राशि रत्न केंद्र (Maa Rajrajeshwari Puja)
- **Acharya**: आचार्य अंकित मिश्रा (Acharya Ankit Mishra)
- **Location**: बरेली (उ.प्र.) [Bareilly, Uttar Pradesh]
- **Contact Numbers**: +91 9410202087, +91 9997586355
- **Services**: Kundali Vishleshan, Certified Rashi Ratna, Puja & Anushthan, Grah Dosh Nivaran, Yagyopaveet, Herbal Kumkum & Chandan, Gau Seva & Vishesh Sadhna (Baglamukhi, Navchandi, Mahamrityunjay).

---

## 🛠 Project Structure

```
maa-rajrajeshwari-puja/
├── index.html                # Entry HTML with page metadata
├── package.json              # NPM dependencies (React, Lucide icons, Canvas Confetti, Vite)
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Central layout & reactive state management
│   ├── style.css             # Royal Devotional theme CSS tokens (#8E1238 Burgundy, #D6A13C Gold, #FFF9F0 Cream)
│   ├── data/
│   │   ├── pujas.js          # Puja catalog and packages
│   │   ├── products.js       # Samagri kits, certified gemstones, Janeyu, Ashtagandha
│   │   ├── services.js       # 8 devotional services
│   │   └── reviews.js        # Verified customer reviews & festival dates
│   └── components/
│       ├── Header.jsx        # Sticky top bar with contact numbers & navigation
│       ├── Hero.jsx          # Devotional hero with 3 primary action buttons
│       ├── TrustStrip.jsx    # Verification counters (5000+ Pujas, 100+ Pandits)
│       ├── ServicesGrid.jsx  # Devotional services grid
│       ├── PujaCatalog.jsx   # Puja package booking grid
│       ├── Shop.jsx          # Samagri & Ratna e-commerce store
│       ├── KundaliCalculator.jsx # Free Kundali generator & Lagna chart preview
│       ├── PujaDetailModal.jsx   # Package selector & Samagri breakdown modal
│       ├── CartDrawer.jsx    # Unified cart & checkout with WhatsApp confirmation
│       ├── PartnerModal.jsx  # Pandit & Astrologer registration form
│       ├── FestivalCalendar.jsx # Upcoming festival dates & Vrat
│       ├── Reviews.jsx       # Customer testimonials
│       └── Footer.jsx        # Policies, Bareilly address & phone links
```

---

## 🚀 How to Run Locally

1. Open terminal in this directory:
   ```bash
   cd c:/Users/abhay/Downloads/Project_LOOP_source/maa-rajrajeshwari-puja
   ```
2. Install dependencies (if not installed):
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Build production bundle:
   ```bash
   npm run build
   ```
