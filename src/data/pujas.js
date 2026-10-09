export const POOJA_CATEGORIES = [
  'All',
  'Vrat & Katha',
  'Shiv Pooja',
  'Pitru Pooja',
  'Lakshmi & Prosperity Pooja',
  'Griha & Sanskar Pooja',
  'Havan & Shanti Pooja',
  'Devi Pooja'
];

export const UPCOMING_FESTIVALS = [
  {
    id: 'fest-navratri',
    name: 'Chaitra Navratri (चैत्र नवरात्रि)',
    date: 'April 2026',
    significance: '9 Days of Divine Devi Worship & Durga Saptashati Path',
    recommendedPoojaId: 'durga-pooja',
  },
  {
    id: 'fest-hanuman-jayanti',
    name: 'Hanuman Jayanti (हनुमान जयंती)',
    date: 'April 2026',
    significance: 'Sundarkand Path & Hanuman Chalisa 108 Path for Sankat Mochan',
    recommendedPoojaId: 'vishesh-sadhna',
  },
  {
    id: 'fest-shravan',
    name: 'Shravan Maas Somwar (श्रावण सोमव्रत)',
    date: 'July - August 2026',
    significance: 'Maha Rudrabhishek with Milk, Honey & Belpatra for Lord Shiva',
    recommendedPoojaId: 'rudrabhishek',
  },
  {
    id: 'fest-pitru-paksha',
    name: 'Pitru Paksha Shraddh (पितृ पक्ष श्राद्ध)',
    date: 'September 2026',
    significance: 'Tarpan, Pind Daan & Brahmin Bhoj for Ancestral Peace',
    recommendedPoojaId: 'shraddh-karma',
  },
  {
    id: 'fest-dhanteras-diwali',
    name: 'Dhanteras & Deepawali (धनतेरस एवं दीपावली)',
    date: 'November 2026',
    significance: 'Grand Kuber & Maha Lakshmi Pujan for Lifetime Wealth',
    recommendedPoojaId: 'lakshmi-pooja',
  }
];

