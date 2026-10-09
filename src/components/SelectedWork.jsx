import React from 'react';
import { motion } from 'framer-motion';
import { selectedWork } from '../data';
import { Briefcase } from 'lucide-react';

const SelectedWork = () => {
    return (
        <section id="work" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Selected Work
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {selectedWork.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-secondary/50 p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-text mb-2 flex items-center gap-2">
                                    <Briefcase className="text-accent shrink-0" size={18} />
                                    {item.title}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
