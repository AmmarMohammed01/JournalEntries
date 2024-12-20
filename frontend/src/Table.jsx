import { useEffect, useState } from 'react';
import './styles/table.css';

export default function Table() {
  return (<>
    <table className='entry-table'>
      <thead>
        <tr>
          <th className='entry-table-date-header'>Date</th>
          <th className='entry-table-title-header'>Title</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td className='entry-table-date'>
            12/20/2024
          </td>
          <td className='entry-table-title'>
            Example Entry 1
          </td>
        </tr>

        <tr>
          <td className='entry-table-date'>
            12/20/2024
          </td>
          <td className='entry-table-title'>
            Example Entry 2
          </td>
        </tr>

        <tr>
          <td className='entry-table-date'>
            12/20/2024
          </td>
          <td className='entry-table-title'>
            Example Entry 3
          </td>
        </tr>
      </tbody>
    </table>
  </>);
}