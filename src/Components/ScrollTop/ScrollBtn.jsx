import React from 'react'
import './ScrollBtn.css'
const ScrollBtn = () => {

    window.onscroll = function() {
        scrollFunction();
      };
      
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
          document.getElementById("scrollToTopBtn").style.display = "none";
        }
      }
      
      function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

  return (
    <div className="scrollBtn" id='scrollToTopBtn' onClick={scrollToTop}>
        <p>&and;</p>
    </div>
  )
}

export default ScrollBtn