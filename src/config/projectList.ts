import type { Project } from "@/types/project";

export const projectList: Project[] = [
  /* mobile projects */
  {
    title: "Cashews Finance",
    period: "2021 - 2022",
    type: "mobile",
    category: "personal",
    priority: "high",
    status: "completed",
    link: [
      { ios: "https://apps.apple.com/us/app/1582436070/" },
      { android: "https://play.google.com/store/apps/details?id=com.cashews.finance" }
    ],
    images: [
      "/images/projects/cashews_finance/cashews_finance_1.webp",
    ],
    tech: [
      "Flutter",
      "BLoC",
      "Plaid",
      "InApp purchases"
    ],
    description: "Meet your smart personal accountant who'll tell you exactly how much you can safely spend."
  },
  {
    title: "Coina",
    type: "mobile",
    category: "personal",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/coina-cryptocurrency-app",
    images: [
      "/images/projects/coina/coina1.webp",
      "/images/projects/coina/coina2.webp",
      "/images/projects/coina/coina3.webp",
      "/images/projects/coina/coina4.webp",
      "/images/projects/coina/coina5.webp",
      "/images/projects/coina/coina6.webp",
      "/images/projects/coina/coina7.webp",
    ],
    tech: [
      "iOS App",
      "Android",
      "User Defaults",
      "Ktor Client",
      "Jetpack Compose",
      "Swift UI",
      "Shared Prefs",
      "Realm Kotlin SDK"
    ],
    description: "This Project Built to test the Concept of Sharing the Business Logic between Native Android, iOS Apps using Kotlin Multiplatform with Ktor Client, Offline Caching with Realm Kotlin SDK to share Queries"
  },
  {
    title: "Autohub",
    type: "mobile",
    category: "personal",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/autohub-android",
    images: [
      "/images/projects/autohub/autohub1.webp",
      "/images/projects/autohub/autohub2.webp",
      "/images/projects/autohub/autohub3.webp",
      "/images/projects/autohub/autohub4.webp",
      "/images/projects/autohub/autohub5.webp",
    ],
    tech: [
      "Kotlin",
      "Android SDK",
      "Gradle",
      "MVVM",
      "Retrofit 2",
      "RxJava 2",
      "Gson",
      "Realm Database",
      "SharedPreferences",
      "Kotlin Coroutines",
      "Timber",
      "LeakCanary",
      "Firebase",
    ],
    description: "Android Application is created to view Github Account Information with Authentication Basic Auth Username and Password Powered By Github Api V3 and the Base Structure of the Project is MVVM with Navigation Components and Kotlin Programming Language"
  },
  {
    title: "Destiny",
    type: "mobile",
    category: "personal",
    priority: "medium",
    status: "completed",
    images: [
      "/images/projects/destiny/destiny_1.webp",
      "/images/projects/destiny/destiny_2.webp",
      "/images/projects/destiny/destiny_3.webp",
      "/images/projects/destiny/destiny_4.webp",
    ],
    tech: [
      "Kotlin",
      "Android SDK",
      "Gradle",
      "MVVM",
      "Retrofit 2",
      "RxJava 2",
      "Gson",
      "Realm Database",
      "SharedPreferences",
      "Kotlin Coroutines",
      "Timber",
      "LeakCanary",
      "Firebase",
    ],
    description: "Android Application Built to show Restaurants and Food Delivery App The Idea of this project is to Build a Food Delivery Api and see the Results on Mobile App and the Mobile App Built with Kotlin and MVVM"
  },
  {
    title: "Lumity - Learn. Share. Grow.",
    type: "mobile",
    category: "client-work",
    priority: "high",
    status: "completed",
    images: [
      "/images/projects/lumity/lumity_1.webp",
      "/images/projects/lumity/lumity_2.webp",
      "/images/projects/lumity/lumity_3.webp",
      "/images/projects/lumity/lumity_4.webp",
      "/images/projects/lumity/lumity_5.webp",
      "/images/projects/lumity/lumity_6.webp",
    ],
    tech: [
      "iOS",
      "Swift",
      "UIKit",
      "SwiftUI",
      "Cloud-hosted REST API",
      "DB + media storage",
      "Authentication",
      "Analytics",
      "Push notifications",
      "Search engine",
      "CDN",
      "Media APIs (podcasts, YouTube, reading lists)",
      "Cloud services (AWS/GCP/Azure)",
    ],
    description: "Build your Learning Community",
    link: "https://apps.apple.com/us/app/lumity-learn-share-grow/id1565191495"
  },
  {
    title: "To-Do app",
    type: "mobile",
    category: "personal",
    priority: "medium",
    status: "completed",
    images: [
      "/images/projects/todoapp.webp",
    ],
    tech: [
      "Flutter",
      "Cross-platform",
      "Material-design",
      "Android",
      "iOS"
    ],
    description: "A modern, cross-platform Todo/Task management mobile application built with Flutter. Features a beautiful UI with dashboard, priority tasks, task categories, and full CRUD operations for managing your daily tasks."
  },
  {
    title: "Ultimatum",
    type: "mobile",
    category: "personal",
    priority: "high",
    status: "completed",
    link: [
      { android: "https://play.google.com/store/apps/details?id=com.ultimatum" }
    ],
    images: [
      "/images/projects/ultimatum/ultimatum1.webp",
      "/images/projects/ultimatum/ultimatum2.webp",
      "/images/projects/ultimatum/ultimatum3.webp",
      "/images/projects/ultimatum/ultimatum4.webp",
      "/images/projects/ultimatum/ultimatum5.webp",
      "/images/projects/ultimatum/ultimatum6.webp",
      "/images/projects/ultimatum/ultimatum7.webp",
      "/images/projects/ultimatum/ultimatum8.webp",
      "/images/projects/ultimatum/ultimatum9.webp",
    ],
    tech: [
      "Flutter",
      "Cross-platform",
      "Android",
      "Live Streaming",
    ],
    description: "An interactive social gaming app that revolutionizes the truth or dare experience. Built with Flutter for cross-platform compatibility, Ultimatum offers two engaging modes: PLAYER mode for livestreaming challenges set by friends and followers, and WATCHER mode for voting on global player performances. The app creates a community-driven platform where users can accept, create, and complete daring challenges while engaging with an international audience through real-time streaming and voting features."
  },
  {
    title: "evköm charge",
    type: "mobile",
    category: "personal",
    priority: "high",
    status: "completed",
    link: [
      { android: "https://play.google.com/store/apps/details?id=com.evk.charge" }
    ],
    images: [
      "/images/projects/evkom/evkom1.webp",
      "/images/projects/evkom/evkom2.webp",
      "/images/projects/evkom/evkom3.webp",
      "/images/projects/evkom/evkom4.webp",
      "/images/projects/evkom/evkom5.webp",
    ],
    tech: [
      "Flutter",
      "Cross-platform",
      "Android",
      "EV Charging",
      "Sustainable Technology"
    ],
    description: "A stylish and modern electric vehicle charging application designed to empower sustainable lifestyles by seamlessly integrating EV charging into daily routines. Built with Flutter for cross-platform excellence, evköm combines cutting-edge technology with elegant design to transform electric vehicle charging into a desirable lifestyle experience. The app revolutionizes charging infrastructure by making it not only functional but also aesthetically pleasing, inspiring users to embrace greener and more connected transportation solutions."
  },
  {
    title: "Exeeria",
    type: "mobile",
    category: "personal",
    priority: "high",
    status: "completed",
    link: [
      { android: "https://play.google.com/store/apps/details?id=com.exeeria" }
    ],
    images: [
      "/images/projects/exeeria/exeeria1.webp",
      "/images/projects/exeeria/exeeria2.webp",
      "/images/projects/exeeria/exeeria3.webp",
      "/images/projects/exeeria/exeeria4.webp",
    ],
    tech: [
      "Flutter",
      "Cross-platform",
      "Android",
      "QR Code Scanning",
      "Healthcare Technology",
      "Patient-Provider Communication"
    ],
    description: "A revolutionary healthcare mobile application that enhances patient-provider interaction through innovative technology. Built with Flutter, Exeeria enables patients to receive personalized medical instructions from their certified healthcare providers via QR code scanning. The app features a patent-protected technology that allows direct communication between patients and providers, enabling users to access, save, and review medical instructions anytime, anywhere. With built-in chat functionality and a comprehensive provider verification system, Exeeria facilitates clear, accurate, and enjoyable health service experiences while maintaining the highest standards of medical information reliability."
  },
  
  /* web projects */
  {
    title: "LOCAVO",
    type: "web",
    category: "personal",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/LOCAVO",
    link: "https://locavo.vercel.app/",
    images: [
      "/images/projects/locavo/home_page.png",
      "/images/projects/locavo/home.png",
      "/images/projects/locavo/cars_page.png",
      "/images/projects/locavo/front1.webp",
      "/images/projects/locavo/front2.webp",
      "/images/projects/locavo/front3.webp",
      "/images/projects/locavo/front4.webp",
      "/images/projects/locavo/front5.webp",
      "/images/projects/locavo/front6.webp",
    ],
    tech: [
      "TALL stack",
      "React",
      "MySQL",
      "JWT",
      "Laravel",
      "RestAPI",
    ],
    description: "LOCAVO - A tall stack car rental management system built with React, Laravel, and MySQL. Features user authentication, car management, rental processing, and admin dashboard. Implements multi-layer architecture with frontend, backend, database, and service layers for scalable and maintainable codebase."
  },
  {
    title: "Brokr",
    type: "web",
    category: "personal",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/brokr",
    link: "https://brokr-three.vercel.app/",
    images: [
      "/images/projects/brokr.webp"
    ],
    tech: [
      "Angular",
      "TypeScript",
    ],
    description: "Brokr is a modern Angular-based travel booking platform that allows users to search, filter, and book attractions, cars, flights, and stays. The application features a clean UI, advanced filtering, and modular architecture for easy scalability and maintenance."
  },
  {
    title: "Myth Memes",
    type: "web",
    category: "personal",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/Myth-Meme",
    link: "https://mythmemes.com/",
    images: [
      "/images/projects/mythmemes/mythmemes1.webp",
      "/images/projects/mythmemes/mythmemes2.webp",
    ],
    tech: [
      "Next.js",
      "Bluehost",
    ],
    description: "Myth Memes is a modern web application that serves as a digital mythology platform, creating and showcasing original fantasy characters and stories for the digital age. The project combines traditional storytelling with modern web technologies to build an immersive universe of original myths and legends."
  },
  {
    title: "American Psychiatrists",
    type: "web",
    category: "client-work",
    priority: "high",
    status: "completed",
    link: "http://americanpsychiatrists.com/",
    images: [
      "/images/projects/americanpsychiatrists_home.webp",
      "/images/projects/americanpsychiatrists_admin.webp",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Axios",
      "EmailJS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Bluehost",
    ],
    description: "Developed a comprehensive web application that connects patients with qualified psychiatrists across the United States. The platform serves as a trusted directory where mental health professionals can showcase their profiles while patients can easily search and find appropriate care providers in their area."
  },
  {
    title: "American Dietitians",
    type: "web",
    category: "client-work",
    priority: "high",
    status: "completed",
    link: "http://americandietitians.com/",
    images: [
      "/images/projects/americandietitians_home.webp",
      "/images/projects/americandietitians_admin.webp",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Axios",
      "EmailJS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Bluehost",
    ],
    description: "Developed a comprehensive healthcare platform connecting patients with registered dietitians across the United States. The platform serves as a marketplace where dietitians can create professional profiles and patients can search for qualified nutrition specialists based on location, specialization, and availability."
  },
  {
    title: "American Animal Doctors",
    type: "web",
    category: "client-work",
    priority: "high",
    status: "completed",
    link: "http://americananimaldoctor.com/",
    images: [
      "/images/projects/americananimaldoctor_home.webp",
      "/images/projects/americananimaldoctor_admin.webp",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Axios",
      "EmailJS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Bluehost",
    ],
    description: "Developed a comprehensive veterinary services platform that connects pet owners with trusted animal doctors across the United States. The platform features a dual-sided marketplace with separate interfaces for pet owners seeking veterinary care and veterinarians managing their professional profiles."
  },
  {
    title: "Social Crypto Insight",
    type: "web",
    category: "personal",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/Social_Crypto_Platform",
    link: "https://social-crypto-platform.vercel.app/",
    images: ["/images/projects/social-crypto-platform.webp"],
    description: "A comprehensive real-time cryptocurrency analytics platform that combines live market data with social media insights. Built as a modern full-stack web application, it provides traders, investors, and crypto enthusiasts with essential market intelligence and trending information.",
    role: "Full Stack Web Developer",
    achievements: [
      "Built full-stack application with 6+ RESTful API endpoints for crypto market data",
      "Implemented real-time data integration with CoinMarketCap API (30-second auto-refresh)",
      "Created responsive UI with dark/light theme using Shadcn UI components and Tailwind CSS",
      "Developed comprehensive error handling and loading states for optimal user experience",
      "Designed mobile-first responsive layout with interactive data tables and smooth animations"
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/UI", "Next.js API Routes", "CoinMarketCap API", "Axios", "RESTful API", "Responsive Design"],
  },
  {
    title: "Block 2 Block Exchange",
    type: "web",
    category: "client-work",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/b2bexc",
    link: "http://b2bexc.com/",
    images: [
      "/images/projects/b2bexc_home.webp",
    ],
    tech: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
      "Axios",
      "EmailJS",
      "Node.js",
      "Google Analytics",
      "Express.js",
      "PostgreSQL",
      "Bluehost",
    ],
    description: "Developed a comprehensive corporate website and business platform for Block 2 Block Exchange, a boutique advisory and incubator fund specializing in blockchain-enabled enterprises. The platform serves as a digital presence for the company's three core functions: advisory services, collaboration partnerships, and seed-stage incubation."
  },
  /* trading projects */
  {
    title: "Trading Strategies Automation",
    type: "Trading",
    category: "client-work",
    priority: "high",
    status: "completed",
    source: [
      { FE: "https://github.com/0x0Zeus/fortified_capital_ventures_FE" },
      { BE: "https://github.com/0x0Zeus/fortified_capital_ventures_BE" },
    ],
    link: "http://fortifiedcapitalventures.com/",
    images: [
      "/images/projects/fortifiedcapitalventures/strategycontrol1.webp",
      "/images/projects/fortifiedcapitalventures/strategycontrol2.webp",
      "/images/projects/fortifiedcapitalventures/strategycontrol3.webp",
      "/images/projects/fortifiedcapitalventures/strategycontrol4.webp",
      "/images/projects/fortifiedcapitalventures/strategycontrol5.webp",
      "/images/projects/fortifiedcapitalventures/datacontrol.webp",
      "/images/projects/fortifiedcapitalventures/charts1.webp",
      "/images/projects/fortifiedcapitalventures/charts2.webp",
      "/images/projects/fortifiedcapitalventures/usersetting.webp",
      "/images/projects/fortifiedcapitalventures/workflow.webp",
    ],
    tech: [
      "FastAPI",
      "Uvicorn",
      "Python",
      "Pandas",
      "NumPy",
      "Pytz",
      "Redis",
      "Google Analytics",
      "PyJWT",
      "OAuth2",
      "HTTPX",
      "Requests",
      "AIOHTTP",
      "WebSockets",
      "TastyTrade",
      "Charles Schwab",
      "TastyTrade DXFeed",
      "EMA",
    ],
    description: "Designed and developed a production-grade automated trading system enabling systematic trading across multiple brokers with real-time market data integration. The platform supports both equity and futures trading with advanced execution features including tick-level precision, multi-timeframe support, and comprehensive risk management."
  },
  // {
  //   title: "AI Voice Agent - SitePal",
  //   type: "web",
  //   category: "client-work",
  //   priority: "medium",
  //   status: "completed",
  //   link: "https://www.sitepal.com/",
  //   description: "AI voice agent platform for automated customer service and interactive voice responses."
  // },
  // {
  //   title: "Village Dental DTC",
  //   type: "web",
  //   category: "client-work",
  //   priority: "medium",
  //   status: "completed",
  //   link: "https://www.villagedentaldtc.com/",
  //   description: "Dental clinic website with appointment booking and patient management system."
  // },
  // {
  //   title: "Kiwitaxi",
  //   type: "web",
  //   category: "client-work",
  //   priority: "medium",
  //   status: "completed",
  //   link: "https://kiwitaxi.com/",
  //   description: "Taxi booking and transportation service platform."
  // },
  // {
  //   title: "Baby Ape Social Club",
  //   type: "web",
  //   category: "client-work",
  //   priority: "low",
  //   status: "completed",
  //   link: "https://www.babyapesocialclub.com/",
  //   description: "NFT marketplace and social platform for digital collectibles."
  // },
  // {
  //   title: "Scorep",
  //   type: "web",
  //   category: "client-work",
  //   priority: "low",
  //   status: "completed",
  //   link: "https://scorep.co/",
  //   description: "NFT marketplace platform for digital assets and collectibles."
  // },
  // {
  //   title: "Vdara Hotel & Spa",
  //   type: "web",
  //   category: "client-work",
  //   priority: "high",
  //   status: "completed",
  //   link: "https://vdara.mgmresorts.com/",
  //   description: "Vdara Hotel & Spa is a luxury, all-suite, non-smoking, and non-gaming hotel located within the CityCenter complex on the Las Vegas Strip. The website serves as a portal for guests to explore accommodations, amenities, and make reservations.",
  //   tech: ["Angular", ".NET"],
  // },
  // {
  //   title: "Colgate",
  //   type: "web",
  //   category: "client-work",
  //   priority: "high",
  //   status: "completed",
  //   link: "https://www.colgate.com/",
  //   description: "Colgate's website is a global platform providing information about oral health products, educational resources, and company initiatives. It caters to a diverse audience, including consumers and dental professionals.",
  //   tech: ["Angular", ".NET"],
  // },
  // {
  //   title: "Brilliant Earth",
  //   type: "web",
  //   category: "client-work",
  //   priority: "high",
  //   status: "completed",
  //   link: "https://www.brilliantearth.com/",
  //   description: "Brilliant Earth is an e-commerce platform specializing in ethically sourced fine jewelry. The website offers a rich user experience with features like product customization, virtual try-ons, and educational content about ethical sourcing.",
  //   tech: ["Angular", ".NET"],
  // },
  // {
  //   title: "Apps Ninjas - Configuration Platform",
  //   type: "web",
  //   category: "client-work",
  //   priority: "medium",
  //   status: "completed",
  //   link: "http://www.appsninjas.com/#/ConfiguracionApps",
  //   description: "Apps Ninjas platform offering mobile app solutions, focusing on payment processing and point-of-sale systems with configuration interface for applications.",
  //   tech: ["Angular", "Express.js"],
  // },
  // {
  //   title: "Baby Box Co",
  //   type: "web",
  //   category: "client-work",
  //   priority: "medium",
  //   status: "completed",
  //   link: "https://www.babyboxco.com",
  //   description: "Baby Box Co. is a company that provides baby boxes and educational resources to new parents. Their website offers information about their products, parenting tips, and access to their online courses.",
  //   tech: ["Angular", "Express.js"],
  // },
  // {
  //   title: "My Accent Way",
  //   type: "web",
  //   category: "client-work",
  //   priority: "medium",
  //   status: "completed",
  //   link: "https://myaccentway.com/",
  //   description: "My Accent Way is an online platform offering accent reduction and English pronunciation training. The website provides course information, enrollment options, and resources for non-native English speakers aiming to improve their accent.",
  //   tech: ["Angular", "Express.js"],
  // },
  // {
  //   title: "Berlitz",
  //   type: "web",
  //   category: "client-work",
  //   priority: "high",
  //   status: "completed",
  //   link: "http://www.berlitz.com/",
  //   description: "Berlitz is a global language education company offering language instruction, cultural training, and business communication skills. Their website provides information on courses, locations, and enrollment options.",
  //   tech: ["Angular", "Express.js"],
  // },
  // {
  //   title: "Tellora.ai",
  //   type: "web",
  //   category: "client-work",
  //   priority: "high",
  //   status: "completed",
  //   link: "https://tellora.ai",
  //   description: "Tellora.ai is an AI voice agent designed specifically for dental practices. It answers and handles patient calls, schedules appointments, and manages basic queries—no setup needed. The AI speaks naturally, understands emotions, works in multiple languages, integrates with your tools, runs 24/7, and helps dental clinics save time, reduce staff load, and improve patient satisfaction."
  // },
  {
    title: "Otto Aviation",
    type: "web",
    category: "client-work",
    priority: "high",
    status: "completed",
    link: "https://www.ottoaviation.com/",
    description: "Otto Aviation wanted to develop their Figma design into a fully pixel perfect and responsive Webflow website. Otto Aviation is an Aerospace company. The challenging part was that they wanted the website to be completed really fast and also wanted it to be perfect. It contains many pages and they wanted it to be very fast. The website was completed before the deadline and they were very happy with the end results."
  },
  // {
  //   title: "Ceras Health",
  //   type: "web",
  //   category: "client-work",
  //   priority: "high",
  //   status: "completed",
  //   link: "https://cerashealth.com/",
  //   description: "Ceras Health is an innovative digital healthcare platform that empowers patients and providers through real-time remote monitoring, AI-driven insights, and seamless care coordination. The platform aims to enhance patient quality of life, reduce healthcare costs, and improve outcomes by delivering continuous, personalized care throughout the patient lifecycle—from preventative programs to chronic condition management and post-discharge care.",
  //   tech: ["Node.js", "Next.js", "React Native", "TensorFlow", "AWS"],
  // },
  /* ai projects */
  {
    title: "Retell Voice Bot",
    type: "ai",
    category: "personal",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/retell-voice-assistant",
    link: "https://retell-voice-bot.vercel.app/",
    description: "Modern voice assistant built with React and Retell AI. Features real-time voice conversations, beautiful UI with Tailwind CSS, and smooth animations with Framer Motion. Perfect for building conversational AI interfaces with clean, production-ready code.",
    images: [
      "/images/projects/voice-reteller.webp"
    ],
    tech: ["Retell AI", "React", "Tailwind CSS", "Framer Motion", "Voice Recognition"]
  },
  {
    title: "Trading Arts",
    type: "ai",
    category: "client-work",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/TrdArts",
    link: "https://trdarts.com/",
    images: [
      "/images/projects/trdarts.webp"
    ],
    tech: [
      "AI Blog Generation",
      "Flask",
      "Next.js",
      "Bluehost",
    ],
    description: "Blog Websites for the world of Art, Auctions and NFTs"
  },
  {
    title: "LiveLikeKONG",
    type: "ai",
    category: "client-work",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/LiveLikeKong",
    link: "https://livelikekong.com/",
    images: [
      "/images/projects/livelikekong.webp"
    ],
    tech: [
      "AI Blog Generation",
      "Flask",
      "Next.js",
      "Bluehost",
    ],
    description: "Live Like Kong is a premier marketing website for the $KONG token, embodying the spirit of luxury, community, and the king of the jungle. From the Jungle to the Moon, we're building a community passionate about living life well, creating wealth, and having fun along the way."
  },
  {
    title: "Shaolin Snow Monks",
    type: "ai",
    category: "client-work",
    priority: "low",
    status: "completed",
    source: "https://github.com/0x0Zeus/shaolin-snow-monks",
    link: "https://livelikekong.com/",
    images: [
      "/images/projects/shaolinsnowmonks.webp"
    ],
    tech: [
      "AI Blog Generation",
      "Flask",
      "Next.js",
      "Bluehost",
    ],
    description: "Live Like Kong is a premier marketing website for the $KONG token, embodying the spirit of luxury, community, and the king of the jungle. From the Jungle to the Moon, we're building a community passionate about living life well, creating wealth, and having fun along the way."
  },
  {
    title: "Goal Moon Shoot",
    type: "ai",
    category: "client-work",
    priority: "low",
    status: "completed",
    source: "https://github.com/0x0Zeus/goalmoonshoot",
    link: "https://goalmoonshot.com/",
    images: [
      "/images/projects/goalmoonshoot.webp"
    ],
    tech: [
      "AI Blog Generation",
      "Flask",
      "Next.js",
      "Bluehost",
    ],
    description: "From the Pitch to the Moon — Welcome to Goal to the Moon! 🌕⚽"
  },
  /* 3D projects */
  {
    title: "Drone 3D Showcase",
    type: "3D",
    category: "personal",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/Drone",
    link: "https://drone-liard-zeta.vercel.app/",
    images: [
      "/images/projects/drone.webp"
    ],
    tech: [
      "Three.js",
    ],
    description: "This project is a 3D web application that showcases an interactive 3D model of a drone using Three.js."
  },
  {
    title: "3D Online Tank Battle in Unity3D",
    type: "3D",
    category: "personal",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/tank-wars-3d-online",
    images: [
      "/images/projects/tank/1.webp",
      "/images/projects/tank/2.webp",
      "/images/projects/tank/3.webp",
      "/images/projects/tank/4.webp",
      "/images/projects/tank/5.webp",
      "/images/projects/tank/6.webp",
    ],
    tech: [
      "C#",
      "Unity",
    ],
    description: "A 3D online multiplayer tank battle game built with Unity3D. Players control tanks (and helicopters) in dynamic environments, featuring destructible terrain, special effects, and a variety of vehicles and weapons."
  },
  {
    title: "Borgward 3D Car Showcase",
    type: "3D",
    category: "personal",
    priority: "medium",
    status: "completed",
    source: "https://github.com/0x0Zeus/borgward",
    images: [
      "/images/projects/borgward.webp",
    ],
    tech: [
      "C#",
      "Unity",
    ],
    description: "This is a 3D interactive car showcase for the Borgward BX7 SUV, built as a web-based 360° panoramic experience. The project allows users to explore the car in detail through an immersive 3D environment."
  },
  {
    title: "Global Hotspot Visualization",
    type: "3D",
    category: "personal",
    priority: "high",
    status: "completed",
    source: "https://github.com/0x0Zeus/globe-hotspot-visualization.git",
    link: "https://globe-hotspot-visualization.vercel.app/",
    images: [
      "/images/projects/global.webp",
    ],
    tech: [
      "WebGL",
      "Three.js",
      "Hotspots",
    ],
    description: "Interactive 3D globe visualization displaying data-driven hotspots from CSV files, with info modals, CSV upload, and animated atmosphere/clouds. Built with Three.js."
  }
]