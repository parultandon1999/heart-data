import { TrendingUp } from "lucide-react";

const trendingItems = [
  { title: "OpenAI releases GPT-5 with reasoning capabilities", mentions: 847 },
  { title: "GenAI jobs grow 28% in Q4 2024", mentions: 623 },
  { title: "MLOps tools adoption rising across enterprises", mentions: 512 },
  { title: "Anthropic announces Claude 4 multimodal update", mentions: 489 },
  { title: "Data Engineering salaries hit new highs", mentions: 356 },
];

export function TrendingPanel() {
  return (
    <div className="stat-card">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="h-4 w-4 text-muted-foreground" />
        <h3 className="section-title">Trending This Week</h3>
      </div>

      <div className="space-y-2">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2.5 py-1.5 cursor-pointer hover:bg-muted/30 -mx-2 px-2 rounded"
          >
            <span className="text-sm font-medium text-muted-foreground w-4 shrink-0">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground line-clamp-2">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.mentions.toLocaleString()} mentions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
