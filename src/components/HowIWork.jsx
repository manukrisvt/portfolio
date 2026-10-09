import React from 'react';
import { motion } from 'framer-motion';
import { howIWork } from '../data';
import { Handshake } from 'lucide-react';

const HowIWork = () => {
    return (
        <section id="how-i-work" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        How I Work
                    </motion.h2>

                    <div className="space-y-6">
                        {howIWork.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-primary/50 p-8 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-3">
                                    <Handshake className="text-accent shrink-0" size={22} />
                                    {item.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
