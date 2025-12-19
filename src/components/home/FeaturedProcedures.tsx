import { Link } from "react-router-dom";
import { procedures } from "@/data/procedures";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, BookOpen } from "lucide-react";

const difficultyColors = {
  basic: "success",
  intermediate: "warning", 
  advanced: "destructive",
} as const;

const FeaturedProcedures = () => {
  const featuredProcedures = procedures.slice(0, 3);

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Featured Procedures
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Start with these essential nursing procedures that every healthcare professional should master
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProcedures.map((procedure, index) => (
            <Link
              key={procedure.id}
              to={`/procedure/${procedure.id}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl card-shadow hover:card-shadow-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="border-b border-border bg-accent/30 px-6 py-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="category">{procedure.category}</Badge>
                  <Badge variant={difficultyColors[procedure.difficulty]}>
                    {procedure.difficulty}
                  </Badge>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {procedure.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {procedure.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {procedure.estimatedTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {procedure.steps.length} steps
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link to="/procedures">
            <Button variant="hero" size="lg">
              View All Procedures
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProcedures;