export const PUJAS = [
  // ---------------------------------------------------------------------------
  // 1. VRAT & KATHA
  // ---------------------------------------------------------------------------
  {
    id: 'satyanarayan-katha',
    slug: 'satyanarayan-katha',
    name: 'Shree Satyanarayan Vrat Katha & Pujan',
    nameHindi: 'श्री सत्यनारायण व्रत कथा एवं पूजन',
    category: 'Vrat & Katha',
    tag: 'Popular Vrat Katha',
    isFeatured: true,
    shortDesc: 'Sacred Vishnu pujan and 5-chapter Satyanarayan Katha recitation from Skanda Purana for domestic harmony, business growth, and wish fulfillment.',
    duration: '2.5 - 3.5 Hours',
    panditCount: 2,
    startingPrice: 2100,
    packages: [
      { name: 'Standard Katha', price: 2100, pandits: 2, desc: 'Includes Ganesh Pujan, Navgrah Pujan, Satyanarayan 5 Adhyay Katha, Hawan & Aarti.' },
      { name: 'Grand Family Vidhi', price: 4100, pandits: 3, desc: 'Includes 1008 Vishnu Sahasranama Chanting, Special Hawan & Brahmin Bhoj Sankalp.' }
    ],
    details: {
      introduction: 'As recorded in the Reva Khanda of Skanda Purana, Lord Satyanarayan (an auspicious form of Lord Vishnu) prescribed this ritual to Maharshi Narada to alleviate worldly distress and grant happiness. Performing this katha purifies the home environment, locks divine vibrations, and fosters immense family unity.',
      benefits: [
        'Believed to restore peace, mutual understanding, and love among family members.',
        'Traditionally performed to express heartfelt gratitude during milestone events.',
        'Removes unexpected financial hurdles and blesses devotees with material and spiritual abundance.',
        'Calms the mind, purifies domestic aura, and removes past negative karmic influences.'
      ],
      occasions: 'Full Moon Days (Purnima), Ekadashi, Sankranti, Housewarming, Birthdays, Wedding Anniversaries, and New Business Ventures.',
      procedure: [
        'Ganesh & Gauri Sthapana with Vedic Sankalp',
        'Varuna Kalash & Navgrah Sthapana Pujan',
        'Abhishekam of Lord Satyanarayan with Panchamrit & Tulsi Patra',
        'Recitation of all 5 Sacred Adhyays of Satyanarayan Katha from Skanda Purana',
        'Sacred Hawan with 108 Vishnu Aahutis & Purnahuti',
        'Maha Mangal Aarti & distribution of Panjiri & Panchamrit Prasad'
      ],
      samagriByPandit: ['Pure Cow Ghee', 'Hawan Samagri & Dry Mango Wood', 'Fresh Tulsi Leaves', 'Kumkum, Akshat, Shwet Chandan', 'Mouli & Janeyu', 'Panchamrit Kit'],
      samagriByHost: ['Bananas (1 Dozen)', 'Fresh Flowers & Floral Garlands', 'Panjiri Prasad (Wheat Flour roasted in Desi Ghee with sugar & cardamom)', 'Pan Leaves (Betel) & Supari', 'Coconuts (2 Pcs)'],
      faqs: [
        { q: 'Can Satyanarayan Katha be performed on any weekday?', a: 'Yes, while Purnima, Ekadashi, and Sankranti are paramount, scriptures allow it on any day selected as per Shubh Choghadiya Muhurat.' },
        { q: 'What is the authentic prasad requirement?', a: 'Panjiri (wheat flour roasted in Desi Ghee mixed with sugar and cardamom), sliced bananas, and Panchamrit (Milk, Curd, Ghee, Honey, Sugar).' },
        { q: 'Is fasting mandatory for the hosts?', a: 'Fasting till the completion of Katha and Aarti is traditionally recommended for maximum spiritual benefit.' }
      ],
      relatedSlugs: ['ekadashi-vrat', 'ganesh-chaturthi', 'griha-pravesh']
    }
  },
  {
    id: 'ekadashi-vrat',
    slug: 'ekadashi-vrat',
    name: 'Ekadashi Vrat Udyapan & Pujan',
    nameHindi: 'एकादशी व्रत उद्यापन एवं भगवान विष्णु पूजन',
    category: 'Vrat & Katha',
    tag: 'Sacred Vrat Ritual',
    isFeatured: false,
    shortDesc: 'Vedic Udyapan ritual performed after completing 24 Ekadashi fasts to seal spiritual vows and receive Lord Vishnu supreme grace.',
    duration: '3 - 4 Hours',
    panditCount: 2,
    startingPrice: 3100,
    packages: [
      { name: 'Standard Ekadashi Pujan', price: 3100, pandits: 2, desc: 'Vishnu Sahasranama Path, Tulsi Archana, Hawan & Aarti.' },
      { name: 'Full 24 Devta Udyapan', price: 7100, pandits: 5, desc: '24 Devta Sthapana, 24 Kalash Pujan, Hawan & 5 Brahmin Bhoj Sankalp.' }
    ],
    details: {
      introduction: 'Ekadashi is celebrated in Padma Purana as the most beloved day of Lord Vishnu. The Udyapan ritual is the sacred culmination performed after observing 24 Ekadashi fasts, expressing gratitude and securing eternal spiritual merit.',
      benefits: [
        'Believed to cleanse heavy karmic impressions and soul-level blockages.',
        'Promotes deep mental discipline, health detoxification, and spiritual focus.',
        'Bestows health, longevity, and divine grace upon the devotee and family.',
        'Fulfills sacred vows made to Lord Hari.'
      ],
      occasions: 'Devshayani Ekadashi, Devutthana Ekadashi, Nirjala Ekadashi, or any designated Ekadashi Tithi.',
      procedure: [
        'Sankalp and Holy Bath (Snan Vidhi)',
        'Shree Hari Vishnu Shodashopachara Pujan with Yellow Flowers',
        'Tulsi Archana with 108 Vishnu Ashtottara Shatanamavali',
        'Ekadashi Vrat Katha & Mahatmya Recitation',
        'Special Hawan with Ghee, Til & Samidha',
        'Brahmin Bhoj & Vastra Daan'
      ],
      samagriByPandit: ['Pure Cow Ghee', 'Yellow Flowers & Yellow Cloth', 'Fresh Tulsi Leaves', 'Hawan Herbs & Til', 'Yellow Chandan'],
      samagriByHost: ['Fresh Fruits & Milk Sweets', 'Fresh Yellow Garlands', 'Daan Items (Bedsheet, Utensils, Clothes for Brahmins)'],
      faqs: [
        { q: 'Is Udyapan mandatory after completing the Ekadashi fast cycle?', a: 'Yes, as per Narada Purana, performing Udyapan seals and solidifies the spiritual benefits gathered over 24 fasts.' },
        { q: 'Can Udyapan be performed at home?', a: 'Yes, Vedic Brahmins can setup the 24 Kalash Mandal and perform the complete Udyapan at your home.' }
      ],
      relatedSlugs: ['satyanarayan-katha', 'lakshmi-pooja']
    }
  },
  {
    id: 'ganesh-chaturthi',
    slug: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi Vrat & Siddhi Vinayak Pujan',
    nameHindi: 'गणेश चतुर्थी व्रत एवं रिद्धि-सिद्धि विनायक पूजन',
    category: 'Vrat & Katha',
    tag: 'Vighnaharta Ritual',
    isFeatured: false,
    shortDesc: 'Lord Ganesha worship with 108 Durva grass offerings, Ganapati Atharvashirsha path, and Modak Hawan for obstacle removal.',
    duration: '2 - 3 Hours',
    panditCount: 2,
    startingPrice: 2500,
    packages: [
      { name: 'Siddhi Vinayak Pujan', price: 2500, pandits: 2, desc: 'Ganesh Murti Sthapana, 108 Durva offering & Atharvashirsha Hawan.' },
      { name: 'Maha Ganapati Yagna', price: 5100, pandits: 3, desc: '1008 Durva Archana, Ashtadravya Hawan & 21 Modak Bhog.' }
    ],
    details: {
      introduction: 'Lord Ganesha is Vighnaharta (Remover of Obstacles) and Prathameshwar (First Worshipped Deity). According to Mudgala Purana and Ganesh Purana, worshiping Lord Ganesha with 108 tender Durva stems ensures success, wisdom, and auspicious beginnings.',
      benefits: [
        'Removes hurdles in career growth, education, business, and legal matters.',
        'Bestows intellect (Buddhi), wisdom, and divine prosperity (Riddhi-Siddhi).',
        'Shields new ventures, home purchases, and ceremonies from unexpected delays.',
        'Brings positive energy and joy to children and household members.'
      ],
      occasions: 'Ganesh Chaturthi, Sankashti Chaturthi, Vinayaka Chaturthi, or before initiating any major work.',
      procedure: [
        'Ganapati Avahan & Shodashopachara Pujan with Rakt Chandan',
        'Consecration of Siddhi Vinayak Idol & Mangal Kalash',
        '108 Durva Grass offering with Ashtottara Shatanamavali recitation',
        'Ganapati Atharvashirsha & Ganesh Chalisa Recitation',
        'Ganesh Hawan with Modak and Til Aahuti',
        'Karpura Aarti and distribution of Modak Prasad'
      ],
      samagriByPandit: ['Fresh Durva Grass (108 stems)', 'Rakt Chandan & Sindoor', 'Modak Hawan Mix', 'Pure Cow Ghee', 'Red Cloth & Mouli'],
      samagriByHost: ['Fresh Red Flowers (Hibiscus / Roses)', '21 Modaks / Besan Laddoos', 'Bananas & Seasonal Fruits', 'Coconuts (2 Pcs)'],
      faqs: [
        { q: 'Why is Durva grass essential for Lord Ganesha?', a: 'According to Puranic legend, Durva grass possesses unique sattvic cooling properties that absorb and retain Lord Ganesha divine energy.' },
        { q: 'What is the significance of Ganapati Atharvashirsha?', a: 'Atharvashirsha is a sacred Upanishadic hymn praising Lord Ganesha as the supreme cosmic reality.' }
      ],
      relatedSlugs: ['satyanarayan-katha', 'navgraha-shanti']
    }
  },
  {
    id: 'mata-ki-chowki',
    slug: 'mata-ki-chowki',
    name: 'Mata Ki Chowki & Bhakti Jagran Path',
    nameHindi: 'माता की चौकी एवं भक्ति जागरण पाठ',
    category: 'Vrat & Katha',
    tag: 'Devotional Sangeet',
    isFeatured: true,
    shortDesc: 'Joyful devotional gathering and Maa Durga Pujan with Akhand Jyoti, Chhapan Bhog offering, and Mata Stuti.',
    duration: '4 - 6 Hours',
    panditCount: 3,
    startingPrice: 7500,
    packages: [
      { name: 'Standard Chowki Vidhi', price: 7500, pandits: 3, desc: 'Chowki Sthapana, Durga Path, Bhajans & Kanya Pujan Vidhi.' },
      { name: 'Grand Musical Chowki', price: 15000, pandits: 5, desc: 'Full Orchestra Team, Grand Altar Floral Decoration, 56 Bhog & Kanya Pujan.' }
    ],
    details: {
      introduction: 'Mata Ki Chowki is a grand devotional celebration where Goddess Durga is invoked through continuous sacred songs, Durga Saptashati recitations, and Akhand Jyoti. It fills the entire residence with supreme spiritual energy.',
      benefits: [
        'Fills the home with intense positive vibrations, peace, and divine bliss.',
        'Invokes the protective shield of Goddess Durga over family members.',
        'Brings happiness during major family milestones and celebrations.',
        'Fulfills long-standing personal prayers.'
      ],
      occasions: 'Navratri, Weddings, Anniversaries, Housewarming, and Birthdays.',
      procedure: [
        'Ganesh Sthapana & Kalash Pujan',
        'Akhand Jyoti Lighting with Desi Cow Ghee',
        'Durga Avahan & 16 Shringhar Arpan',
        'Durga Saptashati & Stuti Path',
        'Devotional Bhajans & Musical Kirtan',
        'Kanya Pujan & Grand Aarti with 56 Bhog Prasad'
      ],
      samagriByPandit: ['Mata Shringhar Kit & Red Chunri', 'Akhand Ghee Diya', 'Durga Yantra', 'Hawan Kit & Kapoor'],
      samagriByHost: ['Chhapan Bhog / Halwa-Puri-Chana Prasad', 'Decorated Altar & Fresh Flowers', 'Seating arrangements for guests'],
      faqs: [
        { q: 'How long does Mata Ki Chowki last?', a: 'Typically 4 to 5 hours starting in the evening with Aarti around midnight or night conclusion.' },
        { q: 'Is Kanya Pujan included in Mata Ki Chowki?', a: 'Yes, worshiping 9 young girls representing forms of Goddess Durga is an integral part of the event.' }
      ],
      relatedSlugs: ['durga-pooja', 'chandi-path']
    }
  },

  // ---------------------------------------------------------------------------
  // 2. SHIV POOJA
  // ---------------------------------------------------------------------------
  {
    id: 'rudrabhishek',
    slug: 'rudrabhishek',
    name: 'Maha Rudrabhishek Pujan',
    nameHindi: 'महा रुद्राभिषेक पूजन (दूध, दही, शहद, गंगाजल से)',
    category: 'Shiv Pooja',
    tag: 'Most Popular Shiv Ritual',
    isFeatured: true,
    shortDesc: 'Vedic Shivling abhishek with Cow Milk, Curd, Honey, Sugarcane Juice, Ghee & Gangajal accompanied by Sri Rudram chanting.',
    duration: '2.5 - 4 Hours',
    panditCount: 2,
    startingPrice: 3500,
    packages: [
      { name: 'Standard Rudrabhishek', price: 3500, pandits: 2, desc: 'Panchamrit Abhishek, Namakam-Chamakam Recitation & Shiv Aarti.' },
      { name: 'Laghu Rudra Abhishek', price: 7500, pandits: 4, desc: '11 Recitations of Rudram, Bhasma Shringhar & 108 Bilva Patra Archana.' }
    ],
    details: {
      introduction: 'Maha Rudrabhishek is the most supreme Vedic worship of Lord Shiva in his Rudra form, detailed in Yajurveda and Shiva Purana. Chanting Namakam and Chamakam while pouring sacred Panchamrit and Gangajal over Narmadeshwar Shivling neutralizes planetary afflictions and bestows inner peace.',
      benefits: [
        'Traditionally believed to alleviate chronic health ailments, mental stress, and planetary doshas (Kaal Sarp, Shani Mahadasha).',
        'Provides divine protection against negative energies, bad omens, and evil eyes.',
        'Fulfills righteous desires (Dharma, Artha, Kama, Moksha) and grants career clarity.',
        'Promotes deep spiritual liberation and emotional calmness.'
      ],
      occasions: 'Mondays (Somwar), Shravan Month, Maha Shivratri, Pradosh Vrat, or during personal recovery.',
      procedure: [
        'Ganesh Pujan & Shubh Sankalp',
        'Shivling Sthapana & Panchamrit Abhishekam (Milk, Curd, Ghee, Honey, Sugarcane Juice)',
        'Continuous Gangajal & Shuddha Jaladhara with Sri Rudram Namakam Recitation',
        'Chamakam Path & 108 Bilva Patra Archana',
        'Bhasma Shringhar, Dhatura, Aak Flowers & Chandan Anulepan',
        'Maha Mangal Aarti & distribution of Shiv Prasad'
      ],
      samagriByPandit: ['Bhasma & Shwet Chandan', '108 Fresh Bilva Patra', 'Dhatura Fruits & Aak Flowers', 'Pure Cow Ghee & Honey', 'Gangajal & Hawan Kit'],
      samagriByHost: ['Fresh Cow Milk (3-5 Litres)', 'Fresh Curd & Honey', 'Sugarcane Juice', 'Fresh Flowers & Garlands'],
      faqs: [
        { q: 'Can Rudrabhishek be performed at home?', a: 'Yes, it can be performed on a Narmadeshwar or Sphatik Shivling at home under the guidance of learned Vedic Brahmins.' },
        { q: 'Which liquids are used in Panchamrit Abhishek?', a: 'Pure Cow Milk, Curd, Desi Ghee, Honey, and Sugarcane Juice or Fruit Juices.' }
      ],
      relatedSlugs: ['maha-mrityunjaya', 'laghu-rudra', 'shiv-puran-katha']
    }
  },
  {
    id: 'maha-mrityunjaya',
    slug: 'maha-mrityunjaya',
    name: 'Maha Mrityunjaya Jaap & Hawan',
    nameHindi: 'महा मृत्युंजय मंत्र जप एवं हवन (आरोग्य एवं सुरक्षा हेतु)',
    category: 'Shiv Pooja',
    tag: 'Health & Protection',
    isFeatured: true,
    shortDesc: 'Potent recitations of the life-giving Maha Mrityunjaya Mantra (11,000 / 21,000 / 125,000 jaap) with Hawan for health and protection.',
    duration: 'Full Day / Multi-Day Ritual',
    panditCount: 5,
    startingPrice: 6500,
    packages: [
      { name: '11,000 Mantra Jaap', price: 6500, pandits: 3, desc: '11,000 Jaap + Dashansh Hawan + Tarpan + Marjan.' },
      { name: '21,000 Mantra Jaap', price: 11500, pandits: 5, desc: '21,000 Jaap + Special Amrita Hawan + Rudra Abhishek.' }
    ],
    details: {
      introduction: 'The Maha Mrityunjaya Mantra found in Rigveda and Yajurveda is a supreme life-nourishing verse dedicated to Lord Tryambaka (Shiva). Performing dedicated Jaap and Hawan creates an impenetrable divine armor around the devotee.',
      benefits: [
        'Traditionally recited for overcoming severe illnesses, physical weakness, and health crises.',
        'Provides divine protection against unexpected mishaps, accidents, and fear of death.',
        'Bestows physical stamina, mental clarity, and longevity.',
        'Pacifies severe horoscope afflictions (Maraka Dasha).'
      ],
      occasions: 'During critical health challenges, Birthdays, Shravan Month, or Shani Mahadasha.',
      procedure: [
        'Vedic Sankalp for Patient / Host',
        'Maha Mrityunjaya Yantra Sthapana & Kalash Pujan',
        'Consecrated Jaap with Sphatik / Rudraksha Rosaries by Brahmins',
        'Dashansh Hawan with Amrita Herbal Samagri & Cow Ghee',
        'Tarpan, Marjan & Brahmin Daan Vidhi',
        'Karpura Aarti & Protective Thread Distribution'
      ],
      samagriByPandit: ['Rudraksha Malas', 'Mrityunjaya Yantra', 'Amrita Healing Hawan Herbs', 'Cow Ghee & Guggal'],
      samagriByHost: ['Fresh Cow Milk', 'Fresh Fruits', 'Black Sesame (Kala Til)'],
      faqs: [
        { q: 'Can Jaap be done on behalf of a family member?', a: 'Yes, Vedic Sankalp is taken explicitly in the name and Gotra of the person seeking health and protection.' },
        { q: 'How many recitations are recommended?', a: 'Minimum 11,000 recitations for personal health, and 21,000 or 125,000 for critical crises.' }
      ],
      relatedSlugs: ['rudrabhishek', 'navgraha-shanti']
    }
  },
  {
    id: 'shiv-puran-katha',
    slug: 'shiv-puran-katha',
    name: 'Shiv Puran Katha & Path',
    nameHindi: 'शिव महापुराण कथा एवं पारायण पाठ',
    category: 'Shiv Pooja',
    tag: 'Puran Recitation',
    isFeatured: false,
    shortDesc: '7-day sacred recitation of Shiva Purana describing the divine lilas, cosmic wisdom, and grace of Lord Mahadeva.',
    duration: '7 Days (3 Hrs Daily)',
    panditCount: 2,
    startingPrice: 15000,
    packages: [
      { name: '7-Day Saptah Path', price: 15000, pandits: 2, desc: 'Complete 7-day Katha recitation, daily Aarti & Grand Purnahuti.' }
    ],
    details: {
      introduction: 'Shiva Purana is one of eighteen sacred Purana texts written by Maharshi Ved Vyas. It details the creation of the cosmos, the divine glory of Shiva-Parvati, 12 Jyotirlingas, and profound spiritual liberation.',
      benefits: [
        'Purifies the entire residential atmosphere with divine lore.',
        'Instills deep devotion, mental detachment, and inner peace.',
        'Removes family discord and establishes spiritual harmony.',
        'Bestows immense blessings of Lord Mahadeva.'
      ],
      occasions: 'Shravan month, Maha Shivratri week, or special spiritual vows.',
      procedure: [
        'Vyas Peeth Sthapana & Shivling Pujan',
        'Daily Puran Recitation & Devotional Pravachan',
        'Daily Rudrabhishek & Aarti',
        '7th Day Purnahuti Yagna & Brahmin Bhoj'
      ],
      samagriByPandit: ['Shiva Purana Sacred Granth', 'Pujan Samagri & Hawan Kit'],
      samagriByHost: ['Vyas Peeth Seating Arrangement', 'Daily Fresh Flowers & Prasad'],
      faqs: [
        { q: 'Can this be hosted at home?', a: 'Yes, any clean hall, living room, or home temple space is ideal for hosting Shiva Purana Katha.' }
      ],
      relatedSlugs: ['rudrabhishek', 'laghu-rudra']
    }
  },
  {
    id: 'laghu-rudra',
    slug: 'laghu-rudra',
    name: 'Laghu Rudra Abhishek & Shanti Yagya',
    nameHindi: 'लघु रुद्र अभिषेक एवं शांति महायज्ञ',
    category: 'Shiv Pooja',
    tag: 'Grand Yagna',
    isFeatured: false,
    shortDesc: '121 recitations of Sri Rudram by 11 learned Vedic Pandits for grand planetary peace, societal goodwill, and cosmic alignment.',
    duration: 'Full Day',
    panditCount: 11,
    startingPrice: 25000,
    packages: [
      { name: 'Laghu Rudra Mahayagna', price: 25000, pandits: 11, desc: '121 Rudra Paths + 11 Kundiya Hawan + Shringhar & Bhandara.' }
    ],
    details: {
      introduction: 'Laghu Rudra is a grand Vedic ceremony involving 121 recitations of Namakam and Chamakam accompanied by continuous Abhishek and Hawan by 11 Vedic Brahmins.',
      benefits: [
        'Neutralizes intense horoscope afflictions and structural vastu defects.',
        'Attracts royal abundance, fame, and societal goodwill.',
        'Establishes lasting peace and prosperity for the entire family.'
      ],
      occasions: 'Shravan month, Maha Shivratri, or major corporate / family milestones.',
      procedure: ['11 Brahmin Sthapana', '121 Rudra Abhishekam', 'Dashansh Hawan', 'Purnahuti & Bhandara'],
      samagriByPandit: ['Full Hawan Herbs & Ghee', '1008 Belpatra', 'Panchamrit Kit'],
      samagriByHost: ['Large Venue', 'Bhoj Preparation for Brahmins'],
      faqs: [{ q: 'How many Pandits participate?', a: 'Minimum 11 learned Vedic Brahmins recite Sri Rudram simultaneously.' }],
      relatedSlugs: ['rudrabhishek', 'maha-mrityunjaya']
    }
  },

  // ---------------------------------------------------------------------------
  // 3. PITRU POOJA
  // ---------------------------------------------------------------------------
  {
    id: 'shraddh-karma',
    slug: 'shraddh-karma',
    name: 'Shraddh Karma, Pind Daan & Brahmin Bhoj',
    nameHindi: 'श्राद्ध कर्म, पिंडदान एवं ब्राह्मण भोजन',
    category: 'Pitru Pooja',
    tag: 'Ancestral Homage',
    isFeatured: true,
    shortDesc: 'Vedic ancestral homage ritual combining Pind Daan, Tarpan, and Brahmin Daan for peace and spiritual liberation of departed ancestors.',
    duration: '2.5 - 3.5 Hours',
    panditCount: 2,
    startingPrice: 3500,
    packages: [
      { name: 'Standard Shraddh & Pind Daan', price: 3500, pandits: 2, desc: 'Tarpan, 7 Pind Sthapana with Rice & Sesame, Vishnu Pad Pujan, Brahmin Bhoj.' },
      { name: 'Complete Pitru Shanti', price: 6100, pandits: 3, desc: 'Includes Pitru Gayatri Jaap, Vishnu Sahasranama, Pind Daan & Vastra Daan.' }
    ],
    details: {
      introduction: 'Shraddh and Pind Daan are the sacred Vedic rituals performed to express profound gratitude towards deceased parents and ancestors (Pitrus). As taught in Garuda Purana, satisfying ancestors ensures generational peace, protection, and lineage strength.',
      benefits: [
        'Believed to release ancestral souls into higher peaceful realms (Moksha).',
        'Removes Pitru Dosh barriers in career, marriage, health, and progeny.',
        'Bestows ancestral blessings of health, lineage stability, and domestic harmony.'
      ],
      occasions: 'Annual Death Tithi of ancestors, Pitru Paksha (Shraddh fortnight), Sarvapitri Amavasya.',
      procedure: [
        'Holy Bath & Sacred Sankalp',
        'Vishnu Pujan & Pitru Invocation',
        'Pind Daan with Cooked Rice Balls, Sesame, Honey & Kusha',
        'Tarpan Jal Arpan with Vedic Mantras',
        'Brahmin Bhoj & Vastra Daan Vidhi'
      ],
      samagriByPandit: ['Black Sesame (Kala Til)', 'Kusha Grass & Ring', 'Barley (Jau)', 'Mouli & White Cloth', 'Pinda Ingredients'],
      samagriByHost: ['Cooked Rice & Kheer', 'Puri & Sabzi for Brahmin Bhoj', 'Daan Vastra & Dakshina'],
      faqs: [
        { q: 'Can Shraddh be done if the exact death date is unknown?', a: 'Yes, Sarvapitri Amavasya is universally prescribed for all ancestors whose Tithi is unknown.' },
        { q: 'What is the significance of Pind Daan?', a: 'Pinda represents the subtle body, and offering it with mantras satisfies ancestral hunger and thirst.' }
      ],
      relatedSlugs: ['pitru-tarpan', 'pitru-paksha-pooja']
    }
  },
  {
    id: 'pitru-tarpan',
    slug: 'pitru-tarpan',
    name: 'Pitru Tarpan & Jal Arpan Vidhi',
    nameHindi: 'पितृ तर्पण एवं जलांजलि विधि',
    category: 'Pitru Pooja',
    tag: 'Amavasya Ritual',
    isFeatured: false,
    shortDesc: 'Water and black sesame seed offering with Vedic mantras to satisfy three generations of ancestors.',
    duration: '1 - 1.5 Hours',
    panditCount: 1,
    startingPrice: 1500,
    packages: [
      { name: 'Standard Tarpan', price: 1500, pandits: 1, desc: 'Devarshi, Rishi & Pitru Tarpan with Kusha & Kala Til.' }
    ],
    details: {
      introduction: 'Tarpan is the act of offering water mixed with black sesame seeds and Kusha grass to divine beings, sages, and ancestors.',
      benefits: ['Quenches spiritual thirst of ancestors.', 'Fosters peace and harmony in the home.'],
      occasions: 'Amavasya, Solar / Lunar Eclipses, Pitru Paksha.',
      procedure: ['Deva Tarpan', 'Rishi Tarpan', 'Pitru Tarpan', 'Til Jal Daan'],
      samagriByPandit: ['Kusha Ring', 'Black Sesame', 'Barley'],
      samagriByHost: ['Brass / Copper Vessel', 'Clean Water'],
      faqs: [{ q: 'Who is eligible to perform Tarpan?', a: 'Sons and descendants with reverence for ancestors.' }],
      relatedSlugs: ['shraddh-karma', 'pitru-paksha-pooja']
    }
  },
  {
    id: 'pitru-paksha-pooja',
    slug: 'pitru-paksha-pooja',
    name: 'Pitru Paksha Special Shanti & Narayan Bali',
    nameHindi: 'पितृ पक्ष विशेष शांति एवं नारायण बलि पूजा',
    category: 'Pitru Pooja',
    tag: '16-Day Special',
    isFeatured: false,
    shortDesc: 'Comprehensive ancestral pacification ritual incorporating Narayan Bali and Pitru Suktam path for horoscope Pitru Dosh.',
    duration: '3 - 4 Hours',
    panditCount: 3,
    startingPrice: 6100,
    packages: [
      { name: 'Narayan Bali & Pitru Shanti', price: 6100, pandits: 3, desc: 'Narayan Bali Yagna, Vishnu Sahasranama & 11 Brahmin Daan.' }
    ],
    details: {
      introduction: 'Pitru Paksha is the 16-lunar day period dedicated specifically to ancestor veneration and Narayan Bali for unsatisfied ancestor souls.',
      benefits: ['Resolves severe Pitru Dosh in horoscopes.', 'Protects lineage prosperity.'],
      occasions: 'Bhadrapada Purnima to Sarvapitri Amavasya.',
      procedure: ['Narayan Pujan', 'Bali Haran Vidhi', 'Pind Daan', 'Hawan & Daan'],
      samagriByPandit: ['Narayan Bali Yantra', 'Full Hawan Kit'],
      samagriByHost: ['Food for Brahmins', 'Clothes for Daan'],
      faqs: [{ q: 'What is Narayan Bali?', a: 'A specialized Vedic ritual to pacify unsatisfied ancestor souls.' }],
      relatedSlugs: ['shraddh-karma', 'pitru-tarpan']
    }
  },

  // ---------------------------------------------------------------------------
  // 4. LAKSHMI & PROSPERITY POOJA
  // ---------------------------------------------------------------------------
  {
    id: 'lakshmi-pooja',
    slug: 'lakshmi-pooja',
    name: 'Maha Lakshmi & Kuber Dhan Varsha Pujan',
    nameHindi: 'महालक्ष्मी एवं श्री कुबेर धन वर्षा अनुष्ठान',
    category: 'Lakshmi & Prosperity Pooja',
    tag: 'Wealth & Prosperity',
    isFeatured: true,
    shortDesc: 'Shree Suktam & Kanakadhara Stotram recitation with Lotus flower offerings and Kuber Yantra consecration for business growth and financial abundance.',
    duration: '2.5 - 3.5 Hours',
    panditCount: 2,
    startingPrice: 3500,
    packages: [
      { name: 'Standard Lakshmi Pujan', price: 3500, pandits: 2, desc: 'Lakshmi Sthapana, 108 Lotus Flower Archana, Shree Suktam Hawan.' },
      { name: 'Ashta Lakshmi & Kuber Yagna', price: 7500, pandits: 3, desc: 'Ashta Lakshmi Avahan, Kanakadhara Path, Kuber Yantra & Lotus Hawan.' }
    ],
    details: {
      introduction: 'Maha Lakshmi is the divine consort of Lord Vishnu and the Goddess of wealth, fortune, and prosperity. As described in Rigveda Rigvidhana, reciting Shree Suktam with Lotus flower offerings invokes permanent prosperity.',
      benefits: [
        'Believed to remove financial stagnation and debt burdens.',
        'Attracts steady business sales, luxury, and material comfort.',
        'Instills harmony and elegance in the living atmosphere.'
      ],
      occasions: 'Diwali, Dhanteras, Fridays (Shukrawar), Sharad Purnima, or New Office opening.',
      procedure: [
        'Ganesh-Lakshmi Avahan & Kalash Sthapana',
        'Shree Yantra & Kuber Yantra Abhishekam',
        '108 Lotus Flower (Kamal Gatta) Offering with Lakshmi Namavali',
        'Shree Suktam & Kanakadhara Stotram Path',
        'Kamal Gatta & Kheer Hawan Aahuti',
        'Aarti & Prasad'
      ],
      samagriByPandit: ['Kamal Gatta (108)', 'Pure Cow Ghee & Kheer', 'Red Lotus Flowers', 'Shree Yantra', 'Kumkum & Saffron'],
      samagriByHost: ['Coins & Jewellery for Pujan', 'Fresh Fruits & Sweets', 'Red Cloth'],
      faqs: [{ q: 'Why are Lotus flowers offered to Lakshmi Maa?', a: 'Lotus symbolizes purity, transcendence, and divine wealth.' }],
      relatedSlugs: ['dhanteras-pooja', 'diwali-pooja']
    }
  },
  {
    id: 'dhanteras-pooja',
    slug: 'dhanteras-pooja',
    name: 'Dhanteras Kuber & Dhanvantari Pujan',
    nameHindi: 'धनतेरस कुबेर, धन्वंतरि एवं लक्ष्मी पूजन',
    category: 'Lakshmi & Prosperity Pooja',
    tag: 'Festive Special',
    isFeatured: false,
    shortDesc: 'Auspicious Dhanteras ritual worshiping Lord Dhanvantari for health and Lord Kuber for treasury growth.',
    duration: '2 Hours',
    panditCount: 2,
    startingPrice: 2700,
    packages: [
      { name: 'Dhanteras Vidhi', price: 2700, pandits: 2, desc: 'Dhanvantari Pujan, Kuber Pot Pujan, Yamdeep Daan & Hawan.' }
    ],
    details: {
      introduction: 'Dhanteras marks the beginning of Diwali celebrations, dedicated to Lord Dhanvantari (God of Ayurveda) and Lord Kuber.',
      benefits: ['Ensures physical wellness alongside wealth acquisition.', 'Blesses new brass/gold/silver purchases.'],
      occasions: 'Trayodashi Tithi of Kartik Krishna Paksha (Dhanteras).',
      procedure: ['Dhanvantari Avahan', 'Utensil / Gold Coin Pujan', 'Yamadeep Daan', 'Kuber Mantra Jaap'],
      samagriByPandit: ['Yamadeep Diya', 'Kuber Yantra', 'Ghee'],
      samagriByHost: ['Newly Bought Silver/Gold or Brass Utensil', 'Sweets'],
      faqs: [{ q: 'Why is Yamadeep lighted on Dhanteras?', a: 'To protect family members from premature health risks.' }],
      relatedSlugs: ['lakshmi-pooja', 'diwali-pooja']
    }
  },
  {
    id: 'diwali-pooja',
    slug: 'diwali-pooja',
    name: 'Deepawali Shubh Lakshmi Kuber Pujan',
    nameHindi: 'दीपावली शुभ महालक्ष्मी, सरस्वती एवं गणेश पूजन',
    category: 'Lakshmi & Prosperity Pooja',
    tag: 'Diwali Night Special',
    isFeatured: true,
    shortDesc: 'Complete Deepawali Mahamuhurat Pujan with Bahi-Khata Pujan, Ganesh-Lakshmi Sthapana & Deep Daan.',
    duration: '2.5 - 3 Hours',
    panditCount: 2,
    startingPrice: 4500,
    packages: [
      { name: 'Diwali Mahamuhurat Vidhi', price: 4500, pandits: 2, desc: 'Ganesh-Lakshmi-Saraswati Pujan, Bahi Khata Sthapana & Deep Daan Hawan.' }
    ],
    details: {
      introduction: 'Deepawali is the sacred night when Goddess Lakshmi visits pure and illuminated homes to bestow everlasting wealth.',
      benefits: ['Blesses account books and business registers.', 'Fills home with light, joy, and fortune.'],
      occasions: 'Amavasya Tithi of Kartik Month (Diwali Night).',
      procedure: ['Ganesh Sthapana', 'Maha Lakshmi Abhishekam', 'Bahi Khata / Laptop Pujan', 'Deep Daan Vidhi', 'Shree Suktam Hawan'],
      samagriByPandit: ['108 Earthen Diyas', 'Cow Ghee', 'Kheel Batasa', 'Lotus Flowers'],
      samagriByHost: ['Sweets', 'Fruits', 'Account Books / Laptop'],
      faqs: [{ q: 'Can Pandit ji perform Diwali Pooja at our office?', a: 'Yes, office business muhurat pujas are conducted as per exact lagna.' }],
      relatedSlugs: ['lakshmi-pooja', 'dhanteras-pooja']
    }
  },

  // ---------------------------------------------------------------------------
  // 5. GRIHA & SANSKAR POOJA
  // ---------------------------------------------------------------------------
  {
    id: 'griha-pravesh',
    slug: 'griha-pravesh',
    name: 'Griha Pravesh & Vastu Shanti Pujan',
    nameHindi: 'गृह प्रवेश एवं वास्तु शांति महापूजन (नूतन गृह)',
    category: 'Griha & Sanskar Pooja',
    tag: 'Housewarming Special',
    isFeatured: true,
    shortDesc: 'Vastu Purush pujan, Navgrah Yagna, Dwar Pujan, and Gau Pravesh ritual for new home peace and prosperity.',
    duration: '3.5 - 5 Hours',
    panditCount: 3,
    startingPrice: 4500,
    packages: [
      { name: 'Standard Griha Pravesh', price: 4500, pandits: 2, desc: 'Dwar Pujan, Kalash Yatra, Vastu Pujan, Navgrah Jaap & Hawan.' },
      { name: 'Grand Griha Pravesh Yagna', price: 8500, pandits: 4, desc: 'Gau Pravesh Vidhi, Vastu Naag-Nagin Sthapana, 1008 Hawan Aahuti & Kheer Boiling.' }
    ],
    details: {
      introduction: 'Griha Pravesh is the auspicious ceremony performed before residing in a newly constructed or purchased home to neutralize construction doshas.',
      benefits: [
        'Purifies living space from subtle energy blockages.',
        'Invites positive cosmic energies and Vastu Purush blessings.',
        'Protects residents from disharmony and financial loss.'
      ],
      occasions: 'Before shifting into a new apartment, villa, or renovated house.',
      procedure: [
        'Toran & Main Gate (Dwar) Pujan with Coconut Break',
        'Kalash Yatra by Lady of the House',
        'Vastu Purush & Navgrah Sthapana',
        'Milk Boiling Ritual (Milk Overflow Symbolizing Abundance)',
        'Vastu Shanti & Navgrah Hawan',
        'Maha Aarti & Home Tour Blessing'
      ],
      samagriByPandit: ['Vastu Naag-Nagin Pair', 'Silver / Copper Vastu Yantra', 'Hawan Kit & Wood', 'Mango Leaves & Toran', 'Gangajal & Ghee'],
      samagriByHost: ['Raw Milk & Vessel for Boiling', 'Fresh Flowers', 'Bananas & Sweets', 'New Kitchen Utensils'],
      faqs: [{ q: 'Is it necessary to sleep in the new house on Griha Pravesh night?', a: 'Yes, scriptures advise staying in the home after Griha Pravesh.' }],
      relatedSlugs: ['bhoomi-poojan', 'vastu-shanti', 'satyanarayan-katha']
    }
  },
  {
    id: 'bhoomi-poojan',
    slug: 'bhoomi-poojan',
    name: 'Bhoomi Poojan & Foundation Rituals',
    nameHindi: 'भूमि पूजन एवं आधारशिला स्थापना',
    category: 'Griha & Sanskar Pooja',
    tag: 'Construction Start',
    isFeatured: false,
    shortDesc: 'Foundation stone laying ritual worshiping Mother Earth (Bhoomi Devi) and Sheshnag before starting construction.',
    duration: '2 - 3 Hours',
    panditCount: 2,
    startingPrice: 3500,
    packages: [
      { name: 'Bhoomi Pujan Vidhi', price: 3500, pandits: 2, desc: 'Bhoomi Devi Pujan, Sheshnag Sthapana, 5 Brick Consecration & Hawan.' }
    ],
    details: {
      introduction: 'Bhoomi Poojan seeks forgiveness and permission from Mother Earth before digging or laying construction foundations.',
      benefits: ['Ensures smooth construction without site accidents.', 'Pacifies subtle earth elements.'],
      occasions: 'Before starting construction of house, factory, or building.',
      procedure: ['North-East Corner Digging', 'Sheshnag & Silver Kalash Sthapana', '5 Sacred Bricks (Shila) Pujan', 'Earth Hawan'],
      samagriByPandit: ['Silver Sheshnag', '5 Gemstones (Panchratna)', 'Copper Kalash', 'Hawan Kit'],
      samagriByHost: ['5 Bricks', 'Spade for Digging', 'Flowers & Sweets'],
      faqs: [{ q: 'What direction is chosen for Bhoomi Pujan?', a: 'Ishanya Kona (North-East corner) of the plot.' }],
      relatedSlugs: ['griha-pravesh', 'vastu-shanti']
    }
  },
  {
    id: 'naamkaran',
    slug: 'naamkaran',
    name: 'Naamkaran Sanskar (Naming Ceremony)',
    nameHindi: 'नामकरण संस्कार (शिशु नामकरण विधि)',
    category: 'Griha & Sanskar Pooja',
    tag: 'Baby Sanskar',
    isFeatured: false,
    shortDesc: 'Vedic naming ritual calculating astrological Nakshatra syllable for newborn baby health and fortune.',
    duration: '2 Hours',
    panditCount: 1,
    startingPrice: 2100,
    packages: [
      { name: 'Naamkaran Vidhi', price: 2100, pandits: 1, desc: 'Nakshatra Pujan, Honey Whispering into Baby ear, Hawan & Blessings.' }
    ],
    details: {
      introduction: 'Naamkaran is the 5th of 16 Vedic Sanskars, assigning an astrologically aligned name to the newborn.',
      benefits: ['Aligns child identity with favorable planetary vibrations.', 'Bestows good health and character.'],
      occasions: '11th, 12th, or 21st day after baby birth.',
      procedure: ['Ganesh Pujan', 'Nakshatra Pujan', 'Whispering Name 3 Times in Right Ear', 'Honey & Ghee Tasting', 'Aarti'],
      samagriByPandit: ['Honey', 'Gold Ring for Whispering', 'Hawan Kit'],
      samagriByHost: ['New Clothes for Baby', 'Kheer / Sweets'],
      faqs: [{ q: 'How is the first letter calculated?', a: 'Based on exact birth time, date, place and Moon Nakshatra pada.' }],
      relatedSlugs: ['annaprashan', 'mundan']
    }
  },
  {
    id: 'annaprashan',
    slug: 'annaprashan',
    name: 'Annaprashan Sanskar (First Grain Feeding)',
    nameHindi: 'अन्नप्राशन संस्कार (शिशु प्रथम अन्न प्राशन)',
    category: 'Griha & Sanskar Pooja',
    tag: 'Baby Sanskar',
    isFeatured: false,
    shortDesc: 'First solid food (Kheer) feeding ritual consecrated with Agni Pujan for digestive health and vigor.',
    duration: '1.5 - 2 Hours',
    panditCount: 1,
    startingPrice: 2100,
    packages: [
      { name: 'Annaprashan Vidhi', price: 2100, pandits: 1, desc: 'Agni Pujan, Silver Spoon Kheer Feeding & Choice Object Testing.' }
    ],
    details: {
      introduction: 'Annaprashan marks the infant transition from exclusive milk diet to solid wholesome grains.',
      benefits: ['Ensures healthy digestion and physical development.', 'Celebrates child growth milestone.'],
      occasions: '6th month for boys, 5th/7th month for girls.',
      procedure: ['Ganesh & Annapurna Pujan', 'Consecration of Kheer with Mantras', 'Gold/Silver Spoon Feeding', 'Tray Choice Test (Book, Pen, Gold, Food)'],
      samagriByPandit: ['Hawan Kit', 'Silver Spoon'],
      samagriByHost: ['Rice Kheer cooked in Desi Ghee', 'Tray with Pen, Book, Clothes, Money'],
      faqs: [{ q: 'Why is Kheer chosen for first food?', a: 'Rice and milk represent sattvic nourishment and soothing energy.' }],
      relatedSlugs: ['naamkaran', 'mundan']
    }
  },
  {
    id: 'mundan',
    slug: 'mundan',
    name: 'Mundan Sanskar (First Hair Cutting Ceremony)',
    nameHindi: 'मुंडन संस्कार (चूड़ाकरण संस्कार)',
    category: 'Griha & Sanskar Pooja',
    tag: 'Baby Sanskar',
    isFeatured: false,
    shortDesc: 'Sacred first hair shaving ritual purifying past karmic hair and stimulating brain development.',
    duration: '2 Hours',
    panditCount: 1,
    startingPrice: 2500,
    packages: [
      { name: 'Mundan Vidhi', price: 2500, pandits: 1, desc: 'Kuldevi Pujan, Barber Hair Shaving Pujan, Haldi Paste Application & Hawan.' }
    ],
    details: {
      introduction: 'Mundan (Chudakarana) is the 8th Vedic Sanskar, shaving birth hair to cleanse past life impressions.',
      benefits: ['Improves scalp health and hair density.', 'Keeps baby head cool and active.'],
      occasions: '1st, 3rd, or 5th year of the child.',
      procedure: ['Kuldevi & Ganesh Pujan', 'Hair Shaving Vidhi', 'Haldi-Chandan Paste Application', 'Ganga Snan & Hawan'],
      samagriByPandit: ['Turmeric Chandan Paste', 'Hawan Kit'],
      samagriByHost: ['Barber Arrangement', 'Fresh Clothes for Child'],
      faqs: [{ q: 'Is Haldi applied on scalp after Mundan?', a: 'Yes, Haldi Chandan acts as a natural antiseptic and cooling agent.' }],
      relatedSlugs: ['naamkaran', 'annaprashan']
    }
  },

  // ---------------------------------------------------------------------------
  // 6. HAVAN & SHANTI POOJA
  // ---------------------------------------------------------------------------
  {
    id: 'navgraha-shanti',
    slug: 'navgraha-shanti',
    name: 'Navgraha Shanti Pujan & Hawan',
    nameHindi: 'नवग्रह शांति पूजन एवं महाहवन (९ ग्रहों की अनुकूलता हेतु)',
    category: 'Havan & Shanti Pooja',
    tag: 'Planetary Peace',
    isFeatured: true,
    shortDesc: 'Worship of all 9 planetary deities (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu) to balance horoscope energies.',
    duration: '3 - 4 Hours',
    panditCount: 3,
    startingPrice: 3500,
    packages: [
      { name: 'Standard Navgraha Shanti', price: 3500, pandits: 2, desc: '9 Graha Mandap Sthapana, 108 Mantra Jaap for each planet & Hawan.' },
      { name: 'Maha Navgraha Samidha Yagna', price: 7100, pandits: 4, desc: '9 Specific Sacred Woods (Samidha), 1008 Jaap per planet & Grah Daan.' }
    ],
    details: {
      introduction: 'Navgraha Shanti is designed to harmonize malefic planetary influences (Dasha/Antardasha) and enhance auspicious planet strengths.',
      benefits: [
        'Mitigates career roadblocks, financial turbulence, and frequent illness.',
        'Brings overall stability, focus, and mental calm.',
        'Balances planetary vibrations in home and workplace.'
      ],
      occasions: 'During planetary Dasha changes, birth chart dosha remedies, or birthdays.',
      procedure: [
        'Ganesh-Gauri Pujan & Punyahavachan',
        '9 Planetary Deities Rice Color Mandala Sthapana',
        'Specific Vedic Mantra Chanting for Surya to Ketu',
        'Offering of 9 Unique Plant Woods (Arka, Palash, Khadir, Apamarga, Peepal, Gular, Shami, Durva, Kusha)',
        'Navgraha Hawan & Purnahuti',
        'Graha Daan (9 Grain Mix & Cloth Daan)'
      ],
      samagriByPandit: ['9 Color Cloth & Rice', '9 Special Samidha Woods', 'Navgraha Yantra', 'Ghee & Hawan Herbs'],
      samagriByHost: ['9 Grains (Wheat, Rice, Toor, Moong, Chana, Rajma, Sesame, Urad, Horsegram)', 'Fresh Flowers'],
      faqs: [{ q: 'Why are 9 different woods used in Hawan?', a: 'Each planetary deity resonates with a specific sacred tree species.' }],
      relatedSlugs: ['vastu-shanti', 'chandi-path', 'rudrabhishek']
    }
  },
  {
    id: 'vastu-shanti',
    slug: 'vastu-shanti',
    name: 'Vastu Dosh Shanti & Yagna',
    nameHindi: 'वास्तु दोष निवारण शांति पूजन एवं यज्ञ',
    category: 'Havan & Shanti Pooja',
    tag: 'Architectural Harmony',
    isFeatured: false,
    shortDesc: 'Vastu Purush pujan and 108 Ahuti Hawan to rectify structural and directional defects in buildings.',
    duration: '3 - 4 Hours',
    panditCount: 2,
    startingPrice: 3800,
    packages: [
      { name: 'Vastu Shanti Vidhi', price: 3800, pandits: 2, desc: 'Vastu Mandal Pujan, Yantra Consecration & Hawan.' }
    ],
    details: {
      introduction: 'Vastu Shanti remedies architectural defects (disproportions in North-East, South-West, Kitchen, Toilet placements) without demolition.',
      benefits: ['Restores peace and health in defective buildings.', 'Prevents financial drains.'],
      occasions: 'When experiencing persistent ill-health or family friction after moving into a house.',
      procedure: ['Vastu Purush Avahan', 'Directional Dikpal Pujan', 'Silver Snake Pair Burial / Sthapana', 'Vastu Hawan'],
      samagriByPandit: ['Vastu Yantra', 'Silver Snake Pair', 'Hawan Kit'],
      samagriByHost: ['Fresh Flowers', 'Fruits & Coconuts'],
      faqs: [{ q: 'Can Vastu Shanti be done without breaking walls?', a: 'Yes, Vedic Yantra Sthapana and Hawan pacify directional doshas energy-wise.' }],
      relatedSlugs: ['griha-pravesh', 'navgraha-shanti']
    }
  },
  {
    id: 'chandi-path',
    slug: 'chandi-path',
    name: 'Durga Saptashati & Chandi Path',
    nameHindi: 'दुर्गा सप्तशती / चंडी पाठ एवं महायज्ञ',
    category: 'Havan & Shanti Pooja',
    tag: 'Devi Armor',
    isFeatured: true,
    shortDesc: '13 Adhyay recitation of Durga Saptashati from Markandeya Purana for complete divine armor, protection, and obstacle eradication.',
    duration: '4 - 5 Hours',
    panditCount: 3,
    startingPrice: 5100,
    packages: [
      { name: 'Chandi Path Vidhi', price: 5100, pandits: 3, desc: 'Full 13 Chapters Path, Navarna Mantra Jaap & Chandi Hawan.' },
      { name: 'Samputit Chandi Path', price: 9500, pandits: 5, desc: 'Samputit Chandi Path, 10,000 Navarna Jaap & Grand Chandi Yagna.' }
    ],
    details: {
      introduction: 'Chandi Path is the supreme reverence of Goddess Durga destroying Mahishasura, Chanda-Munda, and Shumbha-Nishumbha. Reciting all 13 chapters of Durga Saptashati weaves an untouchable protective shield over the household.',
      benefits: [
        'Shields family from severe enemy trouble, envy, and evil eyes.',
        'Bestows courage, victory in legal matters, and material prosperity.',
        'Neutralizes severe negative planetary dashas.'
      ],
      occasions: 'Navratri, Tuesdays, Fridays, or court case struggles.',
      procedure: ['Kavach, Argala, Keelak Path', '13 Chapters Durga Saptashati Recitation', 'Navarna Mantra Hawan', 'Kanya Pujan & Aarti'],
      samagriByPandit: ['Chandi Yantra', 'Red Lotus & Flowers', 'Desi Ghee & Hawan Herbs'],
      samagriByHost: ['Halwa Puri Prasad for Kanyas', 'Fruits'],
      faqs: [{ q: 'What is Kanya Pujan?', a: 'Worshiping young girls representing forms of Goddess Durga.' }],
      relatedSlugs: ['durga-pooja', 'kali-pooja']
    }
  },
  {
    id: 'havan-yagya',
    slug: 'havan-yagya',
    name: 'Sacred Hawan & Mahayagna Vidhi',
    nameHindi: 'सर्वविघ्न निवारक पवित्र हवन एवं महायज्ञ',
    category: 'Havan & Shanti Pooja',
    tag: 'Sacred Fire Ritual',
    isFeatured: false,
    shortDesc: 'Purifying fire Yagna with 108 / 1008 Aahuti offerings of medicinal herbs into Agni Dev for atmospheric & inner purity.',
    duration: '2 - 3 Hours',
    panditCount: 2,
    startingPrice: 2700,
    packages: [
      { name: 'Standard Hawan Yagna', price: 2700, pandits: 2, desc: 'Agni Sthapana, 108 Gayatri & Maha Mrityunjaya Aahuti, Purnahuti.' }
    ],
    details: {
      introduction: 'Hawan (Yagna) is the ancient Vedic fire ritual where Agni acts as the divine messenger carrying offerings to celestial devatas.',
      benefits: ['Sterilizes home environment with herbal smoke.', 'Calms mind and uplifts spiritual aura.'],
      occasions: 'Birthdays, Anniversaries, New Year, or Monthly Vrat.',
      procedure: ['Kund Sthapana', 'Agni Pradhan Vidhi', '108 Sacred Aahutis', 'Purnahuti with Coconut & Ghee'],
      samagriByPandit: ['Dry Mango Wood', 'Samagri Mix (Guggal, Kapoor, Jatamansi)', 'Desi Cow Ghee'],
      samagriByHost: ['Dry Coconut (Gola)', 'Fresh Sweets'],
      faqs: [{ q: 'Does Hawan smoke cause eye irritation?', a: 'Pure Cow Ghee and herbal samagri produce medicinal aromatic smoke.' }],
      relatedSlugs: ['navgraha-shanti', 'rudrabhishek']
    }
  },

  // ---------------------------------------------------------------------------
  // 7. DEVI POOJA
  // ---------------------------------------------------------------------------
  {
    id: 'durga-pooja',
    slug: 'durga-pooja',
    name: 'Maa Durga Pujan & Navratri Anushthan',
    nameHindi: 'माँ दुर्गा पूजन एवं नवरात्रि विशेष अनुष्ठान',
    category: 'Devi Pooja',
    tag: 'Devi Mahatmya',
    isFeatured: true,
    shortDesc: 'Invoke the 9 forms of Navdurga (Shailputri to Siddhidatri) with Akhand Jyoti, Shringhar, and Durga Stuti.',
    duration: '3 - 4 Hours',
    panditCount: 2,
    startingPrice: 3500,
    packages: [
      { name: 'Navdurga Pujan Vidhi', price: 3500, pandits: 2, desc: 'Durga Sthapana, 16 Shringhar Offering, Durga Stuti & Hawan.' },
      { name: 'Full Navratri 9-Day Path', price: 11000, pandits: 3, desc: 'Daily Durga Saptashati Path, Akhand Jyoti & 9th Day Kanya Pujan.' }
    ],
    details: {
      introduction: 'Maa Durga is the embodiment of Shakti, cosmic power and divine protection.',
      benefits: [
        'Bestows fearlessness, inner strength, and vitality.',
        'Protects the household from all forms of negativity.'
      ],
      occasions: 'Chaitra Navratri, Sharad Navratri, Durgashtami.',
      procedure: ['Ghatasthapana (Kalash Sthapana)', 'Navdurga Avahan', '16 Shringhar Offering', 'Durga Chalisa & Stuti', 'Hawan & Kanya Pujan'],
      samagriByPandit: ['Durga Shringhar Kit', 'Red Chunri', 'Akhand Diya & Ghee', 'Hawan Kit'],
      samagriByHost: ['Halwa Puri Prasad', 'Coconut & Fruits'],
      faqs: [{ q: 'Why is Ghatasthapana done on 1st day of Navratri?', a: 'Kalash invokes cosmic waters and deity presence for 9 days.' }],
      relatedSlugs: ['chandi-path', 'saraswati-pooja', 'kali-pooja']
    }
  },
  {
    id: 'saraswati-pooja',
    slug: 'saraswati-pooja',
    name: 'Maa Saraswati Pujan & Vidya Prapti',
    nameHindi: 'माँ सरस्वती पूजन (विद्या, ज्ञान एवं कला वृद्धि हेतु)',
    category: 'Devi Pooja',
    tag: 'Wisdom & Education',
    isFeatured: false,
    shortDesc: 'Goddess Saraswati worship with white flowers, pen/book consecration, and Medha Suktam for students and artists.',
    duration: '2 Hours',
    panditCount: 1,
    startingPrice: 2100,
    packages: [
      { name: 'Saraswati Vidhi', price: 2100, pandits: 1, desc: 'Saraswati Sthapana, White Lotus Offering, Book & Pen Pujan, Hawan.' }
    ],
    details: {
      introduction: 'Goddess Saraswati is the deity of knowledge, speech, music, and fine arts.',
      benefits: ['Enhances memory retention, focus, and exam success.', 'Blesses musical and artistic talents.'],
      occasions: 'Vasant Panchami, Navratri, before major examinations.',
      procedure: ['Saraswati Avahan', 'White Flower & Chandan Offering', 'Books & Musical Instrument Consecration', 'Saraswati Stotram', 'Hawan'],
      samagriByPandit: ['White Chandan & Flowers', 'Yellow/White Cloth', 'Hawan Kit'],
      samagriByHost: ['Books & Pens of Students', 'Yellow Sweets / Boondi'],
      faqs: [{ q: 'Can books be kept during Saraswati Pooja?', a: 'Yes, student books are kept near deity for divine wisdom.' }],
      relatedSlugs: ['durga-pooja', 'kali-pooja']
    }
  },
  {
    id: 'kali-pooja',
    slug: 'kali-pooja',
    name: 'Maa Kali Vishesh Sadhna & Raksha Pujan',
    nameHindi: 'माँ काली विशेष साधना एवं शत्रु बाधा निवारण पूजन',
    category: 'Devi Pooja',
    tag: 'Ultimate Protection',
    isFeatured: false,
    shortDesc: 'Tantrik Vedic Mahakali ritual with Sarson lamp offering and Rahu-Ketu neutralization for extreme fearlessness.',
    duration: '3 Hours',
    panditCount: 2,
    startingPrice: 4100,
    packages: [
      { name: 'Mahakali Raksha Vidhi', price: 4100, pandits: 2, desc: 'Kali Yantra Sthapana, 108 Hibiscus Flower offering & Sarson Hawan.' }
    ],
    details: {
      introduction: 'Maa Kali is the fierce form of Divine Mother who destroys ignorance, ego, and dark forces.',
      benefits: ['Neutralizes enemy conspiracies and black magic.', 'Instills invincible courage.'],
      occasions: 'Amavasya night, Kaalratri during Navratri, or Deepawali night.',
      procedure: ['Kali Yantra Pujan', 'Red Hibiscus Offering', '108 Kali Namavali', 'Mustard Oil Lamp Vidhi', 'Hawan'],
      samagriByPandit: ['Red Hibiscus Flowers', 'Kali Yantra', 'Mustard Oil', 'Black Sesame'],
      samagriByHost: ['Pomegranate / Fruits', 'Dark Cloth'],
      faqs: [{ q: 'Is Mahakali Pooja safe at home?', a: 'Yes, Vedic Sattvic Mahakali pujan conducted by learned Brahmins brings pure protection.' }],
      relatedSlugs: ['durga-pooja', 'chandi-path']
    }
  }
];
