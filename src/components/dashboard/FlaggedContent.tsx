import { AlertTriangle, Shield, CheckCircle } from "lucide-react";

interface FlaggedItem {
  title: string;
  subtitle: string;
  status: "Moderate" | "Review" | "Pending";
}

const biasAudits: FlaggedItem[] = [
  { title: "Bias & Fairness Audits", subtitle: "Fest checking required", status: "Moderate" },
];

const modelDrift: FlaggedItem[] = [
  { title: "Model Drift Alerts", subtitle: "Most checking required", status: "Moderate" },
];

const pendingApprovals: FlaggedItem[] = [
  { title: "Pending Approvals", subtitle: "Source versfelling required", status: "Review" },
];

export function FlaggedContent() {
  return (
    <div className="stat-card animate-fade-in">
      <h3 className="section-title mb-4">Flagged Content</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Bias & Fairness */}
        <div className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-start gap-2 mb-2">
            <Shield className="h-4 w-4 text-info mt-0.5" />
            <div>
              <p className="text-sm font-medium">Bias & Fairness Audits</p>
              <p className="text-xs text-muted-foreground">Fest checking required</p>
            </div>
          </div>
          <span className="badge-moderate">Moderate</span>
        </div>
        
        {/* Model Drift */}
        <div className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-start gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
            <div>
              <p className="text-sm font-medium">Model Drift Alerts</p>
              <p className="text-xs text-muted-foreground">Most checking required</p>
            </div>
          </div>
          <span className="badge-moderate">Moderate</span>
        </div>
      </div>
      
      {/* Pending Approvals */}
      <div className="mt-4">
        <h4 className="text-xs font-medium text-muted-foreground mb-2">Pending Approvals</h4>
        <p className="text-xs text-muted-foreground mb-3">Source versfelling required</p>
        
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <button 
              key={i}
              className="flex-1 py-2 text-xs font-medium border border-border rounded-md hover:bg-secondary transition-colors"
            >
              Review
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
