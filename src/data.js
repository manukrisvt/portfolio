import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const personalInfo = {
    name: "Manu Krishnan, Ph.D",
    title: "Staff Scientist @ Joby Aviation | HUMS, ML & AI for eVTOL Certification",
    location: "Charlotte, NC",
    email: "manukrishnantvm@gmail.com",
    phone: "540-449-7532",
    social: [
        { name: "Email", icon: FaEnvelope, link: "mailto:manukrishnantvm@gmail.com" },
        // { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/..." }, // Add if known
        // { name: "GitHub", icon: FaGithub, link: "https://github.com/..." }, // Add if known
    ],
    summary: [
        "Staff Scientist at Joby Aviation with 9+ years spanning predictive health monitoring, AI innovation, and academic research. My background combines two areas rarely found in a single engineer: mechanical vibrations & signal processing (PhD) and applied machine learning & AI systems — plus the data infrastructure that connects them, so I can take a problem from raw sensor data through signal processing, ML modeling, and production deployment without handoffs.",
        "At Joby, I own production systems on the certification and safety path: a bearing spall detection framework that caught 6 confirmed events in 6 months on a safety-critical component, a Vibe PSD pipeline used by 5+ teams for qualification testing, an RPM-based propeller imbalance threshold table live in the aircraft's CAS alerting software, and an LLM + RAG fleet reliability platform built to meet FAA auditability requirements. I led the filing of the DA team's first patent and its first external publication (VFS 2025).",
        "My academic foundation is built on a Ph.D. in Aerospace Engineering from Virginia Tech, where I specialized in dynamic data-driven modeling and vibration analysis. Prior to that, I earned my M.Tech in Structural Engineering from IIT Guwahati (batch topper). This rigorous research background has equipped me with a deep understanding of complex systems and the mathematical rigor required to develop robust AI solutions and drive innovation."
    ]
};

export const coreCompetencies = [
    "Predictive Modeling & Prognostics Algorithms",
    "Structural Health Monitoring (HUMS) & Diagnostics",
    "Applied ML/AI for Aerospace (LLMs, RAG, XGBoost, Autoencoders)",
    "Vibration Analysis & Signal Processing",
    "Data Architecture for Certification-Critical Systems (Delta Lake, Databricks)",
    "Cross-functional Team Leadership & Technical Mentorship",
    "FAA Certification & V&V Experience",
    "Time Series AI and IMU Sensor Data Modeling"
];

export const technicalSkills = {
    Programming: ["Python", "Java", "R", "C++", "Matlab"],
    "Big Data/Cloud": ["Databricks", "Spark", "Delta Lake", "Git", "MLOps workflows"],
    GenAI: ["LLMs", "RAG", "LangChain", "LangGraph", "Google ADK"],
    "Data Engineering": ["SQL", "workflow automation"],
    "Visualization/Reporting": ["Power BI", "Tableau", "Excel", "PowerPoint"],
    "Modeling/Test": ["Ansys", "Abaqus", "Nastran", "FEMap", "Labview"]
};

export const experience = [
    {
        company: "Joby Aviation",
        location: "Santa Cruz, CA",
        role: "Staff Scientist (Health Usage and Monitoring)",
        period: "Jan 2022 -- Present",
        skills: [
            "Predictive Maintenance",
            "Gen-AI (LLM + RAG)",
            "Physics-Based Modeling",
            "Algorithm Development",
            "Cross-Functional Leadership"
        ],
        achievements: [
            "Led cross-functional team to develop and validate 5+ algorithms detecting structural degradation in propellers, actuators, and bearings for Joby S4 aircraft.",
            "Improved model runtime by 60% by replacing physics-based simulations with data-driven methods.",
            "Built AI-based HUMS agent using LLMs + RAG for go/no-go decisions, reducing SME workload by 40% and accelerating maintenance actions.",
            "Designed real-time blade loss detection strategy; validated under flight-representative conditions.",
            "Developed diagnostics and prognostics for 7+ safety-critical components, contributing to FAA certification efforts.",
            "Led experimental design and V&V with SMEs, ensuring algorithm reliability for production deployment.",
            "Integrated predictive models into fleet-wide maintenance strategy, improving failure detection lead time by 30%.",
            "Patent Pending for AI-driven health monitoring and predictive maintenance technologies."
        ]
    },
    {
        company: "Joby Aviation",
        location: "Santa Cruz, CA",
        role: "Propeller Integrity Intern",
        period: "May 2021 -- Aug 2021",
        skills: [
            "Order Analysis",
            "Real-time Detection",
            "Data-Driven Modeling"
        ],
        achievements: [
            "Developed a Python toolbox based on order analysis for real-time detection of propeller imbalance and blade loss.",
            "Designed an online time-domain algorithm to detect the onset of propeller damage and imbalance.",
            "Created a data-driven model of bearing harmonics under operational conditions, achieving an accuracy of approximately 75%."
        ]
    },
    {
        company: "Virginia Tech",
        location: "Blacksburg, VA",
        role: "Graduate Research Assistant",
        period: "Sept 2017 -- Dec 2021",
        skills: [
            "PhD Research",
            "Vibration Modeling",
            "Time Series ML",
            "Academic Publishing"
        ],
        achievements: [
            "PhD Dissertation: Dynamic data-driven modeling of vibration in aircraft engine",
            "Led PhD research on dynamic machine learning models for structural vibration and health monitoring, leveraging IMU sensor and time series data for aerospace reliability applications.",
            "Developed and validated multiphysics, time series ML models; mentored undergraduate researchers and partnered with sponsors for technology transfer.",
            "Produced 5 high-impact publications"
        ]
    },
    {
        company: "Indian Institute of Technology (IIT) - Guwahati",
        location: "Guwahati, India",
        role: "Graduate research",
        period: "Jan 2016 to May 2017",
        skills: [
            "PCA Algorithms",
            "Real-time Detection"
        ],
        achievements: [
            "Developed recursive PCA and AR-based real-time detection algorithms; published in leading journals."
        ]
    }
];

