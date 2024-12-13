import { useEffect, useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [jTime, setJTime] = useState();
  const [data, setData] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data)) //data => console.log(data)
      .catch(err => console.log(err));
    }, [])

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

    //DATETIME - format: YYYY-MM-DD HH:MI:SS
    const sqlTimeFormat = `${year}-${month + 1}-${date} ${hours}:${minutes}:${seconds}`

    //Add the sqlTimeFormat string to the form
    document.getElementById("jTime").value = sqlTimeFormat;

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setTitle(formJson.jTitle);
    setEntry(formJson.jEntry);
    //setJTime(journalSubmissionTime.toString());
    setJTime(formJson.jTime);
  }

  return (
    <>
      <p>Journal Entries</p>

      <form action="post" onSubmit={handleSubmit}>
        <input type="text" name="jTitle" placeholder="Title here" />
        <input type="text" name="jEntry" placeholder="Type entry here" />
        <input type="hidden" name="jTime" id="jTime" />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>

      <p>{title}</p>
      <p>{entry}</p>
      <p>{jTime}</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PASSWORD</th>
            <th>USERNAME</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map( (d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.password}</td>
              <td>{d.username}</td>
            </tr>
            )
           )}
        </tbody>
      </table>
    </>
  )
}

export default App
