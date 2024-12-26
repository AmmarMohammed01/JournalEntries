import { useEffect, useState } from 'react';
import './styles/table.css';

export default function Table({trigger = 'testvalue2'}) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:8081/entries')
      .then(res => res.json())
      .then(data => setData(data)) //data => console.log(data)
      .catch(err => console.log(err));
    }, []);

  useEffect(
    () => {
      fetch('http://localhost:8081/entries')
      .then(res => res.json())
      .then(data => setData(data)) //data => console.log(data)
      .catch(err => console.log(err));
    }, [trigger]
  );

  function deleteRow(id) {
    const form = { jId: id}
    console.log(JSON.stringify(form));

    fetch('http://localhost:8081/delete', { 
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), }
    );
    toggleUpdateTable(updateTable+1);
  }

  return (<>
    <table className='entry-table'>
      <thead>
        <tr>
          <th className='entry-table-date-header'>Date</th>
          <th className='entry-table-title-header'>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map( (entry, i) => (
          <tr key={i}>
            <td className='entry-table-date'>
              {entry.Date}
            </td>
            <td className='entry-table-title'>
              {entry.Title}
            </td>
          </tr>
        ) )}
      </tbody>
    </table>
  </>);
}