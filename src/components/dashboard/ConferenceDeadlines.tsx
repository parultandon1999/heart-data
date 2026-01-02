interface Conference {
  name: string;
  days: number[];
  highlight?: number;
}

const conferences: Conference[] = [
  { name: "Conference Deadlines", days: [29, 30, 31, 1, 2, 3, 4] },
  { name: "Research: Graph Neur", days: [5, 6, 7, 8, 9, 10, 11] },
  { name: "Politics", days: [12, 13, 14, 15, 16, 17, 18], highlight: 16 },
  { name: "Review: Large Language Model", days: [19, 20, 21, 22, 23, 24, 25] },
  { name: "Ethical AI Frameworks", days: [26, 27, 28, 29, 30, 31, 1] },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ConferenceDeadlines() {
  return (
    <div className="stat-card">
      <h3 className="section-title mb-3">Conference Deadlines</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="text-left font-normal text-muted-foreground pb-2 pr-2"></th>
              {weekDays.map(day => (
                <th key={day} className="text-center font-normal text-muted-foreground pb-2 px-1 w-7">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {conferences.map((conf, index) => (
              <tr key={index}>
                <td className="py-1.5 pr-2 truncate max-w-[100px] text-muted-foreground" title={conf.name}>
                  {conf.name}
                </td>
                {conf.days.map((day, dayIndex) => (
                  <td key={dayIndex} className="text-center py-1.5 px-1">
                    <span 
                      className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs ${
                        conf.highlight === day 
                          ? "bg-foreground text-background" 
                          : ""
                      }`}
                    >
                      {day}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
