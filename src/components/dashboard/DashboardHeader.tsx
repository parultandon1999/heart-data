import { useState } from "react";
import { Download, RefreshCw } from "lucide-react";
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
  };

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-lg font-medium">Data Science Dashboard</h1>
        <p className="text-sm text-muted-foreground">News and analytics overview</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[100px] h-8 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today" className="text-xs">Today</SelectItem>
            <SelectItem value="7days" className="text-xs">7 Days</SelectItem>
            <SelectItem value="30days" className="text-xs">30 Days</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="h-8 text-xs" onClick={handleFetch}>
          <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
          Fetch
        </Button>
        <Button size="sm" className="h-8 text-xs">
          <Download className="h-3.5 w-3.5 mr-1.5" />
          Export
        </Button>
      </div>
    </header>
  );
}
