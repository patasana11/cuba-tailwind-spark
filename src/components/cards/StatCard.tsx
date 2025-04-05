
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-cuba-primary",
  iconBgColor = "bg-cuba-primary-light"
}) => {
  return (
    <div className="cuba-card dark:bg-[#222533] dark:border dark:border-[#393c46] dark:shadow-none transition-colors duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 dark:text-white">{value}</h3>
          <div className="flex items-center mt-2">
            <span className={cn(
              "text-xs",
              change.positive ? "text-cuba-success" : "text-cuba-danger"
            )}>
              {change.positive ? '↑' : '↓'} {change.value}
            </span>
            <span className="text-xs text-muted-foreground dark:text-gray-400 ml-1.5">vs last month</span>
          </div>
        </div>
        <div className={cn(
          "p-3 rounded-lg",
          iconBgColor,
          iconBgColor.includes("cuba-primary-light") && "dark:bg-opacity-20"
        )}>
          <Icon className={cn("h-5 w-5", iconColor)} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
