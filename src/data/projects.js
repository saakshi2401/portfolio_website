import { ShoppingCart, Trophy, Laptop } from 'lucide-react';

export const initialProjects = [
  {
    title: "Quick Commerce Web Application",
    description: "A full-stack MERN platform with real-time search, dynamic filtering, and a streamlined multi-step checkout.",
    longDescription: "Led a cross-functional team to design and ship this full-stack platform. Architected RESTful APIs and optimized MongoDB schemas for users, products, and orders, ensuring clean data separation and efficient query performance. The responsive frontend features advanced state management for a seamless cart and checkout experience.",
    iconName: "ShoppingCart",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/saakshi2401/quick_commerce_website"
  },
  {
    title: "AI Chatbot for Social Media",
    description: "Conversational AI assistant that generates platform-specific captions and post copy using GPT-4o.",
    longDescription: "Engineered an intuitive AI assistant that helps users iteratively refine generated content. Applied advanced prompt-engineering patterns to improve the contextual relevance of social posts. The system reduces manual drafting time significantly by automating tone selection and platform formatting.",
    iconName: "Laptop",
    tags: ["Python", "OpenAI API", "NLP", "Javascript"],
    github: "https://github.com/saakshi2401/socialbot_ai"
  },
  {
    title: "F1 Race Strategy Analyzer",
    description: "Data-driven analyzer using historical telemetry and lap-time data to predict optimal pit-stop strategies.",
    longDescription: "Built an end-to-end telemetry pipeline using FastAPI to process lap-by-lap data across multiple Grand Prix events. Performed trend analysis and tire-degradation modeling to identify optimal pit-window strategies. Delivered interactive Power BI dashboards for real-time strategic insights during race simulations.",
    iconName: "Trophy",
    tags: ["Python", "FastAPI", "Pandas", "Matplotlib", "Power BI"],
    github: "https://github.com/saakshi2401/f1-race-strategy-analyzer"
  }
];
