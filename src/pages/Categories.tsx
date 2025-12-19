import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { categories } from "@/data/procedures";
import { 
  Heart, Activity, Shield, Pill, Droplet, 
  Wind, CircleDot, Utensils, Siren, ChevronRight
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Activity,
  Shield,
  Pill,
  Droplet,
  Bandage: Heart,
  Wind,
  CircleDot,
  Utensils,
  Siren,
};

const Categories = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-accent/30 py-12">
          <div className="container">
            <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Procedure Categories
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Explore nursing procedures organized by clinical specialty. Select a category to view all related procedures.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => {
                const IconComponent = iconMap[category.icon] || Heart;
                return (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl card-shadow hover:card-shadow-hover animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Icon */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-8 w-8" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      {category.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                        {category.procedureCount} procedures
                      </span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-2 group-hover:text-primary" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
