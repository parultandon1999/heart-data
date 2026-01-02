import { ExternalLink, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    title: "GPT-5 Architecture Leaked: What We Know So Far",
    source: "Towards Data Science",
    time: "2h ago",
    tags: ["LLM", "AI"],
    url: "#",
  },
  {
    title: "MLOps Best Practices for Production Systems in 2025",
    source: "Analytics Vidhya",
    time: "4h ago",
    tags: ["MLOps", "Engineering"],
    url: "#",
  },
  {
    title: "Fine-tuning Llama 3.3 for Domain-Specific Tasks",
    source: "Medium",
    time: "6h ago",
    tags: ["LLM", "NLP"],
    url: "#",
  },
  {
    title: "Computer Vision Trends Shaping Autonomous Systems",
    source: "Towards AI",
    time: "1 day ago",
    tags: ["CV", "AI"],
    url: "#",
  },
  {
    title: "Career Paths in Data Science: 2025 Salary Report",
    source: "KDnuggets",
    time: "1 day ago",
    tags: ["Career", "ML"],
    url: "#",
  },
  {
    title: "Building RAG Pipelines with Vector Databases",
    source: "Towards Data Science",
    time: "2 days ago",
    tags: ["LLM", "Engineering"],
    url: "#",
  },
];

const tagColors: Record<string, string> = {
  AI: "bg-chart-blue/20 text-chart-blue border-chart-blue/30",
  ML: "bg-chart-orange/20 text-chart-orange border-chart-orange/30",
  NLP: "bg-chart-green/20 text-chart-green border-chart-green/30",
  LLM: "bg-primary/20 text-primary border-primary/30",
  Career: "bg-chart-purple/20 text-chart-purple border-chart-purple/30",
  CV: "bg-info/20 text-info border-info/30",
  MLOps: "bg-warning/20 text-warning border-warning/30",
  Engineering: "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30",
};

export function DataScienceNewsFeed() {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title">Latest Data Science & AI News</h3>
        <Badge variant="outline" className="text-xs">
          Live Feed
        </Badge>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="block p-3 rounded-lg border border-border/50 bg-card/50 hover:bg-accent/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </h4>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span className="font-medium">{item.source}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {item.time}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 text-xs rounded-full border ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
