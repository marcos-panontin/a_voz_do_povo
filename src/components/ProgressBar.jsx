import React from 'react'

function ProgressBar() {
  return (
<div className="progressbar-wrapper">
     <div className="progressbar">
          <div className="side front">
               <div className="bar"></div>
          </div>
          <div className="side back">
               <div className="bar"></div>
          </div>
          <div className="side top">
               <div className="bar"></div>
          </div>
          <div className="side bottom">
               <div className="bar"></div>
          </div>
          <div className="side left"></div>
     </div>
</div>  )
}

export default ProgressBar