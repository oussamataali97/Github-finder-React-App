import React from 'react'
import AlertContext from '../context/AlertContext'
import {useContext} from 'react'



function Alert() {
    const {alert}=useContext(AlertContext)
  return (
    alert !== null && (
        <div>
            {alert.type === 'error' && (
                <div className="alert alert-error shadow-lg w-60 my-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" idth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{alert.msg}</span>
                </div> 
              </div>
            )}
        </div>
    )
  )
}

export default Alert
