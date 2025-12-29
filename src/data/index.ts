import {
  FaGlobe,
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiNotion,
  SiTesla,
  SiApple,
  SiWebflow,
  SiFramer,
  SiWordpress,
} from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

export const profileData = {
  name: "Talha T.",
  role: "Product & Web Designer",
  yearsOfExperience: "6+ years of Experience",
  location: "Germany",
  image:
    "https://images.unsplash.com/photo-1740102075553-c8f8d52265ba?q=80&w=3087&auto=format&fit=crop",
  about: [
    "For over half a decade, I've immersed myself in the world of visual aesthetics, consistently striving to enhance every design, pixel by pixel.",
    "My passion lies in creating stunning websites and intuitive software interfaces, dedicating my expertise to perfect these areas.",
  ],
  skills: [
    "UX/UI Design",
    "Animation",
    "Brand Designing",
    "Copywriting",
    "Prototyping",
    "No-Code Development",
  ],
  experience: [
    {
      company: "Google",
      role: "Sr. Product Designer",
      date: "Sep 2021 - Present",
      description:
        "Collaborating with design and engineering team as a Product Designer to work on various design projects. My set of responsibilities range from UX Research, UI Design, Communication, Web Development, to Managing my own design team.",
      icon: FcGoogle,
      bgColor: "bg-white",
    },
    {
      company: "Tesla",
      role: "Associate Product Designer",
      date: "Jan 2019 - Jun 2021",
      description:
        "Contributed to the design of in-car interfaces and mobile app experiences, focusing on user-centric design principles.",
      icon: SiTesla,
      bgColor: "bg-red-50 text-red-600",
    },
    {
      company: "Apple",
      role: "Design Intern",
      date: "Oct 2017 - Dec 2018",
      description:
        "Assisted senior designers in creating mockups and prototypes for various Apple services and internal tools.",
      icon: SiApple,
      bgColor: "bg-black text-white",
    },
  ],
  education: [
    {
      school: "Stanford University (US)",
      degree: "BS in Computer Science",
      date: "Sep 2017 - Nov 2021",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg",
    },
    {
      school: "Academic Magnet High School (US)",
      degree: "High School Diploma",
      date: "Jan 2015 - Jun 2017",
      image: "/amhs.png",
    },
  ],
  recommendations: [
    {
      name: "John Doe",
      role: "Design Manager @ Google",
      text: "Working with Talha is always a blast! His work ethic is top-notch.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop",
    },
    {
      name: "Sarah Smith",
      role: "CTO @ TechStartup",
      text: "Talha is a visionary designer who bridges the gap between art and functionality perfectly. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop",
    },
    {
      name: "Mike Johnson",
      role: "Product Lead @ Apple",
      text: "An absolute pleasure to work with. He delivers high-quality work consistently and always meets deadlines.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "Sr. Product Designer @ Netflix",
      text: "Talha's attention to detail is unmatched. He created a design system that scaled perfectly across our entire platform.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3088&auto=format&fit=crop",
    },
    {
      name: "Chris Wilson",
      role: "Head of Design @ Airbnb",
      text: "One of the most talented designers I've had the privilege of working with. His creativity knows no bounds.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3087&auto=format&fit=crop",
    },
  ],
  tools: {
    Design: [
      {
        name: "Figma",
        icon: null,
        image: "/figma.png",
        color: "text-purple-500",
      },
      {
        name: "Sketch",
        icon: null,
        image: "/sketch.png",
        color: "text-amber-500",
      },
      {
        name: "Photoshop",
        icon: null,
        image: "/photoshop.png",
        color: "text-blue-600",
      },
      {
        name: "Illustrator",
        icon: null,
        image: "/illustrator.png",
        color: "text-orange-600",
      },
    ],
    "No-Code Development": [
      { name: "Webflow", icon: SiWebflow, color: "text-blue-500" },
      { name: "Framer", icon: SiFramer, color: "text-black" },
      { name: "Wordpress", icon: SiWordpress, color: "text-slate-700" },
      {
        name: "Bubble",
        icon: null,
        image: "/bubble.png",
        color: "text-indigo-600",
      },
    ],
    Animation: [
      {
        name: "Jitter",
        icon: null,
        image: "/jitter.png",
        color: "text-purple-600",
      },
      {
        name: "After Effects",
        icon: null,
        image: "/aftereffects.png",
        color: "text-indigo-900",
      },
      { name: "Rive", icon: null, image: "/rive.png", color: "text-black" },
      {
        name: "Unicorn Studio",
        icon: null,
        image: "/unicorn.png",
        color: "text-indigo-500",
      },
    ],
  },
};

export const socialLinks = [
  { icon: FaGlobe, href: "#", name: "Website" },
  { icon: FaBehance, href: "#", name: "Behance" },
  { icon: FaDribbble, href: "#", name: "Dribbble" },
  { icon: FaTwitter, href: "#", name: "Twitter" },
  { icon: FaLinkedin, href: "#", name: "LinkedIn" },
  { icon: SiNotion, href: "#", name: "Notion" },
];
