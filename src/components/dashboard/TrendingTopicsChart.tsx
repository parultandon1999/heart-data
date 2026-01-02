import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

const trendingData = [
  { topic: "LLMs", count: 2847, growth: "+42%" },
  { topic: "Generative AI", count: 2156, growth: "+38%" },
  { topic: "MLOps", count: 1823, growth: "+25%" },
  { topic: "Data Engineering", count: 1654, growth: "+18%" },
  { topic: "Computer Vision", count: 1432, growth: "+15%" },
];

const colors = [
  "hsl(var(--primary))",
  "hsl(var(--chart-blue))",
  "hsl(var(--chart-orange))",
  "hsl(var(--chart-green))",
  "hsl(var(--chart-purple))",
];

export function TrendingTopicsChart() {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-4 w-4 text-primary" />
        <h3 className="section-title">Top 5 Trending Topics This Week</h3>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={trendingData}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 80, bottom: 0 }}
          >
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              type="category"
              dataKey="topic"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(var(--foreground))" }}
              width={75}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value.toLocaleString()} mentions`, "Count"]}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
              {trendingData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {trendingData.map((item, index) => (
          <div key={item.topic} className="text-center">
            <div
              className="w-3 h-3 rounded-full mx-auto mb-1"
              style={{ backgroundColor: colors[index] }}
            />
            <span className="text-xs font-medium text-success">{item.growth}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
