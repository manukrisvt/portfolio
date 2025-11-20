import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Technical Skills
                    </motion.h2>

                    <div className="grid gap-8">
                        {Object.entries(technicalSkills).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-bold text-text mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-primary border border-white/10 rounded-full text-text-muted hover:text-accent hover:border-accent transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
