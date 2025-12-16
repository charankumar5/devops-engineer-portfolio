import { Project, Experience, SkillCategory, TimeSlot } from './types';
import { Terminal, Shield, Cpu, Activity, Server, Code, Globe, Layers } from 'lucide-react';

export const HERO_DATA = {
  name: "Charan Kumar Reddy Poreddy", // Placeholder name
  role: "Charan Poreddy { DevOps Engineer | Cloud Infrastructure Specialist }",
  tagline: "Architecting autonomous, resilient infrastructure.",
  subtext: "Specialized in GitOps, Kubernetes orchestration, and edge-computing reliability for enterprise ecosystems.",
  location: "Bremen / Remote",
  availability: "Available for projects"
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Cloud & Infrastructure",
    items: ["Azure (AKS, Functions, VNet)", "AWS (EKS, VPC, IAM)", "Terraform", "Ansible"]
  },
  {
    category: "Containerization & Orchestration",
    items: ["Docker", "Kubernetes (k3s, AKS, EKS)", "Helm", "ArgoCD", "Istio"]
  },
  {
    category: "CI/CD & Scripting",
    items: ["Azure DevOps", "GitHub Actions", "Python", "Bash", "Groovy", "C++"]
  },
  {
    category: "Observability & Security",
    items: ["Prometheus", "Grafana", "ELK Stack", "Trivy", "RBAC/IAM", "TLS/SSL"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p1",
    title: "Streamlining Deployment of Robot Control Software Releases Using GitOps Workflow",
    role: "DevOps Engineer",
    period: "06/2025 – 01/2026",
    description: "Designed a pull-based GitOps framework for autonomous robot control software.",
    stack: ["Python", "Docker", "Prometheus", "Grafana", "ELK"],
    problem: "Manual deployment to distributed edge fleets caused version drift and 4+ hour recovery times.",
    architecture: "Implemented a lightweight agent-based pull system. Containers pull signed images from a private registry based on fleet-specific tags. Integrated edge-local Prometheus instances federating critical alerts to a central Grafana dashboard.",
    impact: [
      "Reduced operational overhead by 70% via automated synchronization.",
      "Achieved 40% faster troubleshooting through unified log aggregation.",
      "Ensured 99.9% uptime for fleet control software."
    ]
  },
  {
    id: "p2",
    title: "PersonalLingua: AI Language Platform",
    role: "Full Stack & DevOps Architect",
    period: "11/2025 – Present",
    description: "A privacy-first, resilient language tutoring system using Gemini 1.5 models.",
    stack: ["React", "Node.js", "Docker", "Google Gemini API", "Redis"],
    problem: "Existing solutions compromised user data privacy and suffered latency during high-traffic speech processing.",
    architecture: "Constructed a defensive backend with strict input sanitization. Used a multi-model failover strategy (Gemini Flash for speed, Pro for complexity). Implemented local-first storage architecture to minimize GDPR exposure.",
    impact: [
      "Zero data leakage architecture by design.",
      "Sub-200ms latency for speech-to-text processing.",
      "Defensive parsing eliminated 100% of tested injection attacks."
    ]
  },
  {
    id: "p3",
    title: "ROS-based Hexapod Digital Twin",
    role: "Robotics Software Engineer",
    period: "03/2023 – 08/2023",
    description: "Developed a bi-directional digital twin for real-time hexapod robot control.",
    stack: ["C++", "Python", "ROS", "Azure IoT Hub", "Node.js"],
    problem: "Simulation data did not match physical robot behavior, creating a testing gap.",
    architecture: "Bridged ROS topics with Azure IoT Hub for secure telemetry streaming. Optimized C++ kinematics solvers for edge execution.",
    impact: [
      "Improved control algorithm performance by 35%.",
      "Enabled remote, secure teleoperation over encrypted websockets.",
      "Reduced hardware testing wear-and-tear by 50% via high-fidelity simulation."
    ]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "e1",
    company: "Yardstick Robotics GmbH (RHEINMETALL AG)",
    role: "DevOps Engineer",
    period: "07/2024 – Present",
    location: "Bremen, Germany",
    description: "Leading the transition to cloud-native infrastructure. Managing Azure AKS clusters and CI/CD pipelines for 2 engineering teams."
  },
  {
    id: "e2",
    company: "Livello GmbH",
    role: "Junior DevOps Engineer (AWS)",
    period: "09/2023 – 06/2024",
    location: "Dusseldorf,, Germany",
    description: "Led a migration of production edge environments from Docker Compose to Kubernetes(k3s), reducing smart-fridge operational failures."
  },
  {
    id: "e3",
    company: "HCL Technologies",
    role: "System & Cloud Engineer",
    period: "10/2019 – 08/2022",
    location: "Bengaluru, India",
    description: "Automated hybrid cloud server and infrastructure management across AWS, GCP, and on-prem environments,reducing manual operations by 30% and improving system reliability."
  }
];

export const BOOKING_SLOTS: TimeSlot[] = [
  { id: 't1', time: '10:00 AM (CET)', available: true },
  { id: 't2', time: '02:00 PM (CET)', available: true },
  { id: 't3', time: '04:30 PM (CET)', available: true },
];