
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { cn } from '@/lib/utils';

interface AgGridWrapperProps {
  rowData: any[];
  columnDefs: any[];
  className?: string;
  defaultColDef?: any;
  paginationPageSize?: number;
  [key: string]: any;
}

export const AgGridWrapper: React.FC<AgGridWrapperProps> = ({
  rowData,
  columnDefs,
  className,
  defaultColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
    resizable: true,
  },
  paginationPageSize = 10,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'ag-theme-cuba w-full h-[500px] rounded-lg overflow-hidden border border-gray-200 dark:border-[#393c46]',
        className
      )}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={paginationPageSize}
        animateRows={true}
        enableCellTextSelection={true}
        {...props}
      />
    </div>
  );
};

export default AgGridWrapper;
