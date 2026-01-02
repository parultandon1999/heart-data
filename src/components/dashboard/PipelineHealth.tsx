import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const healthData = [
  { time: "1", value: 65 },
  { time: "2", value: 72 },
  { time: "3", value: 68 },
  { time: "4", value: 80 },
  { time: "5", value: 75 },
  { time: "6", value: 82 },
  { time: "7", value: 78 },
  { time: "8", value: 70 },
  { time: "9", value: 85 },
  { time: "10", value: 90 },
];

export function PipelineHealth() {
  return (
    <div className="stat-card animate-fade-in">
      <h3 className="section-title mb-4">Data Pipeline Health Status</h3>
      
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={healthData}>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--chart-blue))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--chart-blue))', strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, fill: 'hsl(var(--chart-blue))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
