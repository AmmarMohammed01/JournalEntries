import { useEffect, useState } from 'react';
import Form from "./Form.jsx";
import Table from "./Table.jsx";
import ViewEntry from './ViewEntry.jsx';

export default function App() {
  const [formUpdateTable, toggleFormUpdateTable] = useState('testvalue1');

  const handleFormUpdate = (data) => {
    toggleFormUpdateTable(data);
    console.log(`Parent sees form: ${data}`)
  };

  const [viewTitle, setViewTitle] = useState('');
  const [viewDate, setViewDate] = useState('');
  const [viewEntry, setViewEntry] = useState('');
  const [viewCount, setViewCount] = useState(0);

  const handleViewEntryUpdate = (tempTitle, tempDate, tempEntry) => {
    setViewTitle(tempTitle);
    setViewDate(tempDate);
    setViewEntry(tempEntry);
    setViewCount(viewCount + 1);
    console.log(`Parent sees view button pressed for ${tempTitle}`);
  }

  return(<>
    <Form onDataSend={handleFormUpdate}/>
    <Table onDataSend={handleViewEntryUpdate} trigger={formUpdateTable}/>
    <ViewEntry title={viewTitle} date={viewDate} entry={viewEntry} viewCount={viewCount}/>
  </>);
}