import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Zap, ArrowUpRight } from 'lucide-react';

const HUMS = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 bg-accent"></span>
                        HUMS & Industry 4.0
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-bold text-text mb-4 flex items-center gap-2">
                                <Activity className="text-accent" /> What is HUMS?
                            </h3>
                            <p className="text-text-muted leading-relaxed mb-6">
                                Health Usage and Monitoring Systems (HUMS) are the nervous system of modern aircraft.
                                By continuously analyzing vibration, strain, and operational data, we can detect incipient failures
                                before they occur.
                            </p>
                            <p className="text-text-muted leading-relaxed">
                                In the context of **eVTOLs**, where safety and reliability are paramount for urban air mobility,
                                HUMS shifts maintenance from "scheduled" to "predictive"—maximizing fleet availability while ensuring absolute safety.
                            </p>
                        </div>

                        <div className="bg-secondary/50 p-8 rounded-lg border border-white/5">
                            <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                                <Cpu className="text-accent" /> The AI Transformation
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-text-muted">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                    <span>**Industry 4.0**: Integrating IoT sensors with Digital Twins.</span>
                                </li>
                                <li className="flex items-start gap-3 text-text-muted">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                    <span>**Edge AI**: Processing high-frequency vibration data on-board.</span>
                                </li>
                                <li className="flex items-start gap-3 text-text-muted">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                    <span>**Generative AI**: Automating maintenance logs and expert diagnostics.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Industry Examples */}
                    <div className="mb-16">
                        <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                            <Zap className="text-accent" /> HUMS in the Field
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <a
                                href="https://www.geaerospace.com/systems/avionics/connected-aircraft/rotorcraft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary/30 p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <h4 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                    GE Aerospace - Rotorcraft HUMS
                                </h4>
                                <p className="text-text-muted text-sm">
                                    Advanced vibration monitoring and predictive maintenance for rotorcraft fleets, enabling condition-based maintenance and reducing unscheduled downtime.
                                </p>
                            </a>
                            <a
                                href="https://aircraft.airbus.com/en/services/enhance/skywise-data-platform/skywise-core-x"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary/30 p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <h4 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                    Airbus Skywise Core X
                                </h4>
                                <p className="text-text-muted text-sm">
                                    Cloud-based aviation data platform leveraging AI and big data analytics to optimize aircraft performance and maintenance across global fleets.
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* Featured Link */}
                    <motion.a
                        href="https://www.jobyaviation.com/news/joby-taps-nvidia-to-accelerate-next-era-autonomous-flight/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="block bg-gradient-to-r from-secondary to-primary border border-accent/30 p-8 rounded-xl hover:border-accent transition-all group"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-accent mb-2 font-bold text-sm tracking-widest uppercase">
                                    <Zap size={16} /> Featured Insight
                                </div>
                                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                    Joby Taps NVIDIA to Accelerate Next Era of Autonomous Flight
                                </h3>
                                <p className="text-text-muted">
                                    Discover how we are leveraging advanced computing to redefine aviation safety and autonomy.
                                </p>
                            </div>
                            <ArrowUpRight className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                        </div>
                    </motion.a>

                </motion.div>
            </div>
        </section>
    );
};

export default HUMS;
