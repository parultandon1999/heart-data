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
    <div className="stat-card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="section-title">A/B Tests</h3>
        <button className="text-xs text-muted-foreground hover:text-foreground">
          View all →
        </button>
      </div>
      
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-muted-foreground border-b border-border">
            <th className="text-left font-normal pb-2">Experiment</th>
            <th className="text-left font-normal pb-2">Status</th>
            <th className="text-left font-normal pb-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {experiments.map((exp, index) => (
            <tr key={index} className="border-b border-border last:border-0">
              <td className="py-2">{exp.name}</td>
              <td className="py-2 text-muted-foreground">{exp.status}</td>
              <td className="py-2 text-muted-foreground">{exp.test}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