export const education = [
    {
        institution: "Virginia Tech",
        location: "Blacksburg, VA",
        degree: "PhD (STEM) - Aerospace Engineering (Structures)",
        gpa: "3.96",
        period: "Sept 2017 to Dec 2021",
        details: [
            "Elastic Stability, Advanced Aero hydrodynamics, Structural Optimization, Vehicle Structures, Dynamical systems and controls.",
            "Graduate certificate in Data analytics - Data analysis - I, Bayesian analysis, Time series analysis, Advanced Machine learning."
        ]
    },
    {
        institution: "Indian Institute of Technology (IIT) - Guwahati",
        location: "Guwahati, India",
        degree: "M. tech - Structural Engineering",
        gpa: "4.0 (Batch topper)",
        period: "Sept 2015 to May 2017",
        details: [
            "Structural analysis, Structural dynamics, Finite element methods, Advanced Structural system Design, Reliability based design."
        ]
    }
];

export const sideProjects = [
    {
        name: "TallyBite",
        tagline: "AI-powered macro tracking app",
        description: "A full-stack food tracking PWA: snap a photo of your meal and AI estimates the macros. Built with React, Vite, Tailwind, Capacitor (iOS/Android), Node/Express, and Postgres on Railway. Features Apple Sign-In with JWT verification, Stripe subscriptions, gamification, and trends analytics. Shipping to the App Store.",
        tech: ["React", "Vite", "Capacitor", "Node.js", "Postgres", "Stripe", "AI Vision"],
        link: "https://macrosnap-production.up.railway.app",
        emoji: "\ud83c\udf5c"
    },
    {
        name: "Home Automation",
        tagline: "Smart home dashboard",
        description: "A self-hosted smart home dashboard that unifies device control, automation routines, and real-time sensor monitoring into a single web interface for the household.",
        tech: ["JavaScript", "IoT", "REST APIs", "Dashboard"],
        link: "",
        emoji: "\ud83c\udfe1"
    }
];

export const honors = [
    "John R. Jones III Graduate Fellowship -- Virginia Tech",
    "Rolls Royce Fellowship -- Virginia Tech / Rolls Royce",
    "Pratt Fellowship, Structural Engineering Batch Topper (IIT-G)"
];

export const memberships = [
    "SAE HM-1 Integrated Vehicle Health Management Liaison",
    "Society of Experimental Mechanics (SEM)",
    "American Institute of Aeronautics and Astronautics (AIAA)"
];

export const publications = [
    {
        type: "Conference",
        title: "Bearing Spall Detection and Remaining Useful Life Prediction Using an Operational Binning Approach for eVTOLs",
        authors: "Krishnan, M. et al.",
        venue: "VFS Forum 81 (2025)",
        link: "https://proceedings.vtol.org/81/integrated-vehicle-health-management/bearing-spall-detection-and-remaining-useful-life-prediction-using-an-operational-binning-approach-for-evtols"
    },
    {
        type: "Journal",
        title: "Data-Driven Modeling of Vibrations in Turbofan Engines Under Different Operating Conditions",
        authors: "Krishnan, M., Sever, I.A. and Tarazaga, P.",
        venue: "AIAA Journal (2022)"
    },
    {
        type: "Journal",
        title: "Real time damage detection using recursive principal components and time varying auto-regressive modeling",
        authors: "Krishnan, M, Bhowmik, B., Hazra, B., and Pakrashi, V.",
        venue: "Mechanical Systems and Signal Processing (2018)"
    },
    {
        type: "Journal",
        title: "Online damage detection using recursive principal component analysis and recursive condition indicators",
        authors: "Krishnan, M, Bhowmik, B., Tiwari, A., and Hazra, B.",
        venue: "Smart Materials and Structures (2017)"
    }
];
