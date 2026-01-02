import { TrendingUp, Flame, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trendingItems = [
  {
    title: "OpenAI releases GPT-5 with reasoning capabilities",
    mentions: 847,
    trend: "hot",
  },
  {
    title: "GenAI jobs grow 28% in Q4 2024",
    mentions: 623,
    trend: "rising",
  },
  {
    title: "MLOps tools adoption rising across enterprises",
    mentions: 512,
    trend: "rising",
  },
  {
    title: "Anthropic announces Claude 4 multimodal update",
    mentions: 489,
    trend: "hot",
  },
  {
    title: "Data Engineering salaries hit new highs",
    mentions: 356,
    trend: "new",
  },
];

const trendIcons = {
  hot: <Flame className="h-3 w-3 text-destructive" />,
  rising: <TrendingUp className="h-3 w-3 text-success" />,
  new: <Zap className="h-3 w-3 text-warning" />,
};

const trendColors = {
  hot: "bg-destructive/10 text-destructive border-destructive/20",
  rising: "bg-success/10 text-success border-success/20",
  new: "bg-warning/10 text-warning border-warning/20",
};

export function TrendingPanel() {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-md bg-primary/10">
          <TrendingUp className="h-4 w-4 text-primary" />
        </div>
        <h3 className="section-title">Trending This Week</h3>
        <Badge variant="outline" className="text-xs ml-auto">
          Live
        </Badge>
      </div>

      <div className="space-y-2">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
          >
            <span className="text-lg font-bold text-muted-foreground/50 w-5 shrink-0">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Badge
                  variant="outline"
                  className={`text-xs px-1.5 py-0 h-5 ${trendColors[item.trend as keyof typeof trendColors]}`}
                >
                  {trendIcons[item.trend as keyof typeof trendIcons]}
                  <span className="ml-1 capitalize">{item.trend}</span>
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {item.mentions.toLocaleString()} mentions
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          Based on keyword frequency & article volume
        </p>
      </div>
    </div>
  );
}
