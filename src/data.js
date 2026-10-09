import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const proofStats = [
    { value: "6 in 6 mo", label: "confirmed faults caught" },
    { value: "Live", label: "in aircraft crew alerting" },
    { value: "Patent", label: "filed, co-inventor" },
    { value: "VFS 2025", label: "published & presented" },
    { value: "PHM 2026", label: "conference panelist" }
];

export const personalInfo = {
    name: "Manu Krishnan, Ph.D.",
    title: "Staff Data Scientist @ Joby Aviation | HUMS, PHM & Production ML for Safety-Critical Aviation",
    location: "Charlotte, NC",
    email: "manukrishnantvm@gmail.com",
    phone: "540-449-7532",
    social: [
        { name: "Email", icon: FaEnvelope, link: "mailto:manukrishnantvm@gmail.com" },
        // { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/..." }, // Add if known
        // { name: "GitHub", icon: FaGithub, link: "https://github.com/..." }, // Add if known
    ],
    summary: [
        "Staff Data Scientist and technical lead for Health and Usage Monitoring (HUMS) at Joby Aviation. I work on prognostics and health management (PHM) for a safety-critical eVTOL program, turning vibration and flight data into predictions that Flight Test, Reliability, and Maintenance use to make real decisions.",
        "I work at the intersection of vibration signal processing, applied ML, and production data systems, taking problems from raw flight telemetry to deployed tools without handoffs. Just as much of the work is adoption: partnering with Flight Test, Reliability, Maintenance, and component SMEs until a model's output becomes something people trust and use.",
        "I'm the technical lead for HUMS at Joby, and I mentor engineers across Data Analytics, Loads, and Reliability.",
        "Ph.D., Virginia Tech · M.Tech, IIT Guwahati (Batch Topper)"
    ]
};

export const coreCompetencies = [
    {
        group: "Deployment & Adoption",
        items: ["Stakeholder alignment", "Requirements scoping", "Roadmapping", "Cross-functional leadership", "Mentorship"]
    },
    {
        group: "Applied ML & AI",
        items: ["Anomaly detection", "Time-series ML", "XGBoost", "Autoencoders", "Bayesian methods", "LLMs", "RAG", "LangGraph"]
    },
    {
        group: "Signal Processing & Health Monitoring",
        items: ["Vibration and order analysis", "HUMS", "Fleet reliability metrics"]
    },
    {
        group: "Production Data Systems",
        items: ["Python", "SQL", "Databricks", "Spark", "Delta Lake", "CI", "Model monitoring"]
    }
];

export const technicalSkills = {
    Programming: ["Python", "Java", "R", "C++", "Matlab"],
    "Big Data/Cloud": ["Databricks", "Spark", "Delta Lake", "SQL", "Git", "MLOps workflows", "CI", "Model monitoring"],
    GenAI: ["LLMs", "RAG", "LangChain", "LangGraph", "Google ADK"],
    "Visualization": ["Streamlit", "Plotly"]
};

