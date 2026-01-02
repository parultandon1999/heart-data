import { AlertTriangle, Shield } from "lucide-react";

export function FlaggedContent() {
  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">Flagged Content</h3>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm">Bias & Fairness Audits</p>
              <p className="text-xs text-muted-foreground">Fact checking required</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Moderate</span>
        </div>
        
        <div className="flex items-center justify-between py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm">Model Drift Alerts</p>
              <p className="text-xs text-muted-foreground">Model checking required</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Moderate</span>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-xs text-muted-foreground mb-2">Pending Approvals</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <button 
              key={i}
              className="flex-1 py-1.5 text-xs border border-border rounded hover:bg-muted"
            >
              Review
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
