import { Code2, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS / Cloud", icon: Globe },
  { name: "React Native", icon: Smartphone },
  { name: "GraphQL", icon: Database },
  { name: "UI/UX Design", icon: Palette },
];

const experience = [
  {
    year: "2022 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise-scale applications using modern tech stack.",
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description: "Built and maintained multiple client projects, focusing on React and Node.js.",
  },
  {
    year: "2018 - 2020",
    title: "Frontend Developer",
    company: "StartUp Hub",
    description: "Developed responsive web applications and collaborated with design teams.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm uppercase tracking-[0.3em] mb-4 font-mono">
            Get to know me
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="glass-hover rounded-2xl p-8 animate-slide-up">
            <h3 className="font-heading text-2xl mb-6 neon-text">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience 
                building modern web applications. My journey in tech started with a 
                curiosity about how things work, which evolved into a career dedicated 
                to creating innovative digital solutions.
              </p>
              <p>
                I specialize in building scalable, performant applications using 
                cutting-edge technologies. From architecting databases to crafting 
                pixel-perfect UIs, I enjoy every aspect of the development process.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up delay-200">
            <h3 className="font-heading text-2xl mb-6 neon-text">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-hover rounded-xl p-4 flex items-center gap-3 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                    <skill.icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl mb-10 text-center neon-text">Experience</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan transform md:-translate-x-1/2" />
            
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="glass-hover rounded-2xl p-6 ml-8 md:ml-0 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <span className="text-neon-cyan text-sm font-mono">{item.year}</span>
                    <h4 className="font-heading text-xl mt-2">{item.title}</h4>
                    <p className="text-neon-purple font-medium mt-1">{item.company}</p>
                    <p className="text-muted-foreground mt-3">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-neon-cyan rounded-full transform md:-translate-x-1/2 mt-6 animate-pulse-glow" />
                
                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
