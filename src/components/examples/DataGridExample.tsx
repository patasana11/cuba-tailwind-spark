
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AgGridWrapper from '@/components/ui/ag-grid';

const DataGridExample = () => {
  const columnDefs = useMemo(() => [
    { field: 'name', headerName: 'Name', minWidth: 200 },
    { field: 'position', headerName: 'Position' },
    { field: 'office', headerName: 'Office' },
    { field: 'age', headerName: 'Age', type: 'numericColumn' },
    { field: 'startDate', headerName: 'Start Date' },
    { field: 'salary', headerName: 'Salary', type: 'numericColumn' },
  ], []);

  const rowData = useMemo(() => [
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: '$433,060' },
    { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/02', salary: '$372,000' },
    { name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, startDate: '2012/08/06', salary: '$137,500' },
    { name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, startDate: '2010/10/14', salary: '$327,900' },
    { name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, startDate: '2009/09/15', salary: '$205,500' },
    { name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, startDate: '2008/12/13', salary: '$103,600' },
  ], []);

  return (
    <Card className="dark:bg-[#222533] dark:border-[#393c46] dark:shadow-none transition-colors duration-300">
      <CardHeader>
        <CardTitle className="dark:text-white">Employees Data</CardTitle>
      </CardHeader>
      <CardContent>
        <AgGridWrapper 
          rowData={rowData} 
          columnDefs={columnDefs} 
          className="h-[400px]" 
        />
      </CardContent>
    </Card>
  );
};

export default DataGridExample;
