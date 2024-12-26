import { useEffect, useState } from 'react';
import Form from "./Form.jsx";
import Table from "./Table.jsx";

export default function App() {
  const [formUpdateTable, toggleFormUpdateTable] = useState('testvalue1');

  const handleFormUpdate = (data) => {
    toggleFormUpdateTable(data);
  };

  return(<>
    <Table trigger={formUpdateTable}/>
    <Form onDataSend={handleFormUpdate}/>
  </>);
}