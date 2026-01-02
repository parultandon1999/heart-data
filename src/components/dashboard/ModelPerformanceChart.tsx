import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const accuracyData = [
  { name: "22", value: 85, type: "high" },
  { name: "28", value: 42, type: "low" },
  { name: "34", value: 78, type: "high" },
  { name: "48", value: 38, type: "low" },
  { name: "56", value: 92, type: "high" },
];

const driftData = [
  { x: 0, y: 0.2 },
  { x: 0.2, y: 0.4 },
  { x: 0.4, y: 0.6 },
  { x: 0.6, y: 0.5 },
  { x: 0.8, y: 0.8 },
  { x: 1.0, y: 0.7 },
];

export function ModelPerformanceChart() {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title">Model Performance Monitoring</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
            Accuracy
          </button>
          <button className="px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-secondary rounded-md transition-colors">
            Filter
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Accuracy</p>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accuracyData} barSize={12}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {accuracyData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.type === "high" ? "hsl(var(--chart-blue))" : "hsl(var(--chart-orange))"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-2">F1 Score</p>
          <div className="h-24 flex items-end gap-1">
            {[65, 45, 80, 55, 70, 90, 60, 75, 85, 50].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t transition-all hover:opacity-80"
                style={{ 
                  height: `${height}%`, 
                  backgroundColor: i % 2 === 0 ? 'hsl(var(--chart-blue))' : 'hsl(var(--chart-orange))' 
                }}
              />
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-2">Drift</p>
          <div className="h-24 relative">
            <svg className="w-full h-full" viewBox="0 0 100 60">
              <defs>
                <linearGradient id="driftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--chart-blue))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--chart-orange))" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <ellipse cx="50" cy="30" rx="45" ry="25" fill="url(#driftGradient)" />
              {driftData.map((point, i) => (
                <circle
                  key={i}
                  cx={point.x * 90 + 5}
                  cy={60 - point.y * 50}
                  r="3"
                  fill="hsl(var(--chart-blue))"
                  className="animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-muted-foreground">
              <span>0.0</span>
              <span>1.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
