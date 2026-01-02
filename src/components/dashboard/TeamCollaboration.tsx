import { GitCommit, MessageSquare, User } from "lucide-react";

interface Commit {
  user: string;
  message: string;
  time: string;
  badge?: string;
}

interface Discussion {
  user: string;
  message: string;
  time: string;
}

const commits: Commit[] = [
  { user: "Emma Williams", message: "Recent Commits", time: "2 hours ago", badge: "+948" },
];

const discussions: Discussion[] = [
  { user: "Emma Williams", message: "There's a lot of unreviewed discussions?", time: "2 hours ago" },
];

export function TeamCollaboration() {
  return (
    <div className="stat-card animate-fade-in">
      <h3 className="section-title mb-4">User & Team Collaboration</h3>
      
      {/* Recent Commits */}
      <div className="mb-4">
        <h4 className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <GitCommit className="h-3 w-3" />
          Recent Commits
        </h4>
        
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chart-blue to-chart-purple flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Recent Commits</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-success/10 text-success font-medium">+948</span>
            </div>
            <p className="text-xs text-muted-foreground">By Emma Williams • 2 hours ago</p>
          </div>
        </div>
      </div>
      
      {/* Discussions */}
      <div>
        <h4 className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <MessageSquare className="h-3 w-3" />
          Discussions
        </h4>
        
        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chart-orange to-chart-pink flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm">There's a lot of unreviewed discussions?</p>
            <p className="text-xs text-muted-foreground mt-1">By Emma Williams • 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
