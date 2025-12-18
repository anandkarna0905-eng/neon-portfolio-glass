import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop, and team features.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-neon-purple/20 to-neon-pink/20",
  },
  {
    title: "AI Content Generator",
    description: "Smart content creation platform powered by GPT-4 with templates and brand voice customization.",
    tech: ["React", "Python", "OpenAI", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-neon-pink/20 to-neon-cyan/20",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours, filtering, and agent dashboards.",
    tech: ["Next.js", "Prisma", "AWS", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for workout tracking, nutrition logging, and progress visualization.",
    tech: ["React Native", "Firebase", "Redux", "Charts"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-neon-purple/20 to-neon-pink/20",
  },
  {
    title: "Social Analytics Dashboard",
    description: "Comprehensive social media analytics with competitor analysis and AI-powered insights.",
    tech: ["Vue.js", "GraphQL", "D3.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-neon-pink/20 to-neon-cyan/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm uppercase tracking-[0.3em] mb-4 font-mono">
            My recent work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-hover rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Gradient Area */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-2xl text-foreground/50 group-hover:text-foreground/80 transition-colors">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full glass hover:bg-neon-cyan/20 transition-colors"
                    title="View Live"
                  >
                    <ExternalLink className="w-5 h-5 text-neon-cyan" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full glass hover:bg-neon-purple/20 transition-colors"
                    title="View Code"
                  >
                    <Github className="w-5 h-5 text-neon-purple" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
