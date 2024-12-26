import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Form from './form.jsx'
import Table from './Table.jsx'

createRoot(document.getElementById('root')).render(
  <>
  {/* <StrictMode> */}
    {/* <App /> */}
    <Table/>
    <Form/>
  {/* </StrictMode>, */}
  </>
)
