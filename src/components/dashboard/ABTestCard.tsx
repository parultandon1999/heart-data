interface Experiment {
  name: string;
  status: "Active" | "Paused" | "Completed";
  test: string;
}

const experiments: Experiment[] = [
  { name: "Experiment 1", status: "Active", test: "92 mins" },
  { name: "Experiment 2", status: "Active", test: "14 Dslcp" },
];

export function ABTestCard() {
  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title">A/B Test Active</h3>
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          All Tests →
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground pb-2 border-b border-border">
          <span>Experiment</span>
          <span>Status</span>
          <span>Test</span>
        </div>
        
        {experiments.map((exp, index) => (
          <div 
            key={index} 
            className="grid grid-cols-3 gap-4 py-2 text-sm items-center hover:bg-secondary/50 rounded-md transition-colors px-1"
          >
            <span className="font-medium">{exp.name}</span>
            <span className="badge-active w-fit">{exp.status}</span>
            <span className="text-muted-foreground">{exp.test}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
