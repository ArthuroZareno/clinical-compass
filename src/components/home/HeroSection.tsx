import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    { icon: BookOpen, label: "100+ Procedures" },
    { icon: Shield, label: "Evidence-Based" },
    { icon: Clock, label: "Quick Reference" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background pb-16 pt-12 md:pb-24 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 rounded-full bg-info/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
            <Shield className="h-4 w-4" />
            Trusted by nursing professionals worldwide
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground animate-fade-up md:text-5xl lg:text-6xl">
            Your Complete Guide to{" "}
            <span className="text-gradient">Nursing Procedures</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground animate-fade-up md:text-xl" style={{ animationDelay: "0.1s" }}>
            Access standardized, evidence-based nursing procedures with step-by-step instructions, rationales, and safety considerations. Perfect for students, educators, and practicing nurses.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search procedures, e.g., 'blood pressure', 'catheterization'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 rounded-xl border-2 pl-12 pr-32 text-base shadow-lg focus:border-primary focus:ring-primary"
              />
              <Link to={`/procedures?q=${encodeURIComponent(searchQuery)}`}>
                <Button 
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  size="lg"
                >
                  Search
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Link to="/procedures">
              <Button variant="hero" size="xl">
                Browse All Procedures
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline-hero" size="xl">
                View Categories
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
