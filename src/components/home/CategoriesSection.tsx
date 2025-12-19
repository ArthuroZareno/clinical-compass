import { Link } from "react-router-dom";
import { categories } from "@/data/procedures";
import { 
  Heart, Activity, Shield, Pill, Droplet, 
  Wind, CircleDot, Utensils, Siren, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Activity,
  Shield,
  Pill,
  Droplet,
  Bandage: Heart, // Fallback
  Wind,
  CircleDot,
  Utensils,
  Siren,
};

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our comprehensive library of nursing procedures organized by clinical specialty
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Heart;
            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg card-shadow hover:card-shadow-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {category.description}
                </p>

                {/* Procedure Count */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    {category.procedureCount} procedures
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link to="/categories">
            <Button variant="outline" size="lg">
              View All Categories
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
