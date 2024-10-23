import React, { useEffect } from 'react';
import './scrollbar.css';

function Scrollbar() {
  useEffect(() => {
    const updateScrollbar = () => {
      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const scroll = window.scrollY;
      const process = (scroll / fullHeight) * 100;

      document.getElementById('bar').style.width = process + '%';
    };

    window.addEventListener('scroll', updateScrollbar);
    return ()=>{
      window.removeEventListener('scroll',updateScrollbar)
    }
  }, []);

  return (
    <div className='scrollbar' id='bar'></div>
  );
}

export default Scrollbar;
