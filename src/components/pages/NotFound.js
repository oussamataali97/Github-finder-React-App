import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl '>Sorry.<span className='text-gray-300'>You are accessing an invalid page. </span>
</h1>
<Link to="/" className='btn mt-5 btn-primary btn-lg'><FaHome className='mr-2'/>Back Home</Link>
    </div>
  )
}

export default NotFound
