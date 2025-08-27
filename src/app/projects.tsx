"use client";
import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import Link from "next/link";
import { useState } from "react";

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
    demoLink : "https://leaf-ai-frontend-usaidinfos-projects.vercel.app/login",
    githubLink : "https://github.com/usaidinfo/nextjs-deploy"
  },
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
    duration : "Aug 2024 - Oct 2024",
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
    duration : "May 2024 - Jul 2024",
    images: [
      { url: "/image/productiviti-web (7).png", alt: "marketing website" },
      { url: "/image/productiviti-web (4).png", alt: "marketing website" },
      { url: "/image/productiviti-web (5).png", alt: "marketing website" },
      { url: "/image/productiviti-web (3).png", alt: "marketing website" },
      { url: "/image/productiviti-web (6).png", alt: "marketing website" },
      { url: "/image/productiviti-web (2).png", alt: "marketing website" },

    ],
    demoLink :'https://www.productiviti.io'
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
    duration : "May 2024 - Jul 2024",
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
  demoLink : "https://drive.google.com/file/d/12qmVXrkR_w4npthkbuaLmtc84JA3VZq_/view?usp=sharing"
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
  demoLink :"https://www.hiretalentt.com/"
}
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
  ? PROJECTS 
  : PROJECTS.filter(project => 
      project.category.some(cat => 
        cat.toLowerCase() === activeCategory.toLowerCase()
      )
    );

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
                border ${
                  activeCategory === category 
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
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="group relative h-full">
            <Link href={`/${project.id}`} className="block h-full">
              <div className="h-full transform transition-all duration-300 hover:-translate-y-2">
                <ProjectCard {...project} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
