import React from 'react';
import { motion } from 'framer-motion';
import { selectedWork } from '../data';
import { Activity, Bell, Database, CheckCircle2, Map, Workflow } from 'lucide-react';

const iconMap = {
    'Bearing fault detection': Activity,
    'Crew alerting': Bell,
    'Fleet reliability AI': Database,
    'Go/no-go decision support': CheckCircle2,
    'Predictive maintenance roadmap': Map,
    'Data pipelines': Workflow,
};

const SelectedWork = () => {
    return (
        <section id="work" className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Selected Work
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedWork.map((item, index) => {
                            const Icon = iconMap[item.title] || Activity;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 3) * 0.05 }}
                                    className="flex flex-col bg-secondary/50 p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="text-3xl font-bold text-accent leading-none">{item.metric}</span>
                                        <Icon className="text-accent/70 shrink-0" size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed flex-1">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
