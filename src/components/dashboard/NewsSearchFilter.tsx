import { useState } from "react";
import { Search, Calendar, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface NewsSearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: { dateRange: string; source: string; topic: string }) => void;
}

const sources = [
  "All Sources",
  "Towards Data Science",
  "Medium",
  "Analytics Vidhya",
  "KDnuggets",
  "Towards AI",
];

const topics = [
  "All Topics",
  "LLMs",
  "Generative AI",
  "MLOps",
  "Data Engineering",
  "Computer Vision",
  "NLP",
  "Career",
];

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
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (type: string, value: string) => {
    let newDateRange = dateRange;
    let newSource = source;
    let newTopic = topic;
    const newActiveFilters = [...activeFilters];

    if (type === "dateRange") {
      newDateRange = value;
      setDateRange(value);
      if (value !== "all" && !newActiveFilters.includes(`Date: ${dateRanges.find(d => d.value === value)?.label}`)) {
        const oldFilter = newActiveFilters.find(f => f.startsWith("Date:"));
        if (oldFilter) newActiveFilters.splice(newActiveFilters.indexOf(oldFilter), 1);
        if (value !== "all") newActiveFilters.push(`Date: ${dateRanges.find(d => d.value === value)?.label}`);
      }
    } else if (type === "source") {
      newSource = value;
      setSource(value);
      const oldFilter = newActiveFilters.find(f => f.startsWith("Source:"));
      if (oldFilter) newActiveFilters.splice(newActiveFilters.indexOf(oldFilter), 1);
      if (value !== "All Sources") newActiveFilters.push(`Source: ${value}`);
    } else if (type === "topic") {
      newTopic = value;
      setTopic(value);
      const oldFilter = newActiveFilters.find(f => f.startsWith("Topic:"));
      if (oldFilter) newActiveFilters.splice(newActiveFilters.indexOf(oldFilter), 1);
      if (value !== "All Topics") newActiveFilters.push(`Topic: ${value}`);
    }

    setActiveFilters(newActiveFilters);
    onFilterChange({ dateRange: newDateRange, source: newSource, topic: newTopic });
  };

  const clearFilter = (filter: string) => {
    const newFilters = activeFilters.filter(f => f !== filter);
    setActiveFilters(newFilters);

    if (filter.startsWith("Date:")) {
      setDateRange("all");
      onFilterChange({ dateRange: "all", source, topic });
    } else if (filter.startsWith("Source:")) {
      setSource("All Sources");
      onFilterChange({ dateRange, source: "All Sources", topic });
    } else if (filter.startsWith("Topic:")) {
      setTopic("All Topics");
      onFilterChange({ dateRange, source, topic: "All Topics" });
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setDateRange("all");
    setSource("All Sources");
    setTopic("All Topics");
    setSearchQuery("");
    onSearch("");
    onFilterChange({ dateRange: "all", source: "All Sources", topic: "All Topics" });
  };

  return (
    <div className="stat-card animate-fade-in mb-4">
      <div className="flex flex-col gap-3">
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-9"
            />
          </div>
          <Button onClick={handleSearch} size="sm">
            Search
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <Select value={dateRange} onValueChange={(v) => handleFilterChange("dateRange", v)}>
            <SelectTrigger className="w-[130px] h-8 text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              {dateRanges.map((range) => (
                <SelectItem key={range.value} value={range.value} className="text-xs">
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={source} onValueChange={(v) => handleFilterChange("source", v)}>
            <SelectTrigger className="w-[160px] h-8 text-xs">
              <Filter className="h-3 w-3 mr-1" />
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              {sources.map((s) => (
                <SelectItem key={s} value={s} className="text-xs">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={topic} onValueChange={(v) => handleFilterChange("topic", v)}>
            <SelectTrigger className="w-[140px] h-8 text-xs">
              <Filter className="h-3 w-3 mr-1" />
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((t) => (
                <SelectItem key={t} value={t} className="text-xs">
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">Active filters:</span>
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="text-xs flex items-center gap-1 cursor-pointer hover:bg-destructive/20"
                onClick={() => clearFilter(filter)}
              >
                {filter}
                <X className="h-3 w-3" />
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs h-6 px-2 text-muted-foreground hover:text-destructive"
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
