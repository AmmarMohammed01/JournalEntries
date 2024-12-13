import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setTitle(formJson.jTitle);
    setEntry(formJson.jEntry);
  }

  return (
    <>
      <p>Journal Entries</p>

      <form action="post" onSubmit={handleSubmit}>
        <input type="text" name="jTitle" placeholder="Title here" />
        <input type="text" name="jEntry" placeholder="Type entry here" />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>

      <p>{title}</p>
      <p>{entry}</p>
    </>
  )
}

export default App
