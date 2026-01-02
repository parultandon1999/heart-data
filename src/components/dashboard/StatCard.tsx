import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: LucideIcon;
}

export function StatCard({ title, value, subtitle, change, changeType = "neutral", icon: Icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">{title}</p>
          <p className="stat-value mt-1">{value}</p>
          {subtitle && <p className="stat-label mt-0.5">{subtitle}</p>}
          {change && (
            <p className={`mt-0.5 ${changeType === "positive" ? "stat-change-positive" : changeType === "negative" ? "stat-change-negative" : "text-xs text-muted-foreground"}`}>
              {change}
            </p>
          )}
        </div>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </div>
    </div>
  );
}
