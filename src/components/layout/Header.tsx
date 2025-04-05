
import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-white shadow-cuba-sm py-3 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="mr-2 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative max-w-xs hidden sm:block">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 w-[200px] bg-muted border-none focus-visible:ring-1 focus-visible:ring-cuba-primary"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-cuba-secondary text-white text-[10px] flex items-center justify-center">3</span>
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-cuba-gradient flex items-center justify-center text-white">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
