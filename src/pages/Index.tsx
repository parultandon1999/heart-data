import { FileText, Brain, Database, Layers, BookOpen } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { ModelPerformanceChart } from "@/components/dashboard/ModelPerformanceChart";
import { ABTestCard } from "@/components/dashboard/ABTestCard";
import { ResearchPapers } from "@/components/dashboard/ResearchPapers";
import { ConferenceDeadlines } from "@/components/dashboard/ConferenceDeadlines";
import { TrendAnalysis } from "@/components/dashboard/TrendAnalysis";
import { PipelineHealth } from "@/components/dashboard/PipelineHealth";
import { FlaggedContent } from "@/components/dashboard/FlaggedContent";
import { TeamCollaboration } from "@/components/dashboard/TeamCollaboration";
import { DataScienceNewsFeed } from "@/components/dashboard/DataScienceNewsFeed";
import { TrendingTopicsChart } from "@/components/dashboard/TrendingTopicsChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <DashboardHeader />
        
        {/* Editorial Overview Section */}
        <section className="mb-6">
          <h2 className="section-title text-muted-foreground mb-4">Editorial Overview</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatCard
              title="AI Articles Published"
              value="58"
              change="+15% vs last week"
              changeType="positive"
              icon={FileText}
            />
            <StatCard
              title="ML Models Deployed"
              value="12"
              subtitle="Ready for integration"
              icon={Brain}
            />
            <StatCard
              title="Data Pipelines Active"
              value="24"
              subtitle="Running smoothly"
              icon={Database}
            />
            <StatCard
              title="Datasets Curated"
              value="85"
              subtitle="High quality"
              icon={Layers}
            />
            <StatCard
              title="Jupyter Notebooks"
              value="1540"
              subtitle="Shared"
              icon={BookOpen}
            />
          </div>
        </section>
        
        {/* Performance and Testing Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <ModelPerformanceChart />
          <ABTestCard />
        </section>

        {/* Live News & Trending Topics Section */}
        <section className="mb-6">
          <h2 className="section-title text-muted-foreground mb-4">Live Data Science & AI News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <DataScienceNewsFeed />
            <TrendingTopicsChart />
          </div>
        </section>
        
        {/* Data Science Content Section */}
        <section className="mb-6">
          <h2 className="section-title text-muted-foreground mb-4">Data Science Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <ResearchPapers />
            <div className="lg:col-span-2">
              <ConferenceDeadlines />
            </div>
          </div>
        </section>
        
        {/* Advanced Analytics Section */}
        <section className="mb-6">
          <h2 className="section-title text-muted-foreground mb-4">Advanced Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TrendAnalysis />
            <PipelineHealth />
          </div>
        </section>
        
        {/* Flagged Content and Collaboration Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FlaggedContent />
          <TeamCollaboration />
        </section>
      </div>
    </div>
  );
};

export default Index;
