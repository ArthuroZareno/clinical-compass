import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  BookOpen, 
  Shield, 
  Award, 
  Heart,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Evidence-Based",
      description: "All procedures are based on current clinical guidelines and best practices from WHO, CDC, and nursing textbooks.",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Content is reviewed by licensed nurses and healthcare professionals to ensure clinical accuracy.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Designed for easy access on any device, anytime, anywhere - in class, at home, or on the unit.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive",
      description: "Each procedure includes all essential components from indications to documentation guidelines.",
    },
  ];

  const targetUsers = [
    "Nursing students preparing for clinicals and exams",
    "Nursing educators and clinical instructors",
    "Registered Nurses seeking quick reference materials",
    "Healthcare assistants expanding their knowledge",
    "Nursing schools and training institutions",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-accent/50 to-background py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
                About NurseProcedures
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Your trusted resource for standardized, evidence-based nursing procedures designed to improve patient safety and clinical competence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Target className="h-7 w-7" />
                  </div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide clear, standardized, and accessible nursing procedures for students, educators, and practicing nurses. We believe that every healthcare professional deserves access to high-quality educational resources that support safe patient care.
                  </p>
                </div>
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Heart className="h-7 w-7" />
                  </div>
                  <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading online resource for nursing procedures worldwide, empowering healthcare professionals with the knowledge and confidence they need to provide excellent patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                Our Core Values
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                These principles guide everything we do at NurseProcedures
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm card-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                  Who We Serve
                </h2>
                <p className="text-muted-foreground">
                  Our platform is designed for healthcare professionals at every stage of their career
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm card-shadow">
                <ul className="space-y-4">
                  {targetUsers.map((user, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-success" />
                      <span className="text-foreground">{user}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-warning/30 bg-warning/10 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Award className="h-6 w-6 text-warning" />
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Medical Disclaimer
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on NurseProcedures is intended for educational purposes only and should not replace professional medical judgment, clinical protocols, or institutional policies. Always follow your facility's guidelines and consult with qualified healthcare providers for patient-specific medical decisions. This website does not provide patient-specific medical advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Explore our comprehensive library of nursing procedures and enhance your clinical skills today.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/procedures">
                  <Button variant="hero" size="lg">
                    Browse Procedures
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button variant="outline" size="lg">
                    View Categories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
