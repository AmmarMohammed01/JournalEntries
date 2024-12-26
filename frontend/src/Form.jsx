import { useEffect, useState } from 'react';
import './styles/app.css'
import './styles/form.css';

export default function Form() {
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
  <div className='overlay js-overlay'>
    <div className='form-content'>

      <div className='title'>New Entry</div>
      <input className='entry-title' type="text" placeholder='Type title here'/>
      <textarea className='entry-description' />
      <input className='entry-submit' type="submit" />

    </div>

    <button className='form-close-btn' 
    onClick={hideForm}
    >X</button>
  </div>
  </>);
}