import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const accuracyData = [
  { name: "22", value: 85, type: "high" },
  { name: "28", value: 42, type: "low" },
  { name: "34", value: 78, type: "high" },
  { name: "48", value: 38, type: "low" },
  { name: "56", value: 92, type: "high" },
];

export function ModelPerformanceChart() {
  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="section-title">Model Performance</h3>
        <div className="flex gap-1">
          <button className="px-2 py-1 text-xs bg-muted rounded">Accuracy</button>
          <button className="px-2 py-1 text-xs text-muted-foreground hover:bg-muted rounded">Filter</button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Accuracy</p>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accuracyData} barSize={10}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '4px',
                    fontSize: '11px'
                  }} 
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {accuracyData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.type === "high" ? "hsl(var(--chart-blue))" : "hsl(var(--muted-foreground))"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-2">F1 Score</p>
          <div className="h-24 flex items-end gap-0.5">
            {[65, 45, 80, 55, 70, 90, 60, 75, 85, 50].map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ 
                  height: `${height}%`, 
                  backgroundColor: 'hsl(var(--muted-foreground))' 
                }}
              />
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-2">Drift</p>
          <div className="h-24 relative">
            <svg className="w-full h-full" viewBox="0 0 100 60">
              <ellipse cx="50" cy="30" rx="45" ry="25" fill="hsl(var(--muted))" />
              {[
                { x: 0, y: 0.2 },
                { x: 0.2, y: 0.4 },
                { x: 0.4, y: 0.6 },
                { x: 0.6, y: 0.5 },
                { x: 0.8, y: 0.8 },
                { x: 1.0, y: 0.7 },
              ].map((point, i) => (
                <circle
                  key={i}
                  cx={point.x * 90 + 5}
                  cy={60 - point.y * 50}
                  r="2.5"
                  fill="hsl(var(--foreground))"
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
