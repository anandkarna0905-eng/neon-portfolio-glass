import { Download, Award, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "5+ years of professional development experience",
  "Led teams of 5-10 developers on enterprise projects",
  "Built applications serving 100K+ active users",
  "Expertise in React, Node.js, TypeScript, and cloud services",
  "Strong background in agile methodologies and CI/CD",
  "Excellent problem-solving and communication skills",
];

const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { name: "Google Cloud Professional", issuer: "Google", year: "2022" },
  { name: "MongoDB Developer", issuer: "MongoDB University", year: "2021" },
];

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2018",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "State University",
    year: "2016",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-cyan text-sm uppercase tracking-[0.3em] mb-4 font-mono">
            My qualifications
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Resume & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="glass-hover rounded-2xl p-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-cyan/10">
                <Briefcase className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-heading text-2xl">Key Highlights</h3>
            </div>
            
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Download Button */}
            <div className="mt-8">
              <Button variant="neon" size="lg" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Certifications */}
            <div className="glass-hover rounded-2xl p-8 animate-slide-up delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-neon-purple/10">
                  <Award className="w-6 h-6 text-neon-purple" />
                </div>
                <h3 className="font-heading text-2xl">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-neon-cyan text-sm font-mono">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-hover rounded-2xl p-8 animate-slide-up delay-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-neon-pink/10">
                  <GraduationCap className="w-6 h-6 text-neon-pink" />
                </div>
                <h3 className="font-heading text-2xl">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-medium">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="text-neon-cyan text-sm font-mono">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
