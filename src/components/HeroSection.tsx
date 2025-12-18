import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Camera, X } from "lucide-react";

const HeroSection = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-glow delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Edit Option */}
          <div
            className="relative mb-8 group"
            onMouseEnter={() => setShowEditOverlay(true)}
            onMouseLeave={() => setShowEditOverlay(false)}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden glass neon-border animate-scale-in">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20">
                  <span className="font-heading text-4xl md:text-5xl gradient-text">
                    JS
                  </span>
                </div>
              )}
            </div>

            {/* Edit Overlay */}
            <div
              className={`absolute inset-0 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center gap-2 transition-opacity duration-300 ${
                showEditOverlay ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-full bg-neon-cyan/20 hover:bg-neon-cyan/40 transition-colors"
                title="Upload photo"
              >
                <Camera size={20} className="text-neon-cyan" />
              </button>
              {profileImage && (
                <button
                  onClick={handleRemoveImage}
                  className="p-2 rounded-full bg-destructive/20 hover:bg-destructive/40 transition-colors"
                  title="Remove photo"
                >
                  <X size={20} className="text-destructive" />
                </button>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            {/* Glow Ring */}
            <div className="absolute -inset-2 rounded-full border border-neon-cyan/30 animate-pulse-glow" />
          </div>

          {/* Text Content */}
          <div className="animate-slide-up">
            <p className="text-neon-cyan text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-mono">
              Welcome to my portfolio
            </p>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up delay-100">
            <span className="text-foreground">John </span>
            <span className="gradient-text">Smith</span>
          </h1>

          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-up delay-200">
            Full Stack Developer
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 animate-slide-up delay-300 font-body">
            Crafting digital experiences with cutting-edge technology.
            Transforming ideas into elegant, scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
            <Button variant="neon" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ChevronDown className="text-neon-cyan w-8 h-8 animate-glow" />
      </a>
    </section>
  );
};

export default HeroSection;
