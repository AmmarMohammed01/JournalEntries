import './styles/form.css';

export default function Form({ onDataSend }) {
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

    fetch('http://localhost:8081/add', { 
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson), }
    );
    // toggleUpdateTable(updateTable+1);
    onDataSend(sqlTimeFormat);
  }

  function showForm() {
    document.querySelector('.js-overlay').classList.add('show-visibility');
    document.querySelector('.js-overlay').classList.remove('hide-visibility');
  }

  function hideForm() {
    document.querySelector('.js-overlay').classList.add('hide-visibility');
    document.querySelector('.js-overlay').classList.remove('show-visibility');
  }

  return (<>
  <div className=''>
    <button onClick={showForm}>Add Entry</button>
  </div>
  <div className='overlay js-overlay hide-visibility'>
    <div className='form-content'>

      <div className='title'>New Entry</div>

      <form action="post" onSubmit={handleSubmit}>
        <input className='entry-title' type="text" placeholder='Type title here' name='jTitle'/>
        <textarea className='entry-description' placeholder='Type entry here' name='jEntry'/>
        <input type="hidden" name="jTime" id="jTime" />
        <input className='entry-submit' type="reset" />
        <input className='entry-submit' type="submit" />
      </form>
      

    </div>

    <button className='form-close-btn' onClick={hideForm}>X</button>
  </div>
  </>);
}