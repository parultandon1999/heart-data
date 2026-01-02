interface Paper {
  title: string;
  status: "High" | "Review";
}

const papers: Paper[] = [
  { title: "Deep Learning Trends 2026", status: "High" },
  { title: "Research: Graph Neural Networks", status: "Review" },
  { title: "Review: Large Language Model Technology", status: "Review" },
  { title: "Review: Large Language Model", status: "Review" },
  { title: "Ethical AI Frameworks", status: "Review" },
];

export function ResearchPapers() {
  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">AI Research Papers</h3>
      
      <div className="space-y-1">
        {papers.map((paper, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-1.5 hover:bg-muted/50 rounded px-2 -mx-2 cursor-pointer"
          >
            <span className="text-sm truncate flex-1 mr-2">{paper.title}</span>
            <span className="text-xs text-muted-foreground">{paper.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
