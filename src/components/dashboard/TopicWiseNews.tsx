import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const topicNews: Record<string, { title: string; source: string; time: string; url: string }[]> = {
  LLMs: [
    { title: "GPT-5 Architecture Deep Dive: Multi-Modal Reasoning", source: "Towards Data Science", time: "2h ago", url: "#" },
    { title: "Fine-tuning Llama 3.3 for Enterprise Use Cases", source: "Medium", time: "5h ago", url: "#" },
    { title: "Claude 4 vs GPT-5: Comprehensive Benchmark Analysis", source: "Analytics Vidhya", time: "1 day ago", url: "#" },
  ],
  "Gen AI": [
    { title: "Stable Diffusion 4.0: What's New in Image Generation", source: "Towards AI", time: "3h ago", url: "#" },
    { title: "Building Production-Ready GenAI Applications", source: "KDnuggets", time: "8h ago", url: "#" },
    { title: "RAG vs Fine-tuning: When to Use What", source: "Medium", time: "1 day ago", url: "#" },
  ],
  MLOps: [
    { title: "MLOps Best Practices for 2025: A Complete Guide", source: "Analytics Vidhya", time: "4h ago", url: "#" },
    { title: "Kubernetes for ML: Scaling Model Deployments", source: "Towards Data Science", time: "12h ago", url: "#" },
    { title: "Feature Stores: Feast vs Tecton Comparison", source: "Medium", time: "2 days ago", url: "#" },
  ],
  "Data Eng": [
    { title: "Apache Iceberg: The Future of Data Lakes", source: "Towards Data Science", time: "6h ago", url: "#" },
    { title: "Real-time Streaming with Apache Kafka & Flink", source: "KDnuggets", time: "1 day ago", url: "#" },
    { title: "dbt Best Practices for Data Transformation", source: "Medium", time: "2 days ago", url: "#" },
  ],
  CV: [
    { title: "Vision Transformers: State of the Art in 2025", source: "Towards AI", time: "5h ago", url: "#" },
    { title: "YOLO v10: Real-time Object Detection Advances", source: "Analytics Vidhya", time: "1 day ago", url: "#" },
    { title: "3D Vision for Autonomous Systems", source: "Medium", time: "3 days ago", url: "#" },
  ],
};

export function TopicWiseNews() {
  const topics = Object.keys(topicNews);

  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">By Topic</h3>

      <Tabs defaultValue="LLMs" className="w-full">
        <TabsList className="w-full justify-start h-8 bg-muted/50 p-0.5 gap-0.5">
          {topics.map((topic) => (
            <TabsTrigger
              key={topic}
              value={topic}
              className="text-xs px-2.5 py-1 h-7 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {topic}
            </TabsTrigger>
          ))}
        </TabsList>

        {topics.map((topic) => (
          <TabsContent key={topic} value={topic} className="mt-3">
            <div className="space-y-1">
              {topicNews[topic].map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  className="flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-muted/50 group"
                >
                  <div className="flex-1 min-w-0 mr-3">
                    <p className="text-sm text-foreground truncate">{article.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {article.source} · {article.time}
                    </p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
