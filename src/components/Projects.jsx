import React from 'react';
import { motion } from 'framer-motion';
import { sideProjects } from '../data';
import { FolderGit2, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text mb-4 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-accent"></span>
                        Side Projects
                    </motion.h2>
                    <p className="text-text-muted mb-12 max-w-2xl">
                        What I build when I'm not at work — full-stack apps that go from idea to production.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {sideProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary/50 p-8 rounded-lg border border-white/5 hover:border-accent/30 transition-colors flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">{project.emoji}</span>
                                    <FolderGit2 className="text-accent" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-text">{project.name}</h3>
                                <p className="text-accent text-sm font-medium mb-3">{project.tagline}</p>
                                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline mt-auto"
                                    >
                                        View live <ExternalLink size={14} />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
