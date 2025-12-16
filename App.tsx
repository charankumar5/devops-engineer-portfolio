import React, { useState } from 'react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { 
  HERO_DATA, 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  EXPERIENCE_DATA, 
  BOOKING_SLOTS 
} from './constants';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronRight, 
  Calendar,
  MapPin,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-devops-dark font-sans selection:bg-devops-accent selection:text-devops-dark">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-devops-dark/90 backdrop-blur-sm border-b border-devops-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter text-devops-text">
            <span className="text-devops-accent">&lt;</span>
            ops.dev
            <span className="text-devops-accent">/&gt;</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-devops-muted">
            <a href="#about" className="hover:text-devops-accent transition-colors">Philosophy</a>
            <a href="#stack" className="hover:text-devops-accent transition-colors">Stack</a>
            <a href="#projects" className="hover:text-devops-accent transition-colors">Engineering Cases</a>
            <a href="#experience" className="hover:text-devops-accent transition-colors">Experience</a>
            <a href="#contact" className="hover:text-devops-accent transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-devops-text" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-devops-card border-b border-devops-border p-4 flex flex-col gap-4 text-sm font-medium text-devops-muted">
            <a href="#about" onClick={toggleMenu}>Philosophy</a>
            <a href="#stack" onClick={toggleMenu}>Stack</a>
            <a href="#projects" onClick={toggleMenu}>Engineering Cases</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center min-h-[80vh]">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-devops-accent/30 bg-devops-accent/10 text-devops-accent text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {HERO_DATA.availability}
          </div>
          
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-devops-text mb-4">
              {HERO_DATA.role}
            </h1>
            <p className="text-xl md:text-2xl text-devops-muted max-w-2xl font-light">
              {HERO_DATA.tagline}
            </p>
          </div>

          <p className="text-devops-text/60 max-w-lg leading-relaxed border-l-2 border-devops-border pl-4">
            {HERO_DATA.subtext}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 bg-devops-accent text-devops-dark font-bold rounded hover:bg-devops-glow transition-all flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </a>
            <button className="px-6 py-3 border border-devops-border text-devops-text rounded hover:border-devops-accent hover:text-devops-accent transition-all flex items-center gap-2 font-mono group">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
        
        {/* Abstract "System" Visual */}
        <div className="flex-1 flex justify-center opacity-80">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-devops-accent/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute font-mono text-xs text-devops-accent/40 whitespace-pre leading-4 select-none">
            {`
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: system-reliability
    namespace: production
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: stable
    template:
      metadata:
        labels:
          app: stable
      spec:
        containers:
        - name: devops-core
          image: reliability:latest
          resources:
            limits:
              cpu: "1000m"
              memory: "2Gi"
            `}
          </div>
        </div>
      </main>

      {/* Philosophy Section */}
      <Section id="about" title="Engineering Philosophy">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-devops-card p-6 border-t-2 border-devops-accent">
            <h3 className="text-lg font-bold text-devops-text mb-3">Systems Thinking</h3>
            <p className="text-sm text-devops-muted leading-relaxed">
              I don't just fix bugs; I optimize workflows. Viewing infrastructure as a holistic product ensures that upstream changes don't cause downstream failures.
            </p>
          </div>
          <div className="bg-devops-card p-6 border-t-2 border-blue-500">
            <h3 className="text-lg font-bold text-devops-text mb-3">Automated Reliability</h3>
            <p className="text-sm text-devops-muted leading-relaxed">
              If it happens twice, automate it. From infrastructure provisioning (IaC) to rigorous testing pipelines, manual intervention is a failure state.
            </p>
          </div>
          <div className="bg-devops-card p-6 border-t-2 border-purple-500">
            <h3 className="text-lg font-bold text-devops-text mb-3">Radical Observability</h3>
            <p className="text-sm text-devops-muted leading-relaxed">
              Metrics, logs, and traces are not optional. You cannot improve what you cannot measure. I build dashboards that tell the truth.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="stack" title="Technical Stack" subtitle="Core competencies deployed in production environments.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h4 className="font-mono text-sm text-devops-accent border-b border-devops-border pb-2 inline-block">
                {skillGroup.category}
              </h4>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-devops-text/80 text-sm hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-devops-border" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Engineering Case Studies" subtitle="Selected works demonstrating architectural decision making and impact.">
        <div className="space-y-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-devops-border md:hidden"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4">
                <div>
                   <h3 className="text-xl font-bold text-devops-text">{job.role}</h3>
                   <div className="text-devops-accent font-mono text-sm mb-2">{job.company}</div>
                   <div className="flex items-center gap-2 text-xs text-devops-muted mb-4">
                      <MapPin size={12} /> {job.location}
                   </div>
                   <p className="text-devops-text/80 text-sm leading-relaxed max-w-2xl">
                     {job.description}
                   </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-devops-card border border-devops-border rounded text-xs font-mono text-devops-muted">
                    {job.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Education Block */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 pt-8 border-t border-devops-border border-dashed">
            <div>
              <h3 className="text-xl font-bold text-devops-text">M.Sc. Computer Science</h3>
              <div className="text-devops-muted text-sm mt-1">Technical University of Munich (TUM)</div>
              <p className="text-sm text-devops-muted mt-2">Specialization in Distributed Systems & Cloud Computing</p>
            </div>
            <div className="text-right">
               <span className="inline-block px-3 py-1 bg-devops-card border border-devops-border rounded text-xs font-mono text-devops-muted">
                2019 – 2021
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact & Availability" className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Direct Contact Info */}
          <div className="space-y-8">
            <p className="text-devops-text/80 leading-relaxed">
              Currently open to discussing Senior DevOps roles in the DACH region. 
              I am particularly interested in positions focusing on Kubernetes autonomy and platform engineering.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:alex.weber.devops@example.com" className="flex items-center gap-4 text-devops-text hover:text-devops-accent transition-colors p-4 bg-devops-card border border-devops-border rounded">
                <Mail className="text-devops-accent" />
                <span>alex.weber.devops@example.com</span>
              </a>
              <div className="flex items-center gap-4 text-devops-text p-4 bg-devops-card border border-devops-border rounded opacity-70 cursor-not-allowed" title="Phone available upon request">
                <Terminal className="text-devops-accent" />
                <span>+49 151 1234 5678 (Request via email)</span>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 bg-devops-card border border-devops-border rounded text-devops-muted hover:text-white hover:border-devops-accent transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="p-2 bg-devops-card border border-devops-border rounded text-devops-muted hover:text-white hover:border-devops-accent transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Booking Widget (Frontend Only) */}
          <div className="bg-devops-card border border-devops-border p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="text-devops-accent" size={20} />
              <h3 className="font-bold text-devops-text">Schedule an Introduction</h3>
            </div>
            
            <p className="text-xs text-devops-muted mb-4">
              Select a time slot for a 30-min technical screening call.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-6">
              {BOOKING_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`flex justify-between items-center p-3 rounded border text-sm transition-all ${
                    selectedSlot === slot.id 
                    ? 'border-devops-accent bg-devops-accent/10 text-white' 
                    : 'border-devops-border text-devops-muted hover:border-devops-muted'
                  }`}
                >
                  <span>{slot.time}</span>
                  <div className={`w-3 h-3 rounded-full ${selectedSlot === slot.id ? 'bg-devops-accent' : 'bg-devops-border'}`}></div>
                </button>
              ))}
            </div>

            {selectedSlot && (
              <div className="animate-fade-in bg-devops-dark p-4 rounded border border-devops-border/50 text-xs text-devops-muted">
                <p className="mb-2 font-mono text-devops-accent">Slot Selected.</p>
                <p>To confirm this appointment, please click "Request Slot" to open your email client with the pre-filled details.</p>
                <a 
                  href={`mailto:alex.weber.devops@example.com?subject=Interview Request: Slot ${selectedSlot}&body=I would like to book the slot: ${BOOKING_SLOTS.find(s => s.id === selectedSlot)?.time}`}
                  className="mt-4 block w-full text-center bg-devops-text text-devops-dark font-bold py-2 rounded hover:bg-white transition-colors"
                >
                  Request Slot via Email
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-devops-border bg-devops-card py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-devops-muted text-sm">
            &copy; {new Date().getFullYear()} Alex Weber. Built with React & Tailwind.
          </div>
          <div className="text-xs text-devops-muted/60 max-w-sm text-center md:text-right">
            <p className="mb-1">GDPR Compliance Notice:</p>
            <p>This website is hosted statically and does not use non-essential cookies or tracking scripts. No personal data is stored on this server.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}