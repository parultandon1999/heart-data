import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const healthData = [
  { time: "Mon", value: 65 },
  { time: "Tue", value: 72 },
  { time: "Wed", value: 68 },
  { time: "Thu", value: 80 },
  { time: "Fri", value: 75 },
  { time: "Sat", value: 82 },
  { time: "Sun", value: 90 },
];

export function PipelineHealth() {
  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">Pipeline Health</h3>
      
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={healthData}>
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
              domain={[50, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '4px',
                fontSize: '11px'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--foreground))" 
              strokeWidth={1.5}
              dot={{ fill: 'hsl(var(--foreground))', strokeWidth: 0, r: 2.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
