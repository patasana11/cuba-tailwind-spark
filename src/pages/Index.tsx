
import React, { useState } from 'react';
import { Users, ShoppingBag, DollarSign, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import StatCard from '@/components/cards/StatCard';
import ChartCard from '@/components/cards/ChartCard';

const salesData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 590 },
  { name: 'Jun', value: 390 },
  { name: 'Jul', value: 490 },
  { name: 'Aug', value: 600 }
];

const visitorData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
  { name: 'Aug', value: 5300 }
];

const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 5900 },
  { name: 'Jun', value: 3900 },
  { name: 'Jul', value: 4900 },
  { name: 'Aug', value: 6000 }
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-[#f8f8fa]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back, here's what's happening with your store today.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <StatCard 
              title="Total Users" 
              value="15,687" 
              change={{ value: "12.3%", positive: true }}
              icon={Users}
              iconColor="text-cuba-primary"
              iconBgColor="bg-cuba-primary-light"
            />
            <StatCard 
              title="Total Products" 
              value="4,285" 
              change={{ value: "8.5%", positive: true }}
              icon={ShoppingBag}
              iconColor="text-cuba-secondary"
              iconBgColor="bg-cuba-secondary/10"
            />
            <StatCard 
              title="Total Revenue" 
              value="$21,478" 
              change={{ value: "3.2%", positive: false }}
              icon={DollarSign}
              iconColor="text-cuba-success"
              iconBgColor="bg-cuba-success/10"
            />
            <StatCard 
              title="Sales Growth" 
              value="32.48%" 
              change={{ value: "7.2%", positive: true }}
              icon={BarChart2}
              iconColor="text-cuba-info"
              iconBgColor="bg-cuba-info/10"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard 
              title="Sales Overview" 
              subtitle="Monthly Sales Performance" 
              data={salesData} 
              dataKey="value" 
              chartType="area"
              color="#7366ff"
            />
            <ChartCard 
              title="Revenue Report" 
              subtitle="Monthly Revenue Trends" 
              data={revenueData} 
              dataKey="value" 
              chartType="bar"
              color="#a927f9"
            />
          </div>
          
          <div className="mb-6">
            <Tabs defaultValue="daily" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Visitor Statistics</h2>
                <TabsList className="bg-white shadow-cuba-sm">
                  <TabsTrigger value="daily" className="data-[state=active]:bg-cuba-primary data-[state=active]:text-white">Daily</TabsTrigger>
                  <TabsTrigger value="weekly" className="data-[state=active]:bg-cuba-primary data-[state=active]:text-white">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly" className="data-[state=active]:bg-cuba-primary data-[state=active]:text-white">Monthly</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="daily" className="m-0">
                <ChartCard 
                  title="" 
                  data={visitorData} 
                  dataKey="value" 
                  chartType="line"
                  color="#f73164"
                  height={300}
                  className="mt-0"
                />
              </TabsContent>
              <TabsContent value="weekly" className="m-0">
                <ChartCard 
                  title="" 
                  data={visitorData.map(item => ({ ...item, value: item.value * 0.7 }))} 
                  dataKey="value" 
                  chartType="line"
                  color="#f73164"
                  height={300}
                  className="mt-0"
                />
              </TabsContent>
              <TabsContent value="monthly" className="m-0">
                <ChartCard 
                  title="" 
                  data={visitorData.map(item => ({ ...item, value: item.value * 1.3 }))} 
                  dataKey="value" 
                  chartType="line"
                  color="#f73164"
                  height={300}
                  className="mt-0"
                />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="cuba-card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button className="cuba-btn-outline-primary">View All</Button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start p-3 border border-gray-100 rounded-lg hover:shadow-cuba-sm transition-shadow">
                  <div className="w-12 h-12 rounded bg-cuba-primary-light flex flex-col items-center justify-center text-cuba-primary mr-4">
                    <span className="text-sm font-bold">12</span>
                    <span className="text-xs">Apr</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Product Launch Meeting</h4>
                    <p className="text-sm text-muted-foreground">Discussion about new product features and marketing strategy</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-cuba-primary/10 text-cuba-primary px-2 py-0.5 rounded-full">10:00 AM</span>
                      <span className="text-xs ml-2">45 mins</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
