import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-8"
                    >
                        Let's Connect
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted mb-12"
                    >
                        Interested in discussing HUMS innovation, AI-driven solutions, or data science challenges?
                        I'm always open to connecting with fellow professionals and exploring collaborative opportunities.
                    </motion.p>

                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-primary border border-white/10 rounded-lg hover:border-accent hover:text-accent transition-all group"
                        >
                            <Mail className="group-hover:scale-110 transition-transform" />
                            <span className="text-lg">{personalInfo.email}</span>
                        </motion.a>

                        <motion.a
                            href={`tel:${personalInfo.phone}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center gap-3 px-8 py-4 bg-primary border border-white/10 rounded-lg hover:border-accent hover:text-accent transition-all group"
                        >
                            <Phone className="group-hover:scale-110 transition-transform" />
                            <span className="text-lg">{personalInfo.phone}</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
