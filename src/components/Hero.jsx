import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    {/* Text column */}
                    <div className="md:col-span-3 order-2 md:order-1">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-accent font-medium tracking-widest mb-4"
                        >
                            HUMS · PHM · PRODUCTION ML
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold text-text mb-4 leading-tight"
                        >
                            Manu Krishnan, Ph.D.
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl font-bold text-text-muted mb-8 leading-snug"
                        >
                            {personalInfo.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-text-muted max-w-2xl mb-10 leading-relaxed"
                        >
                            I build data-driven ML systems grounded in physics that operators trust enough to act on — from raw flight data to decisions in live operations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent-glow transition-colors flex items-center gap-2"
                            >
                                Get in Touch <ArrowRight size={20} />
                            </a>
                            <a
                                href="#experience"
                                className="px-8 py-4 border border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors"
                            >
                                View Experience
                            </a>
                        </motion.div>
                    </div>

                    {/* Headshot column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end"
                    >
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-accent/40 shadow-2xl shadow-accent/20">
                            <img
                                src="/images/headshot.jpg"
                                alt="Manu Krishnan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
