import { useEffect } from 'react';
import './styles/viewentry.css';

export default function ViewEntry({ title='no title', date='no date', entry='empty', viewCount=0}) {
  function showOverlay() {
    document.querySelector('.js-overlay-2').classList.add('show-visibility');
    document.querySelector('.js-overlay-2').classList.remove('hide-visibility');
  }

  function hideOverlay() {
    document.querySelector('.js-overlay-2').classList.add('hide-visibility');
    document.querySelector('.js-overlay-2').classList.remove('show-visibility');
  }

  useEffect(()=>{
    if(viewCount !== 0)
      showOverlay();
  }, [viewCount]);

  return(<>
    <div className='overlay-viewentry js-overlay-2 hide-visibility'>
      <div className='viewentry-content'>
        <div>{date}</div>
        <div>{title}</div>
        <div>{entry}</div>
      </div>
      <button className='viewentry-close-btn' onClick={hideOverlay}>X</button>
    </div>
  </>);
}