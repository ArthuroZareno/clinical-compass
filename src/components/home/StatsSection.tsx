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
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;