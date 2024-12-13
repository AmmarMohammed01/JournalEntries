import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [jTime, setJTime] = useState();

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const journalSubmissionTime = new Date();
    const [year, month, date, hours, minutes, seconds] = [
      journalSubmissionTime.getFullYear(), //2024
      journalSubmissionTime.getMonth(), //from 0 to 11, Jan to Dec
      journalSubmissionTime.getDate(), //1 to 31; getDay means Mon Tue Wed...
      journalSubmissionTime.getHours(), //7pm is 19
      journalSubmissionTime.getMinutes(), //from 0 to 59
      journalSubmissionTime.getSeconds(),
    ];
    console.log(year, month, date, hours, minutes, seconds);  
    //console.log(journalSubmissionTime.toISOString());

    //DATETIME - format: YYYY-MM-DD HH:MI:SS
    const sqlTimeFormat = `${year}-${month + 1}-${date} ${hours}:${minutes}:${seconds}`
    
    console.log(sqlTimeFormat);

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setTitle(formJson.jTitle);
    setEntry(formJson.jEntry);
    setJTime(journalSubmissionTime.toString());
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
      <p>{jTime}</p>
    </>
  )
}

export default App
