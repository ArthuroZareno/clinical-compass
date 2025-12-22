import { BookOpen, Users, Award, RefreshCw } from "lucide-react";
const stats = [{
  icon: BookOpen,
  value: "100+",
  label: "Nursing Procedures",
  description: "Comprehensive clinical guides"
}, {
  icon: Users,
  value: "10K+",
  label: "Active Users",
  description: "Students & professionals"
}, {
  icon: Award,
  value: "Expert",
  label: "Reviewed Content",
  description: "By licensed nurses"
}, {
  icon: RefreshCw,
  value: "2024",
  label: "Updated Guidelines",
  description: "Evidence-based standards"
}];
const StatsSection = () => {
  return (
    <section className="border-y border-border bg-accent/30 py-16">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;