import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-glass-border relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#home" className="font-heading text-2xl neon-text mb-6">
            DEV<span className="text-foreground">.</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-hover rounded-full group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
              </a>
            ))}
          </div>

          {/* Glow Line */}
          <div className="glow-line w-48 mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center flex items-center gap-2">
            &copy; {currentYear} John Smith. Made with
            <Heart className="w-4 h-4 text-neon-pink fill-neon-pink animate-pulse" />
            All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-neon-cyan transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-neon-cyan transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-neon-cyan transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-neon-cyan transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
