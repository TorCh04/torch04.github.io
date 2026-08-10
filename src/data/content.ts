import type { SkillGroup, Project, WorkExperience, Education } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML / CSS'],
  },
  {
    category: 'Frameworks & Databases',
    items: ['Node.js', 'React.js', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git / GitHub', 'JIRA', 'GNU / Linux'],
  },
  {
    category: 'AI / ML',
    items: ['Computer Vision', 'Deep Learning', 'CNNs'],
  },
];

export const projects: Project[] = [
  {
    title: 'AI Drone Imagery Identification & Categorisation',
    description:
      'AI-driven system for drone imagery analysis performing object detection, classification, and monitoring using computer vision and deep learning. Designed robust preprocessing pipelines and implemented scalable models optimised for accuracy and efficiency.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'CNNs'],
  },
  {
    title: 'Moogle Energy Tracker',
    description:
      'Full-stack web application to track and manage energy usage of simulated IoT smart devices. Features a leaderboard system built with MongoDB and RESTful APIs. Developed in an Agile team with CI/CD practices, contributing to UI/UX and backend integration.',
    tags: ['Node.js', 'React.js', 'MongoDB', 'REST API'],
  },
  {
    title: 'Image Processing Program',
    description:
      'C program on Raspberry Pi for RGB bitmap image processing, implementing HSHEX and monochrome conversions. Automated C source code generation for processed image data, improving code reusability and modularity.',
    tags: ['C', 'Raspberry Pi', 'Embedded Systems'],
  },
  {
    title: 'Slot Machine',
    description:
      'A fun personal project — a fully functional slot machine game implementation exploring game logic, randomisation, and interactive UI design.',
    tags: ['Personal'],
    github: 'https://github.com/TorCh04/Slot-Machine',
  },
  {
    title: 'Cici — Minecraft VLM Assistant',
    description:
      "Locally-run Minecraft teaching assistant powered by a Vision Language Model that analyses the player's live screen to give contextual advice and pre-emptive hazard warnings. Combines a Python voice/TTS pipeline, a Node.js Mineflayer bot, and a custom Fabric mod for state tracking, all running on-device via Ollama with a quantised model.",
    tags: ['Python', 'Node.js', 'Vision Language Models', 'Ollama', 'Minecraft Modding'],
    github: 'https://github.com/CordlessGnu/Cici',
  },
];

export const experiences: WorkExperience[] = [
  {
    role: 'Engineering Intern',
    company: 'NatWest Group',
    location: 'Edinburgh',
    dates: 'Jun 2026 – Aug 2026',
    bullets: [
      'Worked within a professional Agile team, actively participating in stand-ups, sprint planning, and retrospectives to deliver iterative results.',
      'Developed an AI-based documentation quality enhancer, leveraging machine learning techniques to improve accuracy and consistency of internal documentation.',
    ],
    tags: ['Agile', 'Machine Learning', 'Python', 'AI'],
  },
  {
    role: 'Front of House',
    company: 'Heriot-Watt Student Union',
    location: 'Edinburgh',
    dates: 'Sep 2024 – May 2026',
    bullets: [
      'Delivered exceptional customer service, strengthening communication and problem-solving skills through engagement with diverse clients.',
      'Thrived in high-pressure, fast-paced settings, maintaining accuracy and professionalism throughout.',
      'Collaborated closely with team members to streamline operations and handle peak demand.',
    ],
    tags: ['Teamwork', 'Communication', 'Problem Solving'],
  },
];

export const education: Education = {
  degree: 'MEng Software Engineering',
  school: 'Heriot-Watt University',
  location: 'Edinburgh',
  dates: 'Sep 2022 – May 2027',
  bullets: [
    'Predicted Grade: 1st Class',
    "Academic Achievement: Deputy Principle's Award",
    'Extra-Curricular: Member of the Heriot-Watt Volleyball Team',
  ],
};
