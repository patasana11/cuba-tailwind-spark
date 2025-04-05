
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, PieChart, Users, Settings, ShoppingBag, FileText, Mail, Calendar, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href, active }) => (
  <Link
    to={href}
    className={cn(
      "flex items-center space-x-3 px-4 py-3 rounded-md transition-colors",
      active ? "bg-cuba-primary-light text-cuba-primary font-medium" : "text-gray-600 hover:bg-gray-100"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-cuba transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:z-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-cuba-gradient flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="font-bold text-lg cuba-gradient-text">CUBA</span>
          </Link>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="py-4 px-2 space-y-1 overflow-y-auto h-[calc(100%-4rem)]">
          <NavItem
            icon={<LayoutDashboard className="h-5 w-5" />}
            label="Dashboard"
            href="/"
            active={true}
          />
          <NavItem
            icon={<PieChart className="h-5 w-5" />}
            label="Analytics"
            href="/analytics"
          />
          <NavItem
            icon={<Users className="h-5 w-5" />}
            label="Users"
            href="/users"
          />
          <NavItem
            icon={<ShoppingBag className="h-5 w-5" />}
            label="Products"
            href="/products"
          />
          <NavItem
            icon={<FileText className="h-5 w-5" />}
            label="Documents"
            href="/documents"
          />
          <NavItem
            icon={<Mail className="h-5 w-5" />}
            label="Messages"
            href="/messages"
          />
          <NavItem
            icon={<Calendar className="h-5 w-5" />}
            label="Calendar"
            href="/calendar"
          />
          <NavItem
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            href="/settings"
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
