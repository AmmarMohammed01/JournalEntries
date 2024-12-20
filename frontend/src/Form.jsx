import { useEffect, useState } from 'react';
import './styles/app.css'
import './styles/form.css';

export default function Form() {
  return (<>
    <div className='title'>Journal Entries</div>
    <input className='entry-title' type="text" placeholder='Type title here'/>
    <textarea className='entry-description' />
    <input className='entry-submit' type="submit" />
  </>);
}