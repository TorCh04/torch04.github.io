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
    github: 'https://github.com/TorCh04/Group4F29SO-Project',
  },
  {
    title: 'Image Processing Program',
    description:
      'C program on Raspberry Pi for RGB bitmap image processing, implementing HSHEX and monochrome conversions. Automated C source code generation for processed image data, improving code reusability and modularity.',
    tags: ['C', 'Raspberry Pi', 'Embedded Systems'],
  },
  {
    title: 'Cici: Minecraft VLM Assistant',
    description:
      "Coursework project built with a team for F21CA: a locally-run Minecraft teaching assistant powered by a Vision Language Model that analyses the player's live screen to give contextual advice and pre-emptive hazard warnings, running fully on-device via a quantised model.",
    tags: ['Python', 'Node.js', 'Vision Language Models', 'Ollama', 'Team Project'],
    github: 'https://github.com/CordlessGnu/Cici',
  },
  {
    title: 'Bonein Loot',
    description:
      "2D Unity roguelike dungeon crawler built for Games Programming coursework (F20GP CW2). Designed and implemented the game's bosses, including animations, combat logic, attack patterns, and abilities, and built the original procedural map randomiser, modelled on The Binding of Isaac's generation approach.",
    tags: ['Unity', 'C#', 'Game Development', 'Procedural Generation', 'Private Repo'],
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
