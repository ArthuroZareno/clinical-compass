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
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;