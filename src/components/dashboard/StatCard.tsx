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
    <div className="stat-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{title}</p>
          <p className="stat-value mt-1">{value}</p>
          {subtitle && <p className="stat-label mt-1">{subtitle}</p>}
          {change && (
            <p className={`mt-1 ${changeType === "positive" ? "stat-change-positive" : changeType === "negative" ? "stat-change-negative" : "text-xs text-muted-foreground"}`}>
              {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className="p-2 rounded-lg bg-secondary">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
}
