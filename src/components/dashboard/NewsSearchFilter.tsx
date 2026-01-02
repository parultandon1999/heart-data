import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NewsSearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: { dateRange: string; source: string; topic: string }) => void;
}

const sources = ["All Sources", "Towards Data Science", "Medium", "Analytics Vidhya", "KDnuggets", "Towards AI"];
const topics = ["All Topics", "LLMs", "Generative AI", "MLOps", "Data Engineering", "Computer Vision", "NLP", "Career"];
const dateRanges = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
];

export function NewsSearchFilter({ onSearch, onFilterChange }: NewsSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("all");
  const [source, setSource] = useState("All Sources");
  const [topic, setTopic] = useState("All Topics");

  const handleSearch = () => onSearch(searchQuery);

  const handleFilterChange = (type: string, value: string) => {
    if (type === "dateRange") setDateRange(value);
    else if (type === "source") setSource(value);
    else if (type === "topic") setTopic(value);
    
    onFilterChange({
      dateRange: type === "dateRange" ? value : dateRange,
      source: type === "source" ? value : source,
      topic: type === "topic" ? value : topic,
    });
  };

  const hasFilters = dateRange !== "all" || source !== "All Sources" || topic !== "All Topics" || searchQuery;

  const clearAll = () => {
    setSearchQuery("");
    setDateRange("all");
    setSource("All Sources");
    setTopic("All Topics");
    onSearch("");
    onFilterChange({ dateRange: "all", source: "All Sources", topic: "All Topics" });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <div className="relative flex-1 min-w-[200px] max-w-sm">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="pl-8 h-8 text-sm"
        />
      </div>

      <Select value={dateRange} onValueChange={(v) => handleFilterChange("dateRange", v)}>
        <SelectTrigger className="w-[110px] h-8 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {dateRanges.map((r) => (
            <SelectItem key={r.value} value={r.value} className="text-xs">{r.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={source} onValueChange={(v) => handleFilterChange("source", v)}>
        <SelectTrigger className="w-[140px] h-8 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sources.map((s) => (
            <SelectItem key={s} value={s} className="text-xs">{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={topic} onValueChange={(v) => handleFilterChange("topic", v)}>
        <SelectTrigger className="w-[120px] h-8 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {topics.map((t) => (
            <SelectItem key={t} value={t} className="text-xs">{t}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={clearAll} className="h-8 px-2 text-xs text-muted-foreground">
          <X className="h-3 w-3 mr-1" />
          Clear
        </Button>
      )}
    </div>
  );
}
