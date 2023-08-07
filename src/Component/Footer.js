import React from 'react'

export default function Footer() {
  return (
    <div className=' footer_section'>
      <div className='row'>      
          <p style={{color:"black"}}>
          <img style={{width:"40px",    borderRadius:"25%"}} src={"assets/images/hph-logo.png"} alt='hph image' />

           Copyright &copy; 2023<span id="displayYear"></span>/Designed by
            <a style={{color:"orange"}} href="https://hphsolution.com/ "> HPH Technology</a>
          </p>
        </div>
      
    </div>
  )
}
//testing