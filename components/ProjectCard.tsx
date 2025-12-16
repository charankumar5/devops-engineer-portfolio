import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle2, Layers, Server } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-devops-card border border-devops-border hover:border-devops-accent transition-colors duration-300 rounded-sm overflow-hidden p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-devops-text group-hover:text-devops-accent transition-colors font-mono">
            {project.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-devops-muted font-mono">
            <span>{project.role}</span>
            <span className="text-devops-accent">•</span>
            <span>{project.period}</span>
          </div>
        </div>
        <div className="flex gap-2">
           {/* Tech Stack Pills */}
           <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs bg-devops-dark border border-devops-border px-2 py-1 rounded text-devops-muted">
                {tech}
              </span>
            ))}
             {project.stack.length > 3 && (
                 <span className="text-xs bg-devops-dark border border-devops-border px-2 py-1 rounded text-devops-muted">+{project.stack.length - 3}</span>
             )}
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2 text-devops-accent text-sm font-bold uppercase tracking-wider">
            <Server size={14} /> Problem
          </div>
          <p className="text-devops-text/80 leading-relaxed text-sm">
            {project.problem}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2 text-devops-accent text-sm font-bold uppercase tracking-wider">
            <Layers size={14} /> Architecture
          </div>
          <p className="text-devops-text/80 leading-relaxed text-sm">
            {project.architecture}
          </p>
        </div>
      </div>

      {/* Impact List */}
      <div className="bg-devops-dark/50 p-5 rounded border border-devops-border/50">
        <h4 className="text-sm font-bold text-devops-text mb-3 font-mono">Key Engineering Outcomes:</h4>
        <ul className="space-y-2">
          {project.impact.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-devops-muted">
              <CheckCircle2 size={16} className="text-devops-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};