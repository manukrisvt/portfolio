import React from 'react';
import { motion } from 'framer-motion';
import { speaking } from '../data';
import { Mic, Users, Monitor, GraduationCap, ExternalLink } from 'lucide-react';

const roleIconMap = {
    'Panelist': Users,
    'Presenter': Monitor,
    'Tutorial Instructor': GraduationCap,
    'Liaison': Mic,
};

const Speaking = () => {
    return (
        <section id="speaking" className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Speaking & Community
                    </motion.h2>

                    <div className="space-y-6">
                        {speaking.map((item, index) => {
                            const RoleIcon = roleIconMap[item.role] || Mic;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-secondary/50 p-8 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {item.image && (
                                            <div className="md:w-64 shrink-0">
                                                <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
                                                <RoleIcon size={14} /> {item.role}
                                            </p>
                                            <h3 className="text-xl font-bold text-text mb-1">{item.title}</h3>
                                            <p className="text-text-muted text-sm mb-4">{item.venue}</p>
                                            {item.takeaway && (
                                                <p className="text-text-muted text-sm leading-relaxed mb-4 italic">
                                                    {item.takeaway}
                                                </p>
                                            )}
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                                                >
                                                    {item.linkLabel} <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speaking;
