import React from 'react'

export default function Footer() {
  return (
    <div className=' footer_section'>
      <div className='row'>      
          <p>
          <img style={{width:"40px",    borderRadius:"25%"}} src={"assets/images/hph-logo.png"} alt='hph image' />

            &copy; <span id="displayYear"></span><span> ALL RIGHT RESERVED BY</span>
            <a href=""> HPH TECHNOLOGIES</a>
          </p>
        </div>
     
    </div>
  )
}
