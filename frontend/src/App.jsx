import { useState } from 'react'

function App() {

  return (
    <>
      <p>Journal Entries</p>

      <form action="">
        <input type="text" placeholder='Enter title here...'/>
        <input type="text" placeholder='Type to start journal entry...' />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
