import { ExternalLink } from "lucide-react";

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

export function DataScienceNewsFeed() {
  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">Latest News</h3>

      <div className="space-y-1 max-h-[360px] overflow-y-auto">
        {newsItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-muted/50 group"
          >
            <div className="flex-1 min-w-0 mr-3">
              <p className="text-sm text-foreground truncate">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.source} · {item.time}
              </p>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}
