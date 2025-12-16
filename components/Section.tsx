import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-l border-devops-border ml-4 md:ml-12 ${className}`}>
      {(title) && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-devops-text tracking-tight flex items-center gap-3">
            <span className="text-devops-accent">/</span> {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-devops-muted text-lg max-w-2xl border-l-2 border-devops-accent pl-4">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};