const bio = "";
const photo = "/core/default.svg";
const getUniqueId = () => Date.now().toString(36) + Math.random().toString(36);

export const coreTeam = [
  {
    _id: getUniqueId(),
    name: "Utkarsh Bisht",
    role: "Student Chairman",
    bio: bio,
    photo: "/core/utkarsh.jpeg",
    socials: {
      github: "https://github.com/utkarsh0503",
    },
  },
  {
    _id: getUniqueId(),
    name: "Yuvraj Sharma",
    role: "Student Vice Chairman",
    bio: bio,
    photo: "/core/yuvi.jpeg",
    socials: {
      github: "https://github.com/Reconzific",
      linkedin: "https://www.linkedin.com/in/yuvraj-sharma-389b90275",
    },
  },
  {
    _id: getUniqueId(),
    name: "Mudit Tyagi",
    role: "Student Vice Chairman",
    bio: bio,
    photo: "/core/mudit.jpeg",
    socials: {
      github: "https://github.com/venomlive",
      linkedin: "https://www.linkedin.com/in/mudit-tyagi11/",
      twitter: "https://x.com/Mudit_Tyagi11",
    },
  },
  {
    _id: getUniqueId(),
    name: "Anshu Kumari",
    role: "General Secretary",
    bio: "Handles the tech workshops and coding sprints.",
    photo: "/core/anshu.jpg",
    socials: {
      github: "https://github.com/anshu-codes",
      linkedin: "https://www.linkedin.com/in/anshu-kumari-70655b278",
    },
  },
  {
    _id: getUniqueId(),
    name: "Suhana Chahat Ali",
    role: "Secretary",
    bio: bio,
    photo: "/core/suhana.jpeg",
    socials: {
      github: "https://github.com/suhanachahatali",
      linkedin: "https://www.linkedin.com/in/suhana-chahat-ali-013041320",
    },
  },
  {
    _id: getUniqueId(),
    name: "Raghav Sharma",
    role: "Innovation Director",
    bio: bio,
    photo,
    socials: {
      github: "https://github.com/RaghavSharma-3",
    },
  },
  {
    _id: getUniqueId(),
    name: "Rishab Madhwal",
    role: "Tech Head",
    bio: "Backend-first Dev, AI Agentic Enthusiast",
    photo: "/core/andro.png",
    socials: {
      github: "https://github.com/androkingdom",
      twitter: "https://x.com/RishabhMadh",
    },
  },
];
