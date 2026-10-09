import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, coreCompetencies } from '../data';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 flex items-center gap-4">
                        <span className="w-12 h-1 bg-accent"></span>
                        About Me
                    </h2>

                    <div className="text-lg text-text-muted leading-relaxed mb-12 space-y-6">
                        {Array.isArray(personalInfo.summary) ? (
                            personalInfo.summary.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <p>{personalInfo.summary}</p>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold text-text mb-6">Core Competencies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {coreCompetencies.map((group, index) => (
                            <motion.div
                                key={group.group}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="text-lg font-bold text-text mb-3 flex items-center gap-2">
                                    <CheckCircle className="text-accent shrink-0" size={18} />
                                    {group.group}
                                </h4>
                                <p className="text-text-muted text-sm leading-relaxed pl-6">
                                    {group.items.join(" · ")}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
