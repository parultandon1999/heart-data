import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";

const trendData = [
  { name: "Jan", topics: 40, sentiment: 65 },
  { name: "Feb", topics: 55, sentiment: 72 },
  { name: "Mar", topics: 45, sentiment: 58 },
  { name: "Apr", topics: 80, sentiment: 85 },
  { name: "May", topics: 65, sentiment: 78 },
  { name: "Jun", topics: 90, sentiment: 92 },
  { name: "Jul", topics: 75, sentiment: 70 },
  { name: "Aug", topics: 95, sentiment: 88 },
  { name: "Sep", topics: 85, sentiment: 82 },
  { name: "Oct", topics: 110, sentiment: 95 },
  { name: "Nov", topics: 100, sentiment: 90 },
  { name: "Dec", topics: 120, sentiment: 105 },
];

export function TrendAnalysis() {
  return (
    <div className="stat-card animate-fade-in">
      <h3 className="section-title mb-4">Trend Analysis (Sentiment, Topic Modeling)</h3>
      
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData}>
            <defs>
              <linearGradient id="colorTopics" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-blue))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-blue))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-orange))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-orange))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="topics" 
              stroke="hsl(var(--chart-blue))" 
              fillOpacity={1} 
              fill="url(#colorTopics)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="sentiment" 
              stroke="hsl(var(--chart-orange))" 
              fillOpacity={1} 
              fill="url(#colorSentiment)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex gap-4 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-blue" />
          <span className="text-xs text-muted-foreground">Bonuses</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-orange" />
          <span className="text-xs text-muted-foreground">Topics</span>
        </div>
      </div>
    </div>
  );
}
