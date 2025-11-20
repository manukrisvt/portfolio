import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../data';
import { Briefcase, GraduationCap, Calendar, MapPin, Wrench, Brain, Activity, Zap, GitBranch, Users, Cpu, FlaskConical, TrendingUp, Database } from 'lucide-react';


const Experience = () => {
    // Map skills to icons
    const getSkillIcon = (skill) => {
        const iconMap = {
            'Predictive Maintenance': Wrench,
            'Gen-AI (LLM + RAG)': Brain,
            'Physics-Based Modeling': FlaskConical,
            'Algorithm Development': GitBranch,
            'Cross-Functional Leadership': Users,
            'Order Analysis': TrendingUp,
            'Real-time Detection': Activity,
            'Data-Driven Modeling': Database,
            'PhD Research': GraduationCap,
            'Vibration Modeling': Activity,
            'Time Series ML': TrendingUp,
            'Academic Publishing': Briefcase,
            'PCA Algorithms': Cpu,
        };

        const IconComponent = iconMap[skill] || Zap;
        return <IconComponent size={14} />;
    };

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Experience & Education
                    </motion.h2>

                    <div className="space-y-12">
                        {/* Work Experience */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-text flex items-center gap-2">
                                <Briefcase className="text-accent" /> Work History
                            </h3>

                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-secondary/50 p-8 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-text">{job.role}</h4>
                                            <p className="text-accent font-medium">{job.company}</p>
                                        </div>
                                        <div className="flex flex-col md:items-end text-sm text-text-muted mt-2 md:mt-0">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                        </div>
                                    </div>

                                    {job.skills && job.skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1.5 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors flex items-center gap-1.5"
                                                >
                                                    {getSkillIcon(skill)}
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <ul className="space-y-2">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="text-text-muted flex items-start gap-2">
                                                <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="space-y-8 pt-8">
                            <h3 className="text-2xl font-bold text-text flex items-center gap-2">
                                <GraduationCap className="text-accent" /> Education
                            </h3>

                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-secondary/50 p-8 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-text">{edu.degree}</h4>
                                            <p className="text-accent font-medium">{edu.institution}</p>
                                            <p className="text-sm text-text-muted mt-1">GPA: {edu.gpa}</p>
                                            {edu.skills && edu.skills.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {edu.skills.map((skill, i) => (
                                                        <span key={i} className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col md:items-end text-sm text-text-muted mt-2 md:mt-0">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {edu.details.map((detail, i) => (
                                            <li key={i} className="text-text-muted flex items-start gap-2">
                                                <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
