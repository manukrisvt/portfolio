import React from 'react';
import { motion } from 'framer-motion';
import { howIWork } from '../data';
import { ShieldCheck, Users, Compass } from 'lucide-react';

const iconMap = {
    'Earning operator trust': ShieldCheck,
    'Building the case across teams': Users,
    'Turning a vague question into a decision': Compass,
};

const HowIWork = () => {
    return (
        <section id="how-i-work" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        How I Work
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {howIWork.map((item, index) => {
                            const Icon = iconMap[item.title] || Users;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-primary/50 p-8 rounded-lg border border-white/5 hover:border-accent/30 transition-colors flex flex-col"
                                >
                                    <Icon className="text-accent mb-4" size={26} />
                                    <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                                    <p className="text-text-muted leading-relaxed text-sm flex-1">
                                        {item.description}{' '}
                                        <span className="font-bold text-text">{item.outcome}</span>
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