export const experience = [
    {
        company: "Joby Aviation",
        location: "Santa Cruz, CA",
        role: "Staff Data Scientist – Predictive Maintenance & Fleet Reliability (HUMS)",
        period: "Jan 2022 -- Present",
        skills: [
            "Production ML",
            "Health Monitoring",
            "Gen-AI (LLM + RAG)",
            "Stakeholder Adoption",
            "Cross-Functional Leadership"
        ],
        achievements: [
            "Deployed fleet-wide bearing-spall detection on vibration and flight telemetry: 6 confirmed degradation events in 6 months; thresholds adopted into the formal reliability program.",
            "Showed single-station vibration monitoring was unreliable; replaced it with RPM-conditioned imbalance thresholds now live in the aircraft Crew Alerting System.",
            "Built LLM classification of maintenance logs and work orders (90% accuracy) with automated reliability metrics; replaced an outsourced effort and became the Reliability team's platform.",
            "Deployed nightly anomaly detection on fleet vibration data with an LLM triage layer that adds maintenance context to reduce alert fatigue.",
            "Built RAG/LLM agents summarizing maintenance and flight data; cut go/no-go assessment time by 40%.",
            "Built and drove adoption of a 4-year predictive maintenance roadmap; presented to the Chief Engineer, Chief Pilot, and executive leadership.",
            "Technical lead for HUMS; mentor engineers across Data Analytics, Loads, and Reliability.",
            "Patent filing (co-inventor; led filing): Steady-State Degradation Detection in Rotating Aerospace Systems."
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
            "Built a Python/Databricks toolbox for near-real-time propeller imbalance and blade-loss detection (~75% early-fault detection); method later reused in the fleet bearing-spall framework."
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
            "Rolls-Royce-sponsored research: data-driven vibration models for aircraft engine health monitoring, separating sensor noise from structural degradation across operating conditions.",
            "5 journal publications; contributed to a patent submission; mentored undergraduate researchers."
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
        degree: "Ph.D. - Aerospace Engineering (Structures)",
        gpa: "3.96",
        period: "Sept 2017 to Dec 2021",
        details: [
            "Graduate Certificate in Data Analytics"
        ]
    },
    {
        institution: "Indian Institute of Technology (IIT) - Guwahati",
        location: "Guwahati, India",
        degree: "M.Tech - Structural Engineering",
        gpa: "4.0 (Batch topper)",
        period: "Sept 2015 to May 2017",
        details: []
    }
];

export const sideProjects = [
    {
        name: "TallyBite",
        tagline: "AI-powered macro tracking app",
        description: "A full-stack food tracking PWA: snap a photo of your meal and AI estimates the macros. Built with React, Capacitor, Node/Express, and Postgres — shipping to the App Store.",
        tech: ["React", "Vite", "Capacitor", "Node.js", "Postgres", "Stripe", "AI Vision"],
        link: "https://macrosnap-production.up.railway.app",
        emoji: "\ud83c\udf5c"
    },
    {
        name: "Home Automation",
        tagline: "Smart home dashboard",
        description: "A self-hosted smart home dashboard unifying device control, automations, and real-time sensor monitoring. In progress: adding predictive monitoring to flag device and appliance degradation before failure, applying the same health-monitoring approach I use on aircraft to the home.",
        tech: ["JavaScript", "IoT", "REST APIs", "Time-Series Monitoring"],
        link: "",
        emoji: "\ud83c\udfe1"
    }
];

export const selectedWork = [
    {
        title: "Bearing fault detection",
        metric: "6 / 6 mo",
        description: "Caught 6 confirmed degradation events in 6 months on a safety-critical component; adopted into Joby's reliability program. Published at VFS 2025."
    },
    {
        title: "Crew alerting",
        metric: "Live in CAS",
        description: "Redesigned propulsion imbalance monitoring; thresholds now live in the aircraft's Crew Alerting System."
    },
    {
        title: "Fleet reliability AI",
        metric: "90%",
        description: "LLM platform classifying maintenance records with 90% accuracy and an FAA-auditable trail; replaced an outsourced effort and became the Reliability team's platform."
    },
    {
        title: "Go/no-go decision support",
        metric: "−40%",
        description: "AI agents summarizing maintenance and flight data, cutting assessment time by 40%."
    },
    {
        title: "Predictive maintenance roadmap",
        metric: "4-yr",
        description: "4-year roadmap presented to the Chief Engineer, Chief Pilot, and executive leadership; HUMS is now on the maintenance roadmap."
    },
    {
        title: "Data pipelines",
        metric: "2–3 h → 0",
        description: "Automated flight data validation replacing 2–3 hours of manual work per flight; built to carry forward to future aircraft programs."
    }
];

export const howIWork = [
    {
        title: "Earning operator trust",
        description: "My bearing monitoring only became useful once flight test and maintenance trusted it enough to act on it. I worked directly with them to turn probabilistic predictions into clear go/no-go guidance, and showed them where the model could be wrong.",
        outcome: ""
    },
    {
        title: "Building the case across teams",
        description: "Over several years, I built relationships across Engineering, Maintenance, and Aftermarket, benchmarked how major operators and OEMs run health monitoring, and made the case for HUMS as a maintenance capability.",
        outcome: "It's now on the maintenance roadmap."
    },
    {
        title: "Turning a vague question into a decision",
        description: "I saw that ride-quality standards could be applied to our flight data, pulled in a vibration SME, a product SME, a flight test engineer, and a pilot, and turned the findings into a briefing requested by the Chief Pilot and Chief Engineer.",
        outcome: ""
    }
];

export const speaking = [
    {
        role: "Panelist",
        title: "Challenges of AI in Prognostics and Health Management",
        venue: "PHM Society Annual Conference 2026, Charlotte, NC",
        takeaway: "Building AI models for PHM is no longer the hard part; proving they work is. Failure data is scarce, synthetic data only helps if it's representative, and until we can prove it, AI should be a partner in maintenance decisions, not the decision-maker.",
        link: "https://lnkd.in/p/gTQgPEAW",
        linkLabel: "Read the post on LinkedIn",
        image: "/images/phm-panel.jpg"
    },
    {
        role: "Presenter",
        title: "Bearing spall detection and remaining-useful-life prediction for eVTOLs",
        venue: "VFS Forum 81 (2025)",
        link: "https://lnkd.in/p/gimkFYbx",
        linkLabel: "Read the post on LinkedIn",
        image: "/images/vfs-presentation.jpg"
    },
    {
        role: "Tutorial Instructor",
        title: "Data-Driven Vibration Modeling",
        venue: "Tutorial Session 3, 15th Annual Conference of the PHM Society (PHM 2023). A 90-minute tutorial for researchers and practitioners.",
        link: "https://lnkd.in/p/gimkFYbx",
        linkLabel: "Read the post on LinkedIn",
        image: "/images/phm-tutorial.jpg"
    },
    {
        role: "Liaison",
        title: "SAE HM-1 Integrated Vehicle Health Management Committee",
        venue: "2022–present"
    }
];

export const honors = [
    "John R. Jones III Graduate Fellowship -- Virginia Tech",
    "Rolls Royce Fellowship -- Virginia Tech / Rolls Royce",
    "Pratt Fellowship, Structural Engineering Batch Topper (IIT-G)"
];

export const memberships = [
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
        venue: "AIAA Journal (2022)",
        link: "#"
    },
    {
        type: "Journal",
        title: "Real time damage detection using recursive principal components and time varying auto-regressive modeling",
        authors: "Krishnan, M, Bhowmik, B., Hazra, B., and Pakrashi, V.",
        venue: "Mechanical Systems and Signal Processing (2018)",
        link: "#"
    },
    {
        type: "Journal",
        title: "Online damage detection using recursive principal component analysis and recursive condition indicators",
        authors: "Krishnan, M, Bhowmik, B., Tiwari, A., and Hazra, B.",
        venue: "Smart Materials and Structures (2017)",
        link: "#"
    }
];
