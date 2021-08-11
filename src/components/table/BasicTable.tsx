
import * as React from 'react';
import {useTable} from 'react-table';
import MockData from '../MockData.json';
import {COLUMNS} from '../columns';
import { useMemo } from 'react';
import 'node_modules/.bin/tsc';
import './table.css';

export function Table () {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MockData, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns, data
      })
    
    return (
        <table className = "table" {...getTableProps()}> 
          <thead>
              {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
                <tr {...headerGroup.getHeaderGroupProps()}> 
                    {headerGroup.headers.map((column: { getHeaderProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement>; render: (arg0: string) => React.ReactNode; }) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps}>
                {rows.map((row: { getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: any[]; }) => {
                    prepareRow(row)
                     return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>   
                            })}  
                        <button className = "aprv">Approve</button>
                        <button className= "rjct">Reject</button>
                        </tr>
                     )     
                 })}
            </tbody>
        </table>
    )
}

export default Table 