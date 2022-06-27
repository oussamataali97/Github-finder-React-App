import React from 'react'

function Footer() {
    let year=new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      {year} All Rights Reserved
    </footer>
  )
}

export default Footer
