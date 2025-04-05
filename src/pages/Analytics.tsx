
import React, { useState } from 'react';
import { Users, Briefcase, LineChart } from 'lucide-react';
import StatCard from '@/components/cards/StatCard';
import DataGridExample from '@/components/examples/DataGridExample';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const Analytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto py-6 px-4 md:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-6 dark:text-white">Analytics Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Employees"
              value="1,247"
              change={{ value: "12%", positive: true }}
              icon={Users}
              iconColor="text-cuba-primary"
              iconBgColor="bg-cuba-primary-light"
            />
            <StatCard
              title="Projects"
              value="86"
              change={{ value: "8%", positive: true }}
              icon={Briefcase}
              iconColor="text-cuba-secondary"
              iconBgColor="bg-cuba-secondary/10"
            />
            <StatCard
              title="Performance"
              value="91.2%"
              change={{ value: "5%", positive: true }}
              icon={LineChart}
              iconColor="text-cuba-success"
              iconBgColor="bg-cuba-success/10"
            />
          </div>
          
          <div className="mb-8">
            <DataGridExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
