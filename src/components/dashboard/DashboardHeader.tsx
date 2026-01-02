import { useState } from "react";
import { Calendar, Download, BarChart3, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
  const [timeRange, setTimeRange] = useState("today");

  const handleFetch = () => {
    console.log(`Fetching news for: ${timeRange}`);
    // Add fetch logic here
  };

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
      
      <div className="flex items-center gap-2 sm:gap-3">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[120px] h-9">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="7days">7 Days</SelectItem>
            <SelectItem value="30days">30 Days</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="gap-2" onClick={handleFetch}>
          <RefreshCw className="h-4 w-4" />
          Fetch
        </Button>
        <Button size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>
    </header>
  );
}
