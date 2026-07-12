%% ============================================================
%%  EDITABLE SUBJECT-LINE VARIABLES — change these freely
%% ============================================================
\newcommand{\CVName}{Nontapat (Tor) Chuenkingkaew}
\newcommand{\CVEmail}{tor4704@gmail.com}
\newcommand{\CVPhone}{+44 7708566435}
\newcommand{\CVPortfolio}{torch04.github.io}
\newcommand{\CVLinkedIn}{LinkedIn Profile}
\newcommand{\CVLinkedInURL}{https://linkedin.com}   % replace with real URL

\newcommand{\SecSkills}{SKILLS \& TECHNICAL TOOLS}
\newcommand{\SecEducation}{EDUCATION}
\newcommand{\SecProjects}{PROJECT EXPERIENCE}
\newcommand{\SecWork}{WORK EXPERIENCE}

\newcommand{\EduDegree}{MEng Software Engineer}
\newcommand{\EduSchool}{Heriot-Watt University}
\newcommand{\EduLocation}{Edinburgh}
\newcommand{\EduDates}{Sep 2022 {\color{black}\textendash} May 2027}
\newcommand{\EduGrade}{Predicted Grade: 1st}
\newcommand{\EduAward}{Deputy Principle's Award}

\newcommand{\ProjOneTitle}{AI Based Identification, Categorisation using Drone Imagery}
\newcommand{\ProjOneTech}{Python}
\newcommand{\ProjTwoTitle}{Moogle Energy Tracker Website}
\newcommand{\ProjTwoTech}{Node.js, React.js, MongoDB}
\newcommand{\ProjThreeTitle}{Image Processing Program}
\newcommand{\ProjThreeTech}{C}

\newcommand{\WorkTwoTitle}{Front of House at Heriot-Watt Student Union}
\newcommand{\WorkTwoDates}{Sep 2024 {\color{black}\textendash} May 2026}
\newcommand{\WorkTwoLocation}{Edinburgh}

\newcommand{\WorkOneTitle}{Engineering Intern at NatWest Group}
\newcommand{\WorkOneDates}{Jun 2026 {\color{black}\textendash} Aug 2026}
\newcommand{\WorkOneLocation}{Edinburgh}

%% ============================================================
%%  DOCUMENT SETUP
%% ============================================================
\documentclass[10pt, a4paper]{article}

\usepackage[
  top=0.55in, bottom=0.55in,
  left=0.6in,  right=0.6in
]{geometry}
\usepackage{parskip}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}
\usepackage{titlesec}
\usepackage{fontenc}
\usepackage{inputenc}
\usepackage{microtype}
\usepackage{array}
\usepackage{tabularx}

\hypersetup{
  colorlinks=true,
  urlcolor=blue,
  linkcolor=blue
}

%% Section heading style — black rule
\titleformat{\section}
  {\bfseries\normalsize\uppercase}
  {}{0em}{}
  [\titlerule]

\titlespacing{\section}{0pt}{8pt}{4pt}

%% List settings
\setlist[itemize]{
  leftmargin=1.2em,
  itemsep=1pt,
  parsep=0pt,
  topsep=2pt
}

\setlength{\parskip}{0pt}
\setlength{\parindent}{0pt}
\pagestyle{empty}

%% ============================================================
%%  DOCUMENT
%% ============================================================
\begin{document}

%% ── HEADER ──────────────────────────────────────────────────
\begin{center}
  {\Large\bfseries \CVName}\\[4pt]
  \small
  \href{mailto:\CVEmail}{\CVEmail}
  ~\textbar~
  \CVPhone
  ~\textbar~
  \href{https://\CVPortfolio}{\CVPortfolio}
  ~\textbar~
  \href{\CVLinkedInURL}{\CVLinkedIn}
\end{center}

\vspace{2pt}

%% ── SKILLS ──────────────────────────────────────────────────
\section{\SecSkills}

\noindent\textbf{Programming Languages:} Python, SQL, Java, C, JavaScript, HTML/CSS, Node.js, React.js, MongoDB

\noindent\textbf{Technologies:} Git, Github, JIRA, GNU/Linux (command line)

\noindent\textbf{AI/ML:} Computer Vision, Deep Learning, CNNs, AI-powered tools

\noindent\textbf{Soft Skills:} Analytical Thinking \& Problem-Solving, Collaboration, Agile Mindset, Attention to Detail, Strong Communication, Time Management, Proactive \& Adaptive Learner, Multitasking

%% ── EDUCATION ───────────────────────────────────────────────
\section{\SecEducation}

\noindent
\textbf{\EduSchool{} - \EduDegree} \hfill \EduDates \\
\textit{\EduLocation}

\begin{itemize}
  \item \EduGrade
  \item Academic Achievements: \EduAward
  \item Extra-Curricular Roles:
    \begin{itemize}
      \item Member of the Heriot-Watt Volleyball Team
        \begin{itemize}
          \item Demonstrated exceptional time management by balancing intensive volleyball
                training and competitions with demanding university coursework, consistently
                meeting academic and athletic commitments.
          \item Collaborated effectively within a diverse team environment, contributing
                to strategic gameplay and fostering a supportive team culture through
                communication, discipline, and shared goals.
        \end{itemize}
    \end{itemize}
\end{itemize}


%% ── WORK EXPERIENCE ─────────────────────────────────────────
\section{\SecWork}
\noindent
\textbf{\WorkOneTitle} \hfill \WorkOneDates \\
\hfill \textit{\WorkOneLocation}

\begin{itemize}
    \item Worked within a professional agile team, actively participating in stand-ups,
        sprint planning, and retrospectives to deliver iterative results.
  \item Developing an AI-based documentation quality enhancer, leveraging machine learning
        techniques to improve accuracy and consistency of internal documentation.
\end{itemize}

\noindent
\textbf{\WorkTwoTitle} \hfill \WorkTwoDates \\
\hfill \textit{\WorkTwoLocation}


\begin{itemize}
  \item Delivered exceptional customer service, strengthening communication and
        problem-solving skills by engaging with diverse clients and resolving queries
        efficiently.
  \item Thrived in high-pressure, fast-paced settings, maintaining accuracy and
        professionalism.
  \item Collaborated closely with team members to streamline operations and handle peak
        demand, showcasing teamwork and a proactive mindset.
\end{itemize}


%% ── PROJECTS ────────────────────────────────────────────────
\section{\SecProjects}

\noindent
\textbf{\ProjOneTitle{} \textbar{} \ProjOneTech}
\begin{itemize}
  \item Developed an AI-driven system for drone imagery analysis, performing object
        detection, classification, and monitoring using computer vision and deep learning.
  \item Designed robust data preprocessing pipelines and implemented scalable models,
        optimising for accuracy and efficiency.
  \item Practised agile development, code reviews, and technical documentation.
\end{itemize}

\vspace{4pt}
\noindent
\textbf{\ProjTwoTitle{} \textbar{} \ProjTwoTech}
\begin{itemize}
  \item Built a full-stack web application to track and manage energy usage of simulated
        IoT smart devices.
  \item Designed and implemented a leaderboard system using MongoDB and RESTful APIs.
  \item Collaborated in an agile team, contributing to UI/UX, backend integration, and
        code reviews, and practising CI/CD principles.
\end{itemize}

\vspace{4pt}
\noindent
\textbf{\ProjThreeTitle{} \textbar{} \ProjThreeTech}
\begin{itemize}
  \item Developed a C program on Raspberry Pi for RGB bitmap image processing,
        implementing HSHEX and monochrome conversions.
  \item Automated C source code generation for processed image data, improving code
        reusability and modularity.
\end{itemize}



\end{document}