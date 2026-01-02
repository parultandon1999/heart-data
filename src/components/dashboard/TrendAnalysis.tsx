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
    <div className="stat-card">
      <h3 className="section-title mb-3">Trend Analysis</h3>
      
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData}>
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
                borderRadius: '4px',
                fontSize: '11px'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="topics" 
              stroke="hsl(var(--foreground))" 
              fill="hsl(var(--muted))" 
              strokeWidth={1.5}
            />
            <Area 
              type="monotone" 
              dataKey="sentiment" 
              stroke="hsl(var(--muted-foreground))" 
              fill="transparent" 
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-foreground" />
          <span className="text-xs text-muted-foreground">Topics</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-muted-foreground border-dashed" style={{ borderBottom: '1px dashed' }} />
          <span className="text-xs text-muted-foreground">Sentiment</span>
        </div>
      </div>
    </div>
  );
}
