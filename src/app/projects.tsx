"use client";
import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  id: string;
  img: string;
  title: string;
  desc: string;
  longDesc?: string;
  technologies?: Technology[];
  images?: ProjectImage[];
  demoLink?: string;
  githubLink?: string;
  duration?: string;
  category: ("web" | "mobile" | "fullstack" | "ai")[];  // Changed to array
}

export const PROJECTS: Project[] = [
  {
    id: "career-bridge",
    img: "/image/careerbridge (5).png",
    title: "CareerBridge: Connecting Talent",
    desc: "CareerBridge is a Next.js-powered job platform offering advanced search, personalized recommendations, and application tracking.",
    longDesc: "CareerBridge is an innovative job platform that connects job seekers with exciting opportunities. Built with Next.js and React, it offers a seamless user experience with advanced search, personalized recommendations, and application tracking. The platform integrates modern UI components, data visualization, and interactive maps. It utilizes Redux for state management and React Slick for carousels. CareerBridge empowers job seekers to discover and apply for positions while helping employers efficiently manage hiring.",
    technologies: [
      { name: "Next.js", color: "green" },
      { name: "Bootsrap", color: "blue" },
      { name: "Redux-toolkit", color: "green" },
      { name: "AOS", color: "blue" },
      { name: "Chart.js", color: "green" },
    ],
    category: ["web"],
    duration: "Aug 2024 - Nov 2024",
    images: [
      { url: "/image/careerbridge (3).png", alt: "Landing Page 1" },
      { url: "/image/careerbridge (4).png", alt: "Lanind Page 2" },
      { url: "/image/careerbridge (5).png", alt: "Lanind Page 3" },
      { url: "/image/careerbridge1.png", alt: "Lanind Page mobile" },
      { url: "/image/careerbridge1 (1).png", alt: "Lanind Page mobile" },
    ],
    demoLink: "https://careerbridgebyusaid.vercel.app",
    githubLink: "https://github.com/usaidinfo/superio"
  },
  {
    id: "mawjood",
    img: "/image/mawjood (11).png",
    title: "Mawjood - Business Directory",
    desc: "Mawjood is Saudi Arabia's leading web-based local business directory and search platform, connecting customers with verified businesses.",
    longDesc: "Mawjood stands as Saudi Arabia's premier web-based local business discovery platform, revolutionizing how residents and visitors connect with businesses across the Kingdom. Launched in 2024 with a mission to digitize local commerce and support Saudi Arabia's Vision 2030, Mawjood has grown from a simple directory into a comprehensive web ecosystem serving thousands of businesses and tens of thousands of users across major Saudi cities including Riyadh, Jeddah, and beyond.\n\nThe web application operates as a multi-faceted business directory covering diverse categories including Restaurants, Hotels, Salons, Real Estate, Travel Services, Healthcare Providers, Educational Institutions, and B2B Businesses. Each business listing features comprehensive information including detailed descriptions, contact details, location data with GPS coordinates, working hours, service catalogs, image galleries, and verified credentials. The intelligent search system enables users to discover businesses through location-based queries, category filters, keyword searches, and proximity-based recommendations.\n\nThe web platform is built with Next.js 16 and React 19, providing server-side rendering capabilities and optimal performance through Turbopack bundling. The responsive interface is crafted using Tailwind CSS 4 with shadcn/ui components and Radix UI primitives, ensuring an accessible and visually appealing experience across desktop, tablet, and mobile browsers. The platform supports full internationalization with Arabic and English language support, including RTL (right-to-left) layout support for Arabic content, catering to Saudi Arabia's bilingual digital landscape.\n\nThe application's backend powers all core functionalities through a robust RESTful API that handles user authentication, business management, search operations, payment processing, subscription management, and content delivery. The system manages comprehensive data for users, businesses, categories, cities, regions, reviews, subscriptions, payments, advertisements, blogs, and tourist places, ensuring seamless data synchronization and real-time updates across the web interface.\n\nMawjood's business listing system offers comprehensive management capabilities accessible through the web dashboard. Business owners can create detailed profiles with business information, upload multiple images and logos through an intuitive interface, set working hours, define service catalogs with pricing, manage contact information including WhatsApp integration, and provide location data with interactive maps. The platform supports business verification through Commercial Registration (CR) number validation, enabling verified badges that enhance credibility and trust among potential customers.\n\nThe review and rating system empowers customers to share authentic feedback directly through the web interface. Users can submit 1-5 star ratings accompanied by detailed comments, with the system automatically calculating average ratings and review counts displayed prominently on business profiles. The platform implements review moderation with deletion request workflows, ensuring quality and authenticity. Business owners receive real-time notifications of new reviews and can track their reputation metrics through comprehensive analytics dashboards accessible from their web accounts.\n\nLocation services form a critical component of Mawjood's web functionality. The platform integrates interactive mapping using Mapbox GL and Leaflet, enabling users to visualize business locations directly in their browsers, get turn-by-turn directions, and discover nearby businesses. The geolocation system supports city, region, and country-level filtering, with automatic location detection using browser geolocation APIs. Businesses can display their precise coordinates on embedded maps, and users can search by proximity, making it effortless to find services in their immediate vicinity through the web interface.\n\nSubscription management provides businesses with flexible monetization options accessible entirely through the web dashboard. The system supports multiple billing intervals including daily, weekly, monthly, yearly, and custom periods. Subscription plans offer various benefits such as premium listing placement, verified badges, top placement in search results, advertisement creation capabilities, trust stamps, and enhanced visibility features. The web interface includes sophisticated coupon and discount management with percentage-based or fixed-amount discounts, usage limits, and time-bound promotional campaigns that businesses can configure and track online.\n\nThe payment processing system integrates secure payment gateways accessible through the web platform, enabling businesses to purchase subscriptions and manage their premium features directly from their browsers. The system tracks payment statuses including pending, completed, failed, and refunded transactions, with comprehensive payment history and invoice generation viewable in the web dashboard. Business owners can monitor their subscription status, renewal dates, and payment schedules through intuitive web interfaces.\n\nAdvertisement management enables businesses to promote their listings through various placement options configured via the web dashboard. The platform supports multiple advertisement types including category placements, top banner positions, footer advertisements, business listing integrations, blog listing ads, homepage promotions, and hero strip placements. Businesses can create targeted campaigns through the web interface with specific geographic targeting by city, region, or country, scheduling start and end dates, and tracking performance metrics in real-time.\n\nThe lead management system provides businesses with comprehensive tools accessible through the web dashboard to track and manage customer inquiries. The enquiry system supports multiple status workflows including open, in-progress, closed, and rejected states, enabling businesses to organize and respond to customer requests efficiently through the web interface. Business owners receive notifications for new enquiries and can track conversion metrics to optimize their customer acquisition strategies, all managed through intuitive web dashboards.\n\nMawjood's content management system includes a robust blogging platform accessible through the web interface where administrators and authorized users can create, publish, and manage blog content. The blog system features a rich text editor with image upload capabilities, category organization, tag management, SEO optimization with meta titles and descriptions, and publishing workflows. Blog content helps businesses improve their SEO presence and provides valuable information to users about local businesses, services, and industry insights, all managed and displayed through the web platform.\n\nThe tourist places feature enables the platform to showcase attractions and points of interest across Saudi cities through dedicated web pages. Each tourist place includes detailed descriptions, image galleries, best time to visit information, and curated business sections highlighting relevant services in the area. This feature supports tourism initiatives and helps visitors discover both attractions and nearby businesses through an immersive web browsing experience.\n\nUser authentication and authorization implement multiple secure login methods accessible through the web interface. The platform supports traditional email and password authentication, OTP-based verification for both email and phone numbers sent directly to users' devices, and social login integration with Google and Apple Sign-In. The system provides secure session management with role-based permissions distinguishing between regular users, business owners, and administrators, all managed through the web interface with comprehensive user profile management including avatar uploads and verification status tracking.\n\nThe favorites system allows users to save businesses they're interested in for quick access later, all managed through their web accounts. Users can create personalized collections of favorite businesses, making it easy to revisit preferred services, share recommendations, and build personal business directories accessible from any device with a web browser.\n\nBusiness analytics and insights provide owners with valuable data accessible through comprehensive web dashboards about their listing performance. The platform tracks view counts, review trends, enquiry volumes, and user engagement metrics displayed through interactive charts and graphs. Business owners can access competitor analysis tools through the web interface to understand how their listings compare to others in their category and location, enabling data-driven optimization strategies.\n\nThe platform's search functionality implements sophisticated algorithms accessible through the web interface, considering multiple factors including business name, description, category, location, ratings, and popularity. Search results can be filtered by category, city, rating, distance, and other criteria directly in the browser. The system supports autocomplete suggestions, recent searches, and popular searches to enhance user experience and discovery, all delivered through fast, responsive web pages.\n\nMawjood's notification system keeps users and business owners informed about important events through the web interface. The platform displays in-app notifications for new reviews, enquiry submissions, subscription renewals, payment confirmations, and administrative updates. Users can manage notification preferences through their web accounts, ensuring they stay informed about relevant activities.\n\nThe platform implements comprehensive admin capabilities accessible through a dedicated web dashboard for platform management. Administrators can manage user accounts, approve or reject business listings, moderate reviews, create and manage subscription plans, configure site settings, manage categories and locations, handle advertisements, and access platform-wide analytics, all through an intuitive web interface designed for efficient content management and user support.\n\nSite customization features allow administrators to configure platform-wide settings through the web dashboard including contact information, social media links, about page content, mission and vision statements, and branding elements. The platform supports dynamic content management enabling updates without code deployments, all managed through the web interface.\n\nThe web application's architecture emphasizes scalability, performance, and maintainability. The use of TypeScript ensures type safety and improved developer experience. React Query (TanStack Query) provides efficient data fetching, caching, and synchronization across the web platform. Zustand state management offers lightweight and performant global state management for the web interface. The platform implements service layer architectures separating business logic from UI components, promoting code reusability and testability.\n\nImage management leverages Cloudinary integration for optimized image storage, transformation, and delivery through the web platform. The system automatically generates thumbnails, responsive image variants, and handles image optimization for different devices and connection speeds, ensuring fast loading times across all web browsers and network conditions.\n\nThe web application follows responsive design principles ensuring optimal usability across desktop computers, tablets, and mobile browsers. The platform's mobile-responsive approach recognizes that many users in Saudi Arabia access digital services through smartphones, ensuring the web interface adapts seamlessly to different screen sizes and touch interactions.\n\nMawjood supports Saudi Arabia's digital transformation goals by providing local businesses with web-based tools they need to establish and grow their online presence. The platform enables small and medium enterprises to compete effectively in the digital marketplace, reach new customers through web search, and build their reputation through verified listings and customer reviews accessible to anyone with internet access.\n\nThe platform's multi-language support with Arabic and English ensures accessibility for both Arabic-speaking locals and English-speaking expatriates and visitors. The internationalization system extends beyond simple translation to include RTL (right-to-left) layout support for Arabic content, culturally appropriate date and number formatting, and region-specific business practices, all seamlessly integrated into the web experience.\n\nMawjood's business verification system enhances trust and credibility in the marketplace. Businesses can verify their Commercial Registration numbers through the web interface, earning verified badges that distinguish them from unverified listings. This verification process helps customers identify legitimate businesses and reduces fraud, supporting a safer digital commerce environment accessible through standard web browsers.\n\nThe platform's analytics and reporting capabilities provide businesses with insights accessible through web dashboards into their online presence performance. Business owners can track metrics including profile views, enquiry submissions, review trends, and search visibility. These insights enable businesses to optimize their listings, improve their services based on customer feedback, and make informed decisions about subscription upgrades and marketing investments, all through intuitive web interfaces.\n\nThe web platform's integration capabilities allow for future expansion and third-party service connections. The application's API architecture enables integration with external services such as payment gateways, CRM systems, marketing automation tools, and business management software, all accessible and manageable through web interfaces.\n\nThe platform implements comprehensive data privacy and security measures compliant with international standards and local regulations. User data is encrypted in transit and at rest, authentication tokens are securely managed through the web application, and the platform follows best practices for handling sensitive business and personal information accessible through secure web connections.\n\nMawjood's user experience design prioritizes simplicity and efficiency in the web interface. The application guides users through intuitive workflows for finding businesses, reading reviews, contacting businesses, and managing their accounts, all accessible through standard web browsers. Business owners benefit from streamlined web-based processes for listing creation, subscription management, and performance monitoring.\n\nThe platform's content discovery features extend beyond simple search to include curated recommendations, trending businesses, featured listings, and category-based browsing, all accessible through the web interface. These discovery mechanisms help users explore new businesses and services they might not have known about, supporting both user engagement and business visibility through engaging web experiences.\n\nMawjood's commitment to quality is evident in its comprehensive moderation systems accessible through web dashboards. Business listings undergo review before publication, ensuring accuracy and completeness. Review moderation helps maintain authentic feedback while preventing spam and abuse. The platform's admin tools enable efficient content moderation at scale, all managed through intuitive web interfaces.\n\nThe web application's scalability architecture ensures it can handle growth from thousands to millions of users and businesses. Optimized database queries, intelligent caching strategies, and efficient data loading ensure fast page loads and responsive interactions across the web platform, even as the user base and business listings grow exponentially.\n\nMawjood represents a comprehensive web-based solution for local business discovery in Saudi Arabia, combining powerful web technologies with user-centric design to create a platform that serves businesses, customers, and the broader digital economy entirely through web browsers. The platform's continuous evolution, driven by user feedback and technological advancement, positions it as a cornerstone of Saudi Arabia's digital transformation journey, accessible to anyone with internet connectivity and a web browser.",
    technologies: [
      { name: "Next.js", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "shadcn/ui", color: "purple" },
      { name: "React Query", color: "red" },
      { name: "Zustand", color: "orange" },
      { name: "Formik", color: "purple" },
      { name: "Yup", color: "purple" },
      { name: "TipTap", color: "blue" },
      { name: "Mapbox GL", color: "green" },
      { name: "next-i18next", color: "green" },
      { name: "Recharts", color: "purple" },
      { name: "react-phone-number-input", color: "blue" },
      { name: "PayTabs", color: "green" },
      { name: "Apple Sign In", color: "blue" },
      { name: "Google Sign In", color: "blue" },
      { name: "Facebook Sign In", color: "blue" },
      { name: "CR Verification", color: "green" }
    ],
    category: ["web", "fullstack"],
    duration: "Nov 2025 - Jan 2026",
    images: [
      { url: "/image/mawjood (3).png", alt: "Mawjood interface" },
      { url: "/image/mawjood (18).png", alt: "Mawjood dashboard" },
      { url: "/image/mawjood (7).png", alt: "Mawjood homepage" },
      { url: "/image/mawjood (23).png", alt: "Mawjood search" },
      { url: "/image/mawjood (11).png", alt: "Mawjood listing" },
      { url: "/image/mawjood (19).png", alt: "Mawjood details" },
      { url: "/image/mawjood (5).png", alt: "Mawjood profile" },
      { url: "/image/mawjood (13).png", alt: "Mawjood map view" },
      { url: "/image/mawjood (1).png", alt: "Mawjood features" },
      { url: "/image/mawjood (15).png", alt: "Mawjood authentication" },
      { url: "/image/mawjood (9).png", alt: "Mawjood categories" },
      { url: "/image/mawjood (24).png", alt: "Mawjood mobile view" },
      { url: "/image/mawjood (4).png", alt: "Mawjood business page" },
      { url: "/image/mawjood (16).png", alt: "Mawjood reviews" },
      { url: "/image/mawjood (2).png", alt: "Mawjood navigation" },
      { url: "/image/mawjood (20).png", alt: "Mawjood settings" },
      { url: "/image/mawjood (8).png", alt: "Mawjood filters" },
      { url: "/image/mawjood (14).png", alt: "Mawjood payment" },
      { url: "/image/mawjood (6).png", alt: "Mawjood analytics" },
      { url: "/image/mawjood (21).png", alt: "Mawjood notifications" },
      { url: "/image/mawjood (10).png", alt: "Mawjood messaging" },
      { url: "/image/mawjood (17).png", alt: "Mawjood booking" },
      { url: "/image/mawjood (12).png", alt: "Mawjood verification" },
      { url: "/image/mawjood (22).png", alt: "Mawjood responsive" }
    ],
    demoLink: "https://mawjoodfrontend.vercel.app",
    githubLink: "https://github.com/usaidinfo/mawjood_frontend"
  },
  {
    id: "wakanda-books",
    img: "/image/wakandabooks (11).png",
    title: "Business Management Suite",
    desc: "Business management app enabling sales tracking, inventory, customer relations, and invoice management.",
    longDesc: "WakandaBooks is a powerful and intuitive mobile business management application designed specifically for small to medium enterprises seeking to streamline their operations and boost productivity. Built with React Native, this comprehensive solution provides businesses with all the essential tools needed to manage their daily operations efficiently.\n\nThe application excels in sales management, offering complete sales cycle tracking from initial customer contact to final payment collection. Users can create professional invoices, manage both immediate and credit sales, track payment statuses, and generate detailed sales analytics. The robust customer management system allows businesses to maintain comprehensive customer profiles, manage billing and shipping addresses, set credit limits, and track payment histories.\n\nInventory management is another cornerstone feature, supporting multi-warehouse operations with real-time stock tracking, product categorization, and automated reorder alerts. The system handles complex inventory scenarios including alternative units of measurement, batch tracking, and warehouse transfers.\n\nWhat sets WakandaBooks apart is its user-centric design and offline-first approach. The application works seamlessly even with limited internet connectivity, ensuring business operations never stop. The intuitive interface reduces learning curves, making it accessible for users with varying technical expertise.\n\nThe invoice generation system supports multiple templates and customization options, allowing businesses to maintain their brand identity. Real-time synchronization ensures data consistency across multiple devices and users. Advanced reporting and analytics provide valuable insights into business performance, helping owners make informed decisions.\n\nWith multi-language support, phone-based authentication, and cloud backup, WakandaBooks represents a complete digital transformation solution for traditional businesses looking to modernize their operations while maintaining simplicity and reliability.",
    technologies: [
      { name: "React Native CLI", color: "blue" },
      { name: "React Navigation", color: "blue" },
      { name: "Formik", color: "purple" },
      { name: "Yup Validation", color: "purple" },
      { name: "AsyncStorage", color: "green" },
      { name: "i18next", color: "green" },
      { name: "React Native Image Picker", color: "orange" },
      { name: "Date-fns", color: "orange" },
      { name: "React Native Safe Area Context", color: "purple" },
      { name: "React Native Responsive Screen", color: "purple" },
      { name: "React Native Confirmation Code Field", color: "orange" },
      { name: "React Native Localize", color: "green" },
      { name: "Custom Hooks", color: "blue" },
      { name: "RESTful APIs", color: "green" }
    ],
    category: ["mobile"],
    duration: "Mar 2025 - Jul 2025",
    images: [
      { url: "/image/wakandabooks.png", alt: "business management dashboard" },
      { url: "/image/wakandabooks (15).png", alt: "business management app" },
      { url: "/image/wakandabooks (3).png", alt: "invoice generation" },
      { url: "/image/wakandabooks (11).png", alt: "customer management" },
      { url: "/image/wakandabooks (7).png", alt: "sales tracking" },
      { url: "/image/wakandabooks (19).png", alt: "product inventory" },
      { url: "/image/wakandabooks (2).png", alt: "authentication screen" },
      { url: "/image/wakandabooks (14).png", alt: "dashboard overview" },
      { url: "/image/wakandabooks (8).png", alt: "payment tracking" },
      { url: "/image/wakandabooks (21).png", alt: "business setup" },
      { url: "/image/wakandabooks (5).png", alt: "invoice preview" },
      { url: "/image/wakandabooks (17).png", alt: "customer details" },
      { url: "/image/wakandabooks (1).png", alt: "onboarding screen" },
      { url: "/image/wakandabooks (12).png", alt: "product management" },
      { url: "/image/wakandabooks (9).png", alt: "sales analytics" },
      { url: "/image/wakandabooks (4).png", alt: "company profile" },
      { url: "/image/wakandabooks (18).png", alt: "warehouse management" },
      { url: "/image/wakandabooks (6).png", alt: "credit sales" },
      { url: "/image/wakandabooks (13).png", alt: "navigation menu" },
      { url: "/image/wakandabooks (20).png", alt: "settings screen" },
      { url: "/image/wakandabooks (10).png", alt: "multi-language support" },
      { url: "/image/wakandabooks (16).png", alt: "offline functionality" }
    ],
    demoLink: "https://drive.google.com/file/d/12qmVXrkR_w4npthkbuaLmtc84JA3VZq_/view?usp=sharing"
  },
  {
    id: "hiretalentt",
    img: "/image/hiretalentt (5).png",
    title: "HireTalentt - Freelance Marketplace",
    desc: "A modern freelancing platform connecting businesses with skilled professionals, enabling seamless hiring and project collaboration.",
    longDesc: "HireTalentt is a comprehensive freelancing platform designed to connect businesses, startups, and entrepreneurs with top-tier freelance professionals from across the globe. Built with Next.js and a scalable architecture, the platform emphasizes speed, user experience, and reliability while maintaining a modern and intuitive design.\n\nThe platform provides a dual experience—businesses can post projects, browse through a diverse pool of talent, and seamlessly manage their hiring process, while freelancers can create professional profiles, showcase their skills, and apply for projects that match their expertise. With advanced search and filtering, businesses can quickly find the right talent based on skillset, experience, and budget.\n\nHireTalentt prioritizes trust and transparency. Verified profiles, detailed freelancer portfolios, and client reviews ensure that both sides have confidence in their collaborations. The platform supports secure communication, milestone-based payments, and efficient project tracking, reducing the friction commonly experienced in freelance hiring.\n\nOne of the standout features is its streamlined onboarding and Google Sign-In integration, allowing users to quickly set up accounts and start engaging without unnecessary friction. State management with Zustand ensures smooth user flows, while Formik and Yup provide robust validation and form handling for critical sections such as project postings, applications, and account management.\n\nFrom a business perspective, HireTalentt empowers companies to scale quickly by providing access to a global talent pool, while freelancers benefit from fair opportunities, project diversity, and visibility. Tailwind and PrimeReact power the responsive design, ensuring the platform works seamlessly across devices—whether on desktop or mobile.\n\nIn essence, HireTalentt is not just another freelancing platform—it’s a modern, reliable, and scalable solution built for the future of work. By combining technology, usability, and trust, it creates an ecosystem where businesses can grow and freelancers can thrive.",
    technologies: [
      { name: "Next.js", color: "blue" },
      { name: "React", color: "blue" },
      { name: "Tailwind CSS", color: "green" },
      { name: "PrimeReact", color: "orange" },
      { name: "Zustand", color: "purple" },
      { name: "RESTful APIs", color: "green" },
      { name: "Google Sign-In", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Formik", color: "purple" },
      { name: "Yup Validation", color: "purple" }
    ],
    category: ["web"],
    duration: "Aug 2023 - Feb 2024",
    images: [
      { url: "/image/hiretalentt (1).png", alt: "talent marketplace" },
      { url: "/image/hiretalentt (6).png", alt: "project posting interface" },
      { url: "/image/hiretalentt (5).png", alt: "freelancer profile" },
      { url: "/image/hiretalentt (2).png", alt: "client dashboard" },
      { url: "/image/hiretalentt (3).png", alt: "homepage" },
      { url: "/image/hiretalentt (8).png", alt: "project listing" },
      { url: "/image/hiretalentt (4).png", alt: "login and authentication" },
      { url: "/image/hiretalentt (7).png", alt: "search and filter" }
    ],
    demoLink: "https://www.hiretalentt.com/"
  },
  {
    id: "ecency-mobile",
    img: "/image/ecency (14).png",
    title: "Ecency Mobile",
    desc: "A decentralized social blogging platform built on Hive, enabling users to create content and engage with communities through Web3 technology.",
    longDesc: "Ecency Mobile is a revolutionary decentralized social blogging application that transforms the way users create, share, and monetize content through blockchain technology. Built on the Hive blockchain with React Native, this comprehensive platform empowers creators to publish content freely while earning real cryptocurrency rewards for their contributions and community engagement.\n\nThe application features a complete social blogging ecosystem where users can write articles, share stories, and publish media content with rich formatting capabilities. Unlike traditional social platforms, Ecency operates on true decentralization principles - users own their accounts, posts, and data without any central authority controlling their content. The platform implements a sophisticated reward system where content creators earn cryptocurrency for publishing quality content, while curators receive rewards for upvoting and discovering valuable posts.\n\nCommunity engagement is at the core of Ecency's design, offering users the ability to discover and join topic-specific communities, connect with like-minded creators, and participate in meaningful discussions. The platform supports comprehensive content interaction through likes, comments, shares, and post boosting features that enhance visibility and engagement within the ecosystem.\n\nSecurity and privacy are paramount in Ecency Mobile. The application features a built-in secure wallet with private keys stored locally on user devices, ensuring no server access to funds or sensitive information. Additional PIN protection and biometric authentication provide multiple layers of security for user accounts and transactions.\n\nThe user experience is enhanced through customizable profiles, content bookmarking, real-time notifications, and seamless navigation between different sections of the app. The platform supports both light and dark themes, providing comfortable viewing experiences across different lighting conditions and user preferences.\n\nInternationalization support makes Ecency accessible to a global audience with multiple language options, ensuring users worldwide can participate in the decentralized content ecosystem. The application leverages modern mobile development practices with React Native, Redux for state management, and integration with various blockchain APIs.\n\nEcency Mobile represents the future of social media - a platform where creators are fairly compensated, communities are truly owned by their members, and content censorship becomes impossible through blockchain immutability. Whether you're a blogger, content creator, or community builder, Ecency provides the tools and infrastructure needed to thrive in the Web3 content economy.",
    technologies: [
      { name: "React Native", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Redux Toolkit", color: "purple" },
      { name: "React Navigation", color: "blue" },
      { name: "Hive Blockchain", color: "green" },
      { name: "Firebase", color: "orange" },
      { name: "Expo", color: "purple" },
      { name: "React Native Reanimated", color: "purple" },
      { name: "React Intl", color: "green" },
      { name: "AsyncStorage", color: "green" },
      { name: "React Query", color: "purple" },
      { name: "React Native Gesture Handler", color: "blue" },
      { name: "Lottie Animations", color: "orange" },
      { name: "React Native Vector Icons", color: "green" },
      { name: "React Native SVG", color: "blue" },
      { name: "Crypto JS", color: "orange" },
      { name: "React Native Webview", color: "purple" },
      { name: "React Native Camera", color: "green" }
    ],
    category: ["mobile"],
    duration: "Mar 2025 - Aug 2025",
    images: [
      { url: "/image/ecency (12).png", alt: "Search and discovery" },
      { url: "/image/ecency (7).png", alt: "Home feed with posts" },
      { url: "/image/ecency (3).png", alt: "User profile and wallet" },
      { url: "/image/ecency (11).png", alt: "Content creation interface" },
      { url: "/image/ecency (16).png", alt: "Dark mode interface" },
      { url: "/image/ecency (2).png", alt: "Post interaction and comments" },
      { url: "/image/ecency (17).png", alt: "Search and discovery" },
      { url: "/image/ecency (9).png", alt: "Wallet and earnings" },
      { url: "/image/ecency (13).png", alt: "Settings and preferences" },
      { url: "/image/ecency (8).png", alt: "Notification center" },
      { url: "/image/ecency (5).png", alt: "Community discovery" },
      { url: "/image/ecency (1).png", alt: "Onboarding screens" },
      { url: "/image/ecency (15).png", alt: "Community features" },
      { url: "/image/ecency (4).png", alt: "Search and discovery" },
      { url: "/image/ecency (6).png", alt: "Search and discovery" },
      { url: "/image/ecency (10).png", alt: "Search and discovery" },
      { url: "/image/ecency (14).png", alt: "Search and discovery" },
    ],
    demoLink: "https://play.google.com/store/apps/details?id=app.esteem.mobile.android&pcampaignid=web_share",
    githubLink: "https://github.com/Musaid1234/ecency-mobile"
  },
  {
    id: "mawjood-mobile",
    img: "/image/mawjoodapp (6).png",
    title: "Mawjood App",
    desc: "Mawjood mobile app brings Saudi Arabia's leading business directory to iOS and Android, enabling users to connect with local businesses on-the-go.",
    longDesc: "The Mawjood mobile application delivers Saudi Arabia's premier business discovery platform directly to users' smartphones, providing a native mobile experience for iOS and Android devices. Built with React Native, the app offers seamless access to thousands of verified businesses across restaurants, hotels, salons, real estate, travel, healthcare, education, and B2B services throughout the Kingdom.\n\nThe app features an intuitive bottom tab navigation system with five main sections: Home, Categories, Favourites, Explore (Blogs), and Account. The Home screen provides a comprehensive dashboard showcasing featured businesses, trending categories, popular searches, tourist places, and curated blog content. Users can quickly search for businesses using location-aware search functionality that leverages device GPS capabilities for automatic location detection and proximity-based recommendations.\n\nThe mobile app leverages native device capabilities to enhance user experience. Built-in geolocation services automatically detect users' current city or region, enabling instant access to nearby businesses without manual location entry. The app integrates with device GPS to provide accurate location-based search results, making it effortless for users to find services in their immediate vicinity while on the move.\n\nPush notifications powered by Firebase Cloud Messaging keep users informed about important updates including new reviews on their businesses, enquiry submissions, subscription renewals, payment confirmations, and platform announcements. These native notifications ensure users stay engaged with the platform even when the app is closed, providing real-time updates directly to their device.\n\nSocial authentication simplifies the login process with native integration for Google Sign-In and Apple Sign-In. Users can securely authenticate using their existing Google or Apple accounts, eliminating the need to remember passwords while maintaining enterprise-grade security. The app also supports traditional email and phone-based authentication with OTP verification, ensuring accessibility for all users regardless of their preferred authentication method.\n\nBusiness discovery features are optimized for mobile interaction. Users can browse businesses by category with visually appealing category cards, filter results by location, rating, and other criteria, and view detailed business profiles with comprehensive information including descriptions, contact details, working hours, service catalogs, image galleries, and verified credentials. The app displays interactive maps using native map components, allowing users to visualize business locations and get directions directly within the app.\n\nThe review and rating system enables users to share authentic feedback about their experiences directly from their mobile devices. Users can submit 1-5 star ratings with detailed comments, view all reviews for businesses, and see automatically calculated average ratings. Business owners receive instant push notifications when new reviews are posted, enabling them to respond promptly and maintain their online reputation.\n\nFavorites functionality allows users to save businesses they're interested in for quick access later. The Favourites tab provides easy access to saved businesses, enabling users to build personalized collections and revisit preferred services with a single tap. This feature syncs across devices when users log in, ensuring favorites are always accessible.\n\nThe Explore section showcases curated blog content covering local businesses, services, industry insights, and tourism information. Users can browse articles, read full blog posts with rich text formatting, and discover new businesses through editorial content. The blog reader supports HTML content rendering, ensuring articles display beautifully on mobile screens.\n\nBusiness owners can manage their listings entirely through the mobile app. The Dashboard screen provides comprehensive business management tools including listing overview, service management, review tracking, enquiry management, subscription status, transaction history, and analytics. Business owners can add new listings, edit existing ones, upload images using the device camera or photo library, manage services with pricing, and track performance metrics all from their mobile devices.\n\nService management enables business owners to create, edit, and delete services directly from the app. Each service can include name, description, price, currency, duration, images, and YouTube video links. The intuitive interface allows business owners to maintain their service catalogs on-the-go, ensuring their listings always reflect current offerings.\n\nEnquiry management provides businesses with tools to track and respond to customer inquiries. Business owners can view all enquiries, filter by status (open, in-progress, closed, rejected), update enquiry statuses, and track conversion metrics. Push notifications alert business owners immediately when new enquiries are submitted, enabling rapid response times that improve customer satisfaction.\n\nSubscription management allows businesses to view available subscription plans, compare features, and purchase subscriptions directly through the mobile app. The subscription interface displays plan details including pricing, billing intervals, benefits, and features. Business owners can monitor their current subscription status, renewal dates, and payment history, all accessible from their mobile devices.\n\nPayment processing integrates secure payment gateways accessible through the mobile app, enabling businesses to purchase subscriptions and manage premium features. The app tracks payment statuses and provides transaction history, allowing business owners to monitor their financial interactions with the platform from anywhere.\n\nTransaction history provides comprehensive records of all payments, subscriptions, and financial interactions. Business owners can filter transactions by date, status, and type, view detailed transaction information, and track their financial activity over time, all through an intuitive mobile interface.\n\nProfile management enables users to maintain their account information directly from the app. Users can update personal information, change profile pictures using device camera or photo library, manage verification status, and configure notification preferences. The profile section displays account statistics and provides access to account settings.\n\nNotification management allows users to view all platform notifications in a dedicated screen. Users can see notifications for reviews, enquiries, subscriptions, payments, and administrative updates. The notification system supports filtering and marking notifications as read, helping users stay organized and informed.\n\nAdmin functionality provides platform administrators with comprehensive management tools accessible through mobile devices. Admin users can manage user accounts, approve or reject business listings, moderate reviews, create and manage subscription plans, configure categories and locations, handle advertisements, manage blogs and tourist places, view transactions, and access platform-wide analytics, all through the mobile app interface.\n\nThe app's offline capabilities ensure users can access previously loaded content even without internet connectivity. React Query's caching system stores business data, categories, and other frequently accessed information locally, enabling users to browse cached content when network connectivity is limited. This offline-first approach is particularly valuable in areas with intermittent internet access.\n\nImage handling leverages native device capabilities for seamless photo management. Business owners can capture photos directly using the device camera or select images from the photo library. The app handles image compression and upload, ensuring optimal performance while maintaining image quality. Image galleries display beautifully with native scrolling and zoom capabilities.\n\nMaps integration provides interactive location visualization using native map components. Users can view business locations on maps, get turn-by-turn directions using their preferred navigation app, and discover nearby businesses. The map interface supports standard map interactions including zoom, pan, and marker selection, providing an intuitive location exploration experience.\n\nSearch functionality is optimized for mobile with autocomplete suggestions, recent searches, and popular searches. The search interface adapts to user input, providing instant suggestions as users type. Location-aware search results prioritize nearby businesses, making it easy for users to find services in their current area.\n\nCategory browsing provides visual category exploration with category cards displaying icons and names. Users can tap categories to view all businesses in that category, filter by location, and discover new services. The category interface supports hierarchical category structures, enabling users to explore subcategories and find specific business types.\n\nBusiness detail screens provide comprehensive information in an easy-to-navigate tabbed interface. Users can view Overview, Services, Reviews, Location, and Working Hours through intuitive tabs. The interface supports smooth scrolling, image galleries with native zoom, and quick action buttons for calling, messaging, or getting directions.\n\nForm handling throughout the app uses React Hook Form for efficient form management and validation. Business creation and editing forms provide intuitive input fields, validation feedback, and error handling. The forms support various input types including text, numbers, dates, images, and location selection, all optimized for mobile interaction.\n\nState management combines Zustand for global state and React Query for server state, ensuring optimal performance and data synchronization. The app maintains user authentication state, location preferences, and cached data across app sessions, providing a seamless user experience with fast load times and responsive interactions.\n\nUI components built with React Native Paper provide Material Design consistency across the app. The component library includes buttons, cards, dialogs, text inputs, and navigation elements that follow platform design guidelines while maintaining brand consistency. NativeWind integration enables Tailwind CSS styling, providing utility-first styling capabilities that enhance development efficiency.\n\nAnimations and transitions powered by React Native Reanimated provide smooth, performant animations throughout the app. Screen transitions, list animations, and interactive elements feel native and responsive, enhancing the overall user experience. The animation system supports complex gestures and interactions while maintaining 60fps performance.\n\nBottom sheets and modals provide contextual information and actions without disrupting the main navigation flow. The app uses bottom sheet components for filters, forms, and detailed views, enabling users to access additional information while maintaining context of their current screen.\n\nCharts and analytics visualization help business owners understand their performance metrics. The app includes chart components for displaying view trends, business statistics, and analytics data. These visualizations help business owners make data-driven decisions about their listings and marketing strategies.\n\nMulti-language support ensures the app is accessible to both Arabic and English speakers. The internationalization system supports language switching, RTL layout for Arabic content, and culturally appropriate formatting. Users can switch languages at any time, with the interface adapting immediately to their preference.\n\nThe app's architecture emphasizes performance and user experience. TypeScript ensures type safety throughout the codebase, reducing bugs and improving maintainability. The modular component structure promotes code reusability, while service layers separate business logic from UI components. This architecture enables rapid feature development and ensures the app remains performant as it scales.\n\nError handling and loading states provide clear feedback to users throughout their interactions. Skeleton loaders display while content loads, error messages guide users when issues occur, and success confirmations acknowledge completed actions. This attention to user feedback ensures users always understand the app's state and can take appropriate actions.\n\nThe Mawjood mobile app represents a comprehensive mobile solution for business discovery in Saudi Arabia, combining native mobile capabilities with powerful backend services to deliver an exceptional user experience. The app enables users to discover businesses, manage their accounts, and interact with the platform seamlessly from their mobile devices, supporting Saudi Arabia's digital transformation goals by making business discovery accessible anytime, anywhere.",
    technologies: [
      { name: "React Native", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Nativewind", color: "cyan" },
      { name: "react-native-screens", color: "purple" },
      { name: "React Query", color: "red" },
      { name: "Zustand", color: "orange" },
      { name: "react-hook-form", color: "purple" },
      { name: "react-native-date-picker", color: "purple" },
      { name: "Axios", color: "blue" },
      { name: "react-native-gifted-charts", color: "green" },
      { name: "react-native-maps", color: "purple" },
      { name: "react-native-paper", color: "blue" },
      { name: "PayTabs", color: "green" },
      { name: "Apple Sign In", color: "blue" },
      { name: "Google Sign In", color: "blue" },
      { name: "Facebook Sign In", color: "blue" },
      { name: "react-native-raw-bottom-sheet", color: "green" }
    ],
    category: ["mobile"],
    duration: "Dec 2025 - Feb 2026",
    images: [
      { url: "/image/mawjoodapp (19).png", alt: "Mawjood interface" },
      { url: "/image/mawjoodapp (18).png", alt: "Mawjood dashboard" },
      { url: "/image/mawjoodapp (7).png", alt: "Mawjood homepage" },
      { url: "/image/mawjoodapp (11).png", alt: "Mawjood listing" },
      { url: "/image/mawjoodapp (2).png", alt: "Mawjood details" },
      { url: "/image/mawjoodapp (5).png", alt: "Mawjood profile" },
      { url: "/image/mawjoodapp (13).png", alt: "Mawjood map view" },
      { url: "/image/mawjoodapp (1).png", alt: "Mawjood features" },
      { url: "/image/mawjoodapp (15).png", alt: "Mawjood authentication" },
      { url: "/image/mawjoodapp (9).png", alt: "Mawjood categories" },
      { url: "/image/mawjoodapp (4).png", alt: "Mawjood business page" },
      { url: "/image/mawjoodapp (16).png", alt: "Mawjood reviews" },
      { url: "/image/mawjoodapp (2).png", alt: "Mawjood navigation" },
      { url: "/image/mawjoodapp (20).png", alt: "Mawjood settings" },
      { url: "/image/mawjoodapp (8).png", alt: "Mawjood filters" },
      { url: "/image/mawjoodapp (14).png", alt: "Mawjood payment" },
      { url: "/image/mawjoodapp (6).png", alt: "Mawjood analytics" },
      { url: "/image/mawjoodapp (10).png", alt: "Mawjood messaging" },
      { url: "/image/mawjoodapp (17).png", alt: "Mawjood booking" },
      { url: "/image/mawjoodapp (12).png", alt: "Mawjood verification" },
    ],
    // demoLink: "https://mawjoodfrontend.vercel.app",
    githubLink: "https://github.com/Musaid1234/mawjood_app"
  },
  {
    id: "wakandasign-app",
    img: "/image/wks (22).png",
    title: "WakandaSign - Document Signing",
    desc: "WakandaSign is a secure electronic signature platform for Africa, enabling businesses to digitally sign and manage documents with legal compliance.",
    longDesc: "WakandaSign revolutionizes the way Africa handles document signing by providing a secure, efficient, and legally compliant electronic signature platform. Built with modern web technologies and designed specifically for the African market, this comprehensive solution addresses the unique challenges of digital document management across diverse regulatory environments and varying levels of digital infrastructure.\n\nThe platform offers a complete document lifecycle management system starting with secure document upload supporting multiple file formats including PDF, Word documents, and images. Users can drag and drop files directly into the platform, which automatically generates preview thumbnails and prepares documents for the signing process. The intelligent document processing engine analyzes uploaded files to suggest optimal field placement locations for signatures, initials, dates, and text fields.\n\nAt the core of WakandaSign is the sophisticated envelope creation system that allows users to define complex signing workflows with multiple recipients and customizable signing orders. Document owners can assign specific roles to each recipient including Owner, Admin, and Signer, with granular permission controls determining what actions each user can perform. The platform supports both sequential and parallel signing workflows, enabling organizations to implement their existing approval processes digitally.\n\nThe signature placement interface provides an intuitive drag-and-drop experience where users can precisely position signature fields, initial boxes, date stamps, and text input areas anywhere on the document. Each field can be customized with specific requirements such as mandatory completion, field validation rules, and conditional visibility based on previous inputs. The system ensures pixel-perfect accuracy in field positioning across different devices and screen sizes.\n\nWakandaSign's signer experience is optimized for accessibility and ease of use across all devices. Recipients receive secure magic links that provide access to their documents without requiring account creation. The guided field navigation system walks signers through each required field in logical order, with clear visual indicators of progress and remaining actions. The mobile-responsive design ensures seamless signing experiences on smartphones and tablets, crucial for Africa's mobile-first digital landscape.\n\nThe platform offers multiple signature capture methods to accommodate different user preferences and technical capabilities. Users can create drawn signatures using touch or mouse input through the integrated signature pad, type their signatures using customizable fonts, or upload existing signature images. Each signature method maintains the same level of legal validity and security, with cryptographic hashing ensuring signature integrity throughout the document lifecycle.\n\nReal-time status tracking provides comprehensive visibility into document progress with detailed status updates including Draft, Sent, Viewed, Partially Signed, Completed, Declined, and Expired. Document owners receive instant notifications when recipients view, sign, or decline documents, enabling proactive follow-up and deadline management. The dashboard provides at-a-glance overviews of all active documents with filtering and search capabilities for efficient document management.\n\nSecurity stands as a fundamental pillar of WakandaSign's architecture. The platform implements end-to-end encryption for all document transfers and storage, ensuring that sensitive information remains protected throughout the signing process. Role-based access control (RBAC) mechanisms enforce strict permissions at every level, from page access to individual envelope viewing rights. All user inputs undergo rigorous validation using Zod schemas on both client and server sides, preventing injection attacks and data corruption.\n\nThe comprehensive audit trail system captures every interaction with each document, creating an immutable record of all signing activities. Detailed logs include timestamps, IP addresses, user agent information, and geolocation data where available. This forensic-level documentation ensures full compliance with international eSignature laws and provides legally admissible evidence in case of disputes. Upon completion, the system automatically generates a Certificate of Completion PDF that summarizes all signing events and participants.\n\nWakandaSign's team collaboration features enable organizations to work together efficiently on document signing workflows. The platform supports team invitations with role-based permissions, allowing organizations to maintain proper segregation of duties while enabling smooth collaboration. Administrators can configure company-wide settings including branding customization, notification preferences, and default signing workflows.\n\nThe branding customization system allows organizations to maintain their visual identity throughout the signing experience. Companies can upload logos, customize color schemes, and personalize email templates to create a cohesive brand experience for their clients and partners. This white-labeling capability is particularly valuable for businesses that want to integrate electronic signatures seamlessly into their existing customer experience.\n\nAdvanced notification systems keep all stakeholders informed throughout the signing process. Customizable email templates provide clear, professional communications in multiple languages, supporting WakandaSign's commitment to serving Africa's diverse linguistic landscape. Users can configure notification preferences to receive updates via email, SMS, or in-app notifications based on their preferences and connectivity options.\n\nThe platform's internationalization support extends beyond language translation to include cultural and regulatory considerations specific to different African markets. The system adapts to local date formats, currency displays, and legal requirements while maintaining consistent functionality across all supported regions. This localization approach ensures that users feel comfortable and confident using the platform regardless of their location or language preference.\n\nWakandaSign's analytics and reporting capabilities provide valuable insights into document signing patterns and organizational efficiency. Detailed dashboards show signing completion rates, average processing times, and bottleneck identification to help organizations optimize their workflows. These insights enable data-driven decision making for process improvement and resource allocation.\n\nThe platform's scalable architecture built on Next.js with TypeScript ensures robust performance and maintainability as user bases grow. The use of modern web technologies including Tailwind CSS and shadcn/ui components provides a responsive, accessible interface that performs consistently across different browsers and devices. Server-side rendering capabilities ensure fast initial page loads even on slower internet connections common in many African markets.\n\nEnvironmental considerations are built into WakandaSign's design philosophy, as digital document signing significantly reduces paper consumption and transportation-related carbon emissions. Organizations using the platform can track their environmental impact reduction, supporting corporate sustainability goals while improving operational efficiency.\n\nIntegration capabilities allow WakandaSign to connect with existing business systems through robust APIs and webhooks. Organizations can integrate electronic signature workflows into their CRM systems, document management platforms, and approval workflows, creating seamless end-to-end digital processes. This integration flexibility ensures that WakandaSign can adapt to existing organizational structures rather than requiring disruptive process changes.",
    technologies: [
      { name: "Next.js", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "shadcn/ui", color: "purple" },
      { name: "Zustand", color: "orange" },
      { name: "React Query", color: "red" },
      { name: "React Hook Form", color: "pink" },
      { name: "Zod", color: "blue" },
      { name: "next-i18next", color: "green" },
      { name: "next-auth", color: "purple" },
      { name: "Jest", color: "red" },
      { name: "React Testing Library", color: "red" },
      { name: "Playwright", color: "green" },
      { name: "MSW", color: "orange" },
      { name: "ESLint", color: "purple" },
      { name: "Prettier", color: "pink" },
      { name: "Husky", color: "yellow" },
      { name: "lucide-react", color: "blue" },
      { name: "pdf-lib", color: "red" },
      { name: "pdfjs-dist", color: "red" },
      { name: "signature_pad", color: "green" },
      { name: "Framer Motion", color: "purple" },
      { name: "JWT", color: "orange" }
    ],
    category: ["web"],
    duration: "Mar 2025 - Aug 2025",
    images: [
      { url: "/image/wks (4).png", alt: "Dashboard Overview" },
      { url: "/image/wks (3).png", alt: "Document Upload Interface" },
      { url: "/image/wks (8).png", alt: "Signature Placement Tool" },
      { url: "/image/wks (12).png", alt: "Envelope Creation Workflow" },
      { url: "/image/wks (15).png", alt: "Marketing Landing Page" },
      { url: "/image/wks (19).png", alt: "Mobile Signing Experience" },
      { url: "/image/wks (5).png", alt: "User Authentication" },
      { url: "/image/wks (23).png", alt: "Document Status Tracking" },
      { url: "/image/wks (1).png", alt: "Hero Section" },
      { url: "/image/wks (10).png", alt: "Signature Capture Methods" },
      { url: "/image/wks (9).png", alt: "Team Management Interface" },
      { url: "/image/wks (16).png", alt: "User Role Management" },
      { url: "/image/wks (25).png", alt: "Audit Trail Report" },
      { url: "/image/wks (7).png", alt: "Company Branding Settings" },
      { url: "/image/wks (18).png", alt: "Email Notification Templates" },
      { url: "/image/wks (2).png", alt: "Document Preview" },
      { url: "/image/wks (20).png", alt: "Analytics Dashboard" },
      { url: "/image/wks (11).png", alt: "Settings Configuration" },
      { url: "/image/wks (6).png", alt: "Multi-language Support" },
      { url: "/image/wks (24).png", alt: "Certificate of Completion" },
      { url: "/image/wks (13).png", alt: "Responsive Design" },
      { url: "/image/wks (14).png", alt: "Security Features" },
      { url: "/image/wks (17).png", alt: "Integration Capabilities" },
      { url: "/image/wks (22).png", alt: "Document Workflow" },
      { url: "/image/wks (21).png", alt: "Compliance Reports" }
    ]
  },
  {
    id: "leaf-ai-platform",
    img: "/image/leaf-ai-dashboard.png",
    title: "Sensor Management Platform",
    desc: "A comprehensive IoT platform for managing and monitoring environmental sensors with real-time data visualization and AI-powered insights.",
    longDesc: "Leading the frontend development of a sophisticated IoT sensor management platform that revolutionizes environmental monitoring and data analysis. This comprehensive system integrates cutting-edge technology to provide real-time insights into environmental conditions through an intuitive and responsive user interface. The platform serves as a centralized hub for managing multiple types of environmental sensors, including soil moisture sensors, temperature monitors, humidity detectors, and air quality measurement devices. Users can seamlessly configure sensor networks across different locations, from greenhouses and indoor gardens to hydroponic setups and outdoor agricultural environments. Key features include a dynamic dashboard that displays real-time sensor readings with interactive charts and graphs powered by Recharts, enabling users to visualize environmental trends and patterns over time. The system supports multiple soil types (organic soil, rock wool, coconut substrates) with specialized sensor configurations for each medium, ensuring accurate readings regardless of the growing environment. The mobile-first design ensures accessibility across all devices, featuring QR code scanning for easy sensor setup, intuitive navigation, and optimized performance for field use. The platform implements robust state management using Zustand for seamless data flow and real-time updates. Advanced data visualization capabilities allow users to analyze historical trends, compare multiple sensor readings simultaneously, and identify optimal growing conditions. The system features customizable date ranges, interactive tooltips, and responsive charts that adapt to different screen sizes. Built with enterprise-grade architecture using Next.js and TypeScript, the platform ensures type safety, scalability, and maintainability. Material UI components provide a consistent and professional user experience, while the modular design allows for easy feature expansion and customization. The authentication system includes secure user management, password recovery, and session handling, ensuring data security and user privacy. Multi-location support enables users to manage sensor networks across different facilities, with location-specific plant management and sensor association capabilities. \n \n  Please use :- \n Username : Usaid \n Password : secret123",
    technologies: [
      { name: "Next.js", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Material UI", color: "purple" },
      { name: "Zustand", color: "purple" },
      { name: "Recharts", color: "purple" },
    ],
    category: ["web"],
    duration: "Dec 2024 - Present",
    images: [
      { url: "/image/leaf-ai-dashboard.png", alt: "LeafAI Dashboard" },
      { url: "/image/leafai-signup.png", alt: "Sign Up page" },
      { url: "/image/leafai-mobile!.png", alt: "mobile dashboard" },
      { url: "/image/leafai-mobile3.png", alt: "Sign up Mobile" },
      { url: "/image/leafai-mobile2.png", alt: "Setup page" },
      { url: "/image/leafai-mobile4.png", alt: "Setup page" },
      { url: "/image/leafai-mobile5.png", alt: "Sensor selection page" },
      { url: "/image/leafai-mobile6.png", alt: "Plant selection page" },
      { url: "/image/leafai-mobile7.png", alt: "Setup page" },
    ],
    demoLink: "https://leaf-ai-frontend-usaidinfos-projects.vercel.app/login",
    githubLink: "https://github.com/usaidinfo/nextjs-deploy"
  },
  {
    id: "time-monitoring",
    img: "/image/productiviti.webp",
    title: "Time Monitoring Application",
    desc: "Productiviti is a workforce productivity and employee monitoring platform offering real-time activity logging and analytics.",
    longDesc: "Productiviti is a comprehensive solution designed to enhance workforce productivity through advanced monitoring and analytics. It provides real-time tracking of employee activities, delivering data-driven insights to optimize team performance. Key features include automated attendance tracking, enterprise asset management, and customizable monitoring parameters to meet diverse organizational needs. The platform offers both user-specific and business-wide analytics, allowing for a unified view of productivity metrics. With options for custom branding and flexible deployment, Productiviti caters to businesses seeking to improve efficiency and maintain compliance in today's dynamic work environments. ",
    technologies: [
      { name: "React.js", color: "blue" },
      { name: "Prime React", color: "purple" },
      { name: "Typescript", color: "purple" },
      { name: "Chart.js", color: "purple" },
      { name: "formik", color: "purple" },
      { name: "Primeflex", color: "purple" },
    ],
    category: ["web", 'fullstack'],
    duration: "Feb 2024 - Sept 2024",
    images: [
      { url: "/image/productiviti.webp", alt: "Dashboard" },
      { url: "/image/productiviti1.webp", alt: "Screenshots" },
      { url: "/image/productiviti2.webp", alt: "table" },
      { url: "/image/productiviti3.webp", alt: "Permissions" },
      { url: "/image/productiviti4.webp", alt: "App Usage" },
      { url: "/image/productiviti5.jpg", alt: "Table" },
      { url: "/image/productiviti6.jpg", alt: "Table" },
    ],
  },
  {
    id: "time-monitoring-mobile",
    img: "/image/productivitimobile.jpg",
    title: "Time Monitoring Mobile",
    desc: "Productiviti's mobile app provides real-time employee activity analytics for productivity optimization.",
    longDesc: "The Productiviti mobile application offers on-the-go access to comprehensive workforce productivity analytics. Users can monitor active versus idle time, track absenteeism, and review activity reports across various intervals—hourly, weekly, monthly, quarterly, and yearly. The app also provides insights into active applications used by employees, facilitating informed decisions to enhance team performance. Designed for simplicity and efficiency, the mobile app ensures that managers and team leaders can stay connected to key productivity metrics anytime, anywhere.",
    technologies: [
      { name: "React Native", color: "blue" },
      { name: "Expo", color: "purple" },
      { name: "Native Wind", color: "purple" },
      { name: "Native Base", color: "purple" },
      { name: "Context API", color: "purple" },
      { name: "Jest", color: "purple" },
    ],
    category: ["mobile"],
    duration: "Aug 2024 - Oct 2024",
    images: [
      { url: "/image/productivitimobile.jpg", alt: "mobile" },
      { url: "/image/productivitimobile1.jpg", alt: "mobile" },
      { url: "/image/productivitimobile6.png", alt: "mobile" },
      { url: "/image/productivitimobile2.jpg", alt: "mobile" },
      { url: "/image/productivitimobile4.jpg", alt: "mobile" },
    ]
  },
  {
    id: "productiviti-marketing",
    img: "/image/productiviti-web (7).png",
    title: "Productiviti Marketing Web",
    desc: "The Productiviti marketing website showcases the platform’s features, benefits, and solutions, guiding businesses toward productivity optimization.",
    longDesc: "The Productiviti marketing website serves as an engaging and informative platform designed to highlight the core offerings of the Productiviti solution. It provides a visually appealing and user-friendly interface to communicate the platform's benefits, such as real-time workforce monitoring, analytics, and productivity optimization. \n \n This website aims to attract potential customers by showcasing key features through interactive visuals, testimonials, and case studies. It also simplifies navigation for businesses seeking information about the platform, pricing, and support. With clear calls-to-action and well-structured content, the marketing site effectively bridges the gap between the product and its target audience.",
    technologies: [
      { name: "Next js", color: "blue" },
      { name: "SEO", color: "blue" },
      { name: "Prime React", color: "purple" },
      { name: "Formik", color: "purple" },
      { name: "next-auth", color: "purple" },
      { name: "primeflex", color: "purple" },
      { name: "yup", color: "purple" },
    ],
    category: ["web"],
    duration: "May 2024 - Jul 2024",
    images: [
      { url: "/image/productiviti-web (7).png", alt: "marketing website" },
      { url: "/image/productiviti-web (4).png", alt: "marketing website" },
      { url: "/image/productiviti-web (5).png", alt: "marketing website" },
      { url: "/image/productiviti-web (3).png", alt: "marketing website" },
      { url: "/image/productiviti-web (6).png", alt: "marketing website" },
      { url: "/image/productiviti-web (2).png", alt: "marketing website" },

    ],
    demoLink: 'https://www.productiviti.io'
  },
  {
    id: "happening-app",
    img: "/image/happening.png",
    title: "Happening - Events Booking",
    desc: "Happening is a comprehensive React Native application that allows users to discover, bookmark, and purchase tickets for local and global events.",
    longDesc: "Happening provides a seamless mobile experience for event enthusiasts to find and book tickets for concerts, conferences, workshops, and social gatherings. The app features an intuitive interface with personalized event recommendations based on user preferences and past activity.\n\nUsers can explore events through multiple discovery pathways including location-based searching, category filtering, and trending events. Each event listing includes detailed information such as venue details, ticket pricing tiers, event schedules, performer/speaker information, and interactive maps.\n\nThe app implements a secure payment gateway for ticket purchases, digital ticket storage with QR code generation, and event reminders with calendar integration. Social features enable users to share events with friends, see which events friends are attending, and coordinate group bookings.\n\nHappening also includes an organizer portal allowing event creators to manage listings, track ticket sales, communicate with attendees, and analyze event performance metrics through comprehensive analytics dashboards.",
    technologies: [
      { name: "React Native", color: "blue" },
      { name: "Expo", color: "purple" },
      { name: "Redux", color: "purple" },
      { name: "Firebase", color: "orange" },
      { name: "Stripe API", color: "green" },
      { name: "Google Maps API", color: "red" },
      { name: "Formik", color: "purple" },
      { name: "Yup", color: "purple" },
      { name: "React Navigation", color: "blue" },
      { name: "AsyncStorage", color: "purple" },
    ],
    category: ["mobile"],
    duration: "May 2024 - Jul 2024",
    images: [
      { url: "/image/happening.png", alt: "Login page" },
      { url: "/image/happening1.png", alt: "Event Details" },
      { url: "/image/happening2.png", alt: "Home screen" },
      { url: "/image/happening3.png", alt: "Event Details 2" },
      { url: "/image/happening4.png", alt: "Seats Details" },
      { url: "/image/happening5.png", alt: "Booking Confirmation" },
      { url: "/image/happening6.png", alt: "My bookings" },
      { url: "/image/happening7.png", alt: "Search" },
      { url: "/image/happening8.png", alt: "My wishlist" },
      { url: "/image/happening9.png", alt: "Account details" },
      { url: "/image/happening10.png", alt: "Landing page - light mode" },
      { url: "/image/happening12.png", alt: "Landing page - dark mode" },
      { url: "/image/happening13.png", alt: "Recommended for you" },
      { url: "/image/happening14.png", alt: "My bookings - dark mode" },
      { url: "/image/happening15.png", alt: "Event Details - dark mode" },
      { url: "/image/happening16.png", alt: "Booking confirmation - dark mode" },
    ],
    demoLink: "https://expo.dev/accounts/musaid1234/projects/plurit-happening-app/builds/a5f14aa4-ad01-4276-8076-c163f259c4ac",
    githubLink: "https://github.com/usaidinfo/happening-app"
  },

];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showMore, setShowMore] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project =>
      project.category.some(cat =>
        cat.toLowerCase() === activeCategory.toLowerCase()
      )
    );

  const displayedProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  useEffect(() => {
    setShowMore(false);
  }, [activeCategory]);
  return (
    <section className="py-28 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 text-4xl font-bold tracking-tight"
          {...({} as React.ComponentProps<typeof Typography>)}

        >
          Featured Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12 text-lg"
          {...({} as React.ComponentProps<typeof Typography>)}

        >
          Showcasing my journey through various technologies and solutions.
          Each project represents a unique challenge and innovative solution.
        </Typography>

        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {["All", "Web", "Mobile", "Fullstack", "AI"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all
                border ${activeCategory === category
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedProjects.map((project, idx) => (
          <div key={idx} className="group relative h-full">
            <Link href={`/${project.id}`} className="block h-full">
              <div className="h-full transform transition-all duration-300 hover:-translate-y-2">
                <ProjectCard {...project} />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {showMore ? 'Show Less' : `Show More (${filteredProjects.length - 6} more)`}
          </button>
        </div>
      )}
    </section>
  );
}
