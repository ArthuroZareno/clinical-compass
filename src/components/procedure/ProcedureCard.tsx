import { Link } from "react-router-dom";
import { Procedure } from "@/data/procedures";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ChevronRight } from "lucide-react";

const difficultyColors = {
  basic: "success",
  intermediate: "warning",
  advanced: "destructive",
} as const;

interface ProcedureCardProps {
  procedure: Procedure;
  index?: number;
}

const ProcedureCard = ({ procedure, index = 0 }: ProcedureCardProps) => {
  return (
    <Link
      to={`/procedure/${procedure.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg card-shadow hover:card-shadow-hover animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Header */}
      <div className="border-b border-border bg-accent/30 px-5 py-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant="category">{procedure.category}</Badge>
          <Badge variant={difficultyColors[procedure.difficulty]}>
            {procedure.difficulty}
          </Badge>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {procedure.title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
          {procedure.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {procedure.estimatedTime}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              {procedure.steps.length} steps
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default ProcedureCard;
