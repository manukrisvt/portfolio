import React from 'react';
import { motion } from 'framer-motion';
import { publications } from '../data';
import { BookOpen } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Selected Publications
                    </motion.h2>

                    <div className="grid gap-6">
                        {publications.map((pub, index) => {
                            const CardContent = (
                                <>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                                            <BookOpen size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                                {pub.title}
                                            </h3>
                                            <p className="text-text-muted text-sm mb-1">{pub.authors}</p>
                                            <p className="text-accent text-sm italic">{pub.venue}</p>
                                        </div>
                                        {pub.link && (
                                            <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        )}
                                    </div>
                                </>
                            );

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {pub.link ? (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block bg-secondary/50 p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-colors group cursor-pointer"
                                        >
                                            {CardContent}
                                        </a>
                                    ) : (
                                        <div className="bg-secondary/50 p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-colors group">
                                            {CardContent}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
