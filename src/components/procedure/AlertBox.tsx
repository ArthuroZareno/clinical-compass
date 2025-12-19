import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "warning" | "info" | "success" | "error";

interface AlertBoxProps {
  type: AlertType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const alertStyles = {
  warning: {
    container: "border-warning/30 bg-warning/10",
    icon: AlertTriangle,
    iconColor: "text-warning",
    title: "text-warning-foreground",
  },
  info: {
    container: "border-info/30 bg-info/10",
    icon: Info,
    iconColor: "text-info",
    title: "text-info",
  },
  success: {
    container: "border-success/30 bg-success/10",
    icon: CheckCircle,
    iconColor: "text-success",
    title: "text-success",
  },
  error: {
    container: "border-destructive/30 bg-destructive/10",
    icon: XCircle,
    iconColor: "text-destructive",
    title: "text-destructive",
  },
};

const AlertBox = ({ type, title, children, className }: AlertBoxProps) => {
  const styles = alertStyles[type];
  const Icon = styles.icon;

  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        styles.container,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", styles.iconColor)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn("mb-1 font-semibold", styles.title)}>{title}</h4>
          )}
          <div className="text-sm text-foreground/90">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
