import { Calendar, Download, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <BarChart3 className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Data Science News Dashboard:</h1>
          <p className="text-sm text-muted-foreground">Administrative overview and analytics</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="h-4 w-4" />
          Today
        </Button>
        <Button size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>
    </header>
  );
}
