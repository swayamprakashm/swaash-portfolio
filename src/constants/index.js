// src/constants/index.js

export const personalInfo = {
  name: "Swayam Prakash Macharla",
  role: "Jr. MERN Stack Developer Intern",
  tagline: "Building scalable web & mobile solutions",
  location: "Secunderabad, India",
  email: "swaashtechnologies@gmail.com", 
};

export const skills = [
  {
    title: "Frontend Development",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Database",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Mobile & Specialized",
    tech: ["Kotlin", "Android SDK", "Python", "Machine Learning"],
  },
];

export const projects = [
  {
    id: "apporbit",
    title: "AppOrbit",
    subtitle: "Usage Tracker & Controller",
    image: "src/assets/projects/apporbit.png",
    // UPGRADED DESCRIPTION
    description: "A comprehensive mobile application usage tracker engineered with advanced parental controls. Key Challenge: Architected a strict two-phase authorization system and system-level lockdown mechanics to ensure foolproof session management and data security.",
    tech: ["Kotlin", "Android System Integration"],
    githubUrl: "https://github.com/swayamprakashm/AppOrbit.git", 
    liveUrl: "https://apporbitdownload.netlify.app/",
  },
  {
    id: "rescuenow",
    title: "Rescue Now",
    subtitle: "Emergency Alert System",
    image: "src/assets/projects/rescuenow.webp",
    // UPGRADED DESCRIPTION
    description: "A mission-critical emergency alert system designed for rapid response. Impact: Successfully integrated real-time GPS hardware tracking with automated SMS dispatch services, creating a fail-safe communication loop for critical situations.",
    tech: ["React", "Node.js", "Geolocation API"],
    githubUrl: "https://github.com/swayamprakashm/RescueNowApp.git",
    liveUrl: "https://github.com/swayamprakashm/RescueNowApp",
  },
  {
    id: "ecommerce-ui",
    title: "E-Commerce UI Design",
    subtitle: "Shopping Experience Redefined",
    image: "src/assets/projects/ecommerce.png",
    // UPGRADED DESCRIPTION
    description: "A high-conversion e-commerce interface built for fluid navigation and speed. Impact: Designed a fully responsive, state-driven shopping experience utilizing modern React paradigms to minimize user friction from cart to checkout.",
    tech: ["HTML", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/swayamprakashm/ecommerce-ui-Enginow-Internship.git",
    liveUrl: "https://ecommerce-ui-enginow.netlify.app/",
  },
];

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "expertise", title: "Expertise" },
  { id: "about", title: "Founder" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];