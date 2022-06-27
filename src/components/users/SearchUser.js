import React, {useState,useContext} from 'react'
import GithubContext from '../context/GithubContext';
import AlertContext from '../context/AlertContext';

function SearchUser() {
    const {setAlert}=useContext(AlertContext)
    const {users,searchUsers,clearUsers}=useContext(GithubContext)
    const [text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(text===''){
            setAlert('Please enter something','error')
        }else{
            searchUsers(text)
           setText('') 
        }
    }

    const handleClear=()=>{
        clearUsers();
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" onChange={handleChange} value={text} className="w-full pr-40 bg-gray-200 input input-lg text-black" />
                        <button type="submit"  className="absolute btn btn-lg top-0 right-0 rounded-l-none w-36">GO</button>
                    </div>
                </div>
            </form>
        </div>

        <div>
            {users.length>0 && (
        <button className="btn btn-ghost btn-lg rounded" onClick={handleClear}>Clear</button>

            )}
        </div>
      
    </div>
  )
}

export default SearchUser
