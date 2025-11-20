import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const personalInfo = {
    name: "Manu Krishnan, Ph.D",
    title: "Sr. Data Scientist @ Joby Aviation | Driving HUMS Innovation in eVTOL",
    location: "Charlotte, NC",
    email: "manukrishnantvm@gmail.com",
    phone: "540-449-7532",
    social: [
        { name: "Email", icon: FaEnvelope, link: "mailto:manukrishnantvm@gmail.com" },
        // { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/..." }, // Add if known
        // { name: "GitHub", icon: FaGithub, link: "https://github.com/..." }, // Add if known
    ],
    summary: [
        "Results-driven Sr. Data Scientist and technical leader with 7+ years spanning predictive health monitoring, AI innovation, and academic research. Demonstrated expertise driving enterprise analytics, leading cross-functional teams, and developing production-grade AI/ML solutions to optimize complex system reliability. Adept at translating business needs into technical product strategies and driving organizational outcomes via data-driven innovation, executive collaboration, and agile project management.",
        "My academic foundation is built on a Ph.D. in Aerospace Engineering from Virginia Tech, where I specialized in dynamic data-driven modeling and vibration analysis. Prior to that, I earned my M.Tech in Structural Engineering from IIT Guwahati. This rigorous research background has equipped me with a deep understanding of complex systems and the mathematical rigor required to develop robust AI solutions and drive innovation."
    ]
};

export const coreCompetencies = [
    "Predictive Modeling & Prognostics Algorithms",
    "Enterprise AI Strategy, Predictive Analytics, and ML",
    "Structural Health Monitoring & Diagnostics",
    "Cross-functional Team Leadership & Agile Project Management",
    "AI Agents (Google ADK, LangGraph), LLMs, RAG",
    "Big Data Processing (Spark, Delta Lake, MLOps)",
    "Git Version Control and Software Product Lifecycle",
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
        role: "Sr. Data Scientist (Health Usage and Monitoring)",
        period: "Jan 2022 -- Present",
        skills: [
            "Predictive Maintenance",
            "Gen-AI (LLM + RAG)",
            "Vibration Analysis",
            "Algorithm Research",
            "ML/AI Physical Modeling"
        ],
        achievements: [
            "Spearheaded predictive health and monitoring for aviation systems using ML/AI, deploying 5+ models for structural diagnostics and maintenance optimization.",
            "Led team to build AI agents (LLMs + RAG) for production fleet analysis; reduced expert workload by 40% and improved maintenance responsiveness.",
            "Improved data pipeline runtimes by 60%, integrating Databricks-based solutions for real-time risk detection and model validation.",
            "Developed and validated time-series machine learning models using IMU sensor data for vibration analysis and reliability prediction of advanced aircraft assets.",
            "Drove collaboration with executives/FAA for product certification and business impact; established rigorous adoption and KPI tracking.",
            "Presented paper at VFS Forum 81: 'Bearing Spall Detection and Remaining Useful Life Prediction Using an Operational Binning Approach for eVTOLs'.",
            "Patent Pending for AI-driven health monitoring and predictive maintenance technologies."
        ]
    },
    {
        company: "Joby Aviation",
        location: "Santa Cruz, CA",
        role: "Propeller Integrity Intern",
        period: "May 2021 -- Aug 2021",
        skills: [
            "ML Toolkits",
            "Vibration Monitoring",
            "Feature Engineering"
        ],
        achievements: [
            "Developed real-time machine learning toolkits (Python/Databricks) for structural imbalance and failure detection.",
            "Modeled operational bearing harmonics and designed monitoring protocols deployed across critical fleet assets.",
            "Applied advanced feature engineering with IMU time series data for anomaly detection and vibration monitoring in propeller subsystems."
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
            "Produced 2 high-impact publications and filed a patent based on novel AI-driven vibration diagnostics."
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
    },
    {
        type: "Journal",
        title: "Data-Driven Modeling of Vibrations in Turbofan Engines Under Different Operating Conditions",
        authors: "Krishnan, M., Sever, I.A. and Tarazaga, P.",
        venue: "AIAA Journal (2022)"
    },
    // Add more if needed, keeping it concise for the web view
];
