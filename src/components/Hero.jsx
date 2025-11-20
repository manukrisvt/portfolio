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
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-medium tracking-widest mb-4"
                    >
                        HELLO, I AM
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight"
                    >
                        {personalInfo.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-text-muted mb-8"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-text-muted max-w-2xl mb-10 leading-relaxed"
                    >
                        Specializing in Gen-AI, AI-Driven Physical Modeling, and Fleet Predictive Maintenance.
                        Transforming complex data into strategic insights.
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
            </div>
        </section>
    );
};

export default Hero;
