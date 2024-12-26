import { useEffect, useState } from 'react';
import './styles/table.css';

export default function Table() {
  let entries = []
  for(let i = 0; i < 3; i++ ) entries[i] = {date: '12/20/2024', title: `Example Entry ${i+1}`};
  console.log(entries);

  return (<>
    <table className='entry-table'>
      <thead>
        <tr>
          <th className='entry-table-date-header'>Date</th>
          <th className='entry-table-title-header'>Title</th>
        </tr>
      </thead>
      <tbody>
        {entries.map( (entry, i) => (
          <tr key={i}>
            <td className='entry-table-date'>
              {entry.date}
            </td>
            <td className='entry-table-title'>
              {entry.title}
            </td>
          </tr>
        ) )}
      </tbody>
    </table>
  </>);
}