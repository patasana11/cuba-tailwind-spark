
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, LineChart, Line } from 'recharts';
import { cn } from '@/lib/utils';

type ChartType = 'area' | 'bar' | 'line';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  data: any[];
  chartType?: ChartType;
  dataKey: string;
  className?: string;
  height?: number;
  showGrid?: boolean;
  color?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  data,
  chartType = 'area',
  dataKey,
  className,
  height = 250,
  showGrid = true,
  color = '#7366ff'
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.3} />}
            <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 0 15px rgba(115, 102, 255, 0.15)'
              }} 
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              fill="url(#colorGradient)" 
              strokeWidth={2}
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.3} />}
            <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 0 15px rgba(115, 102, 255, 0.15)'
              }} 
            />
            <Bar 
              dataKey={dataKey} 
              fill={color} 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.3} />}
            <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 0 15px rgba(115, 102, 255, 0.15)'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2}
              dot={{ stroke: color, strokeWidth: 2, fill: 'white', r: 4 }}
              activeDot={{ stroke: color, strokeWidth: 2, fill: color, r: 6 }}
            />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={cn("border-0 shadow-cuba", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height={height}>
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
