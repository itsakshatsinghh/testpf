import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
    {
    name: "My Resume",
  link: "ATTACH THE RESUME LINK", 
    download: true,          
  },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I’m happy to share ideas — just promise not to steal my snacks during meetings!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Still learning, always curious, occasionally caffeinated",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Stacking small wins daily",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a AI webapp for curating AI news and resources.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Feel like creating something together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    des: "A Netflix clone with a responsive design, real-time chat, and a user-friendly interface.",
    img: "/c1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 2,
    title: "Flappy Bird Game",
    des: "A Flappy Bird clone with a responsive design, real-time chat, and a user-friendly interface.",
    
    img: "/p2.jpg",
    iconLists: ["/c.svg", "/python.svg","/ts.svg", ],
    link: "",
    sourceCode: "https://github.com/sanidhyy/zoom-clone",
  },
  {
    id: 3,
    title: "UniVerse",
    des: "A REAL Software-as-a-Service app with AI features for helping out university students.",
    img: "/project3.png",
    iconLists: ["/vercel.svg", "/tail.svg", "/ts.svg", "/three.svg",],
    link: "",
    sourceCode: "",
  },
  {
    id: 4,
    title: "MedNest",
    des: "Created a web app for doctors and patients to connect, schedule appointments, and manage health records.",
    img: "/project2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg",],
    link: "",
    sourceCode: "",
  },
] as const;

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/react_logo-transformed.glb",
    scale: [1.5, 1.5, 1.5],  // 1.5x bigger in all dimensions
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Data Structure & Algorithms",
    modelPath: "/dsa.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Github",
    modelPath: "/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
    {
    name: "FastAPI Developer",
    modelPath: "/FPI.glb",
    scale: 2.5,  // 1.5x bigger in all dimensions
    rotation: [0, 0, 0],
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Contributed to the development of a full-stack application using React.js and Node.js, improving user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Python Developer",
    desc: "Developed a Python-based application for data analysis, enhancing data processing efficiency.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead-UpsideDown Coders",
    desc: "Lead a team of developers in creating innovative solutions,for Hackathons.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/CodeNova00",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/quinngiselle08",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sejalmishra08",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Tailwind CSS"],
  stack2: ["Git & Github", "Python", "MongoDB"],
} as const;
