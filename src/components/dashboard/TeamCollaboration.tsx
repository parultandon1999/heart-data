import { GitCommit, MessageSquare } from "lucide-react";

export function TeamCollaboration() {
  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">Team Collaboration</h3>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
            <GitCommit className="h-3 w-3" />
            Recent Commits
          </p>
          <div className="flex items-center justify-between py-1.5">
            <div>
              <p className="text-sm">Recent Commits</p>
              <p className="text-xs text-muted-foreground">By Emma Williams · 2h ago</p>
            </div>
            <span className="text-xs text-success">+948</span>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
            <MessageSquare className="h-3 w-3" />
            Discussions
          </p>
          <div className="py-1.5">
            <p className="text-sm">There's a lot of unreviewed discussions?</p>
            <p className="text-xs text-muted-foreground mt-0.5">By Emma Williams · 2h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
