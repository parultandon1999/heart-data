import { useState } from "react";
import { ExternalLink, Clock, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const topicNews: Record<string, { title: string; source: string; time: string; url: string }[]> = {
  LLMs: [
    { title: "GPT-5 Architecture Deep Dive: Multi-Modal Reasoning", source: "Towards Data Science", time: "2h ago", url: "#" },
    { title: "Fine-tuning Llama 3.3 for Enterprise Use Cases", source: "Medium", time: "5h ago", url: "#" },
    { title: "Claude 4 vs GPT-5: Comprehensive Benchmark Analysis", source: "Analytics Vidhya", time: "1 day ago", url: "#" },
  ],
  "Generative AI": [
    { title: "Stable Diffusion 4.0: What's New in Image Generation", source: "Towards AI", time: "3h ago", url: "#" },
    { title: "Building Production-Ready GenAI Applications", source: "KDnuggets", time: "8h ago", url: "#" },
    { title: "RAG vs Fine-tuning: When to Use What", source: "Medium", time: "1 day ago", url: "#" },
  ],
  MLOps: [
    { title: "MLOps Best Practices for 2025: A Complete Guide", source: "Analytics Vidhya", time: "4h ago", url: "#" },
    { title: "Kubernetes for ML: Scaling Model Deployments", source: "Towards Data Science", time: "12h ago", url: "#" },
    { title: "Feature Stores: Feast vs Tecton Comparison", source: "Medium", time: "2 days ago", url: "#" },
  ],
  "Data Engineering": [
    { title: "Apache Iceberg: The Future of Data Lakes", source: "Towards Data Science", time: "6h ago", url: "#" },
    { title: "Real-time Streaming with Apache Kafka & Flink", source: "KDnuggets", time: "1 day ago", url: "#" },
    { title: "dbt Best Practices for Data Transformation", source: "Medium", time: "2 days ago", url: "#" },
  ],
  "Computer Vision": [
    { title: "Vision Transformers: State of the Art in 2025", source: "Towards AI", time: "5h ago", url: "#" },
    { title: "YOLO v10: Real-time Object Detection Advances", source: "Analytics Vidhya", time: "1 day ago", url: "#" },
    { title: "3D Vision for Autonomous Systems", source: "Medium", time: "3 days ago", url: "#" },
  ],
};

const topicColors: Record<string, string> = {
  LLMs: "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
  "Generative AI": "data-[state=active]:bg-chart-blue data-[state=active]:text-white",
  MLOps: "data-[state=active]:bg-chart-orange data-[state=active]:text-white",
  "Data Engineering": "data-[state=active]:bg-chart-green data-[state=active]:text-white",
  "Computer Vision": "data-[state=active]:bg-chart-purple data-[state=active]:text-white",
};

export function TopicWiseNews() {
  const topics = Object.keys(topicNews);

  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4 text-primary" />
        <h3 className="section-title">Topic-wise News Analytics</h3>
      </div>

      <Tabs defaultValue="LLMs" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
          {topics.map((topic) => (
            <TabsTrigger
              key={topic}
              value={topic}
              className={`text-xs px-3 py-1.5 rounded-md transition-all ${topicColors[topic]}`}
            >
              {topic}
            </TabsTrigger>
          ))}
        </TabsList>

        {topics.map((topic) => (
          <TabsContent key={topic} value={topic} className="mt-4 space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                {topicNews[topic].length} articles
              </Badge>
              <span className="text-xs text-muted-foreground">Trending this week</span>
            </div>

            {topicNews[topic].map((article, index) => (
              <a
                key={index}
                href={article.url}
                className="flex items-start justify-between p-3 rounded-lg border border-border/50 bg-card/50 hover:bg-accent/50 transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span className="font-medium">{article.source}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.time}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
