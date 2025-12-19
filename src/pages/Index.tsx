import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = "/portfolio/index.html";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-foreground">Redirecting to portfolio...</p>
    </div>
  );
};

export default Index;
