import React from 'react'
import {useContext} from 'react'
import GithubContext from '../context/GithubContext'
import Spinner from '../shared/Spinner'
import UserItem from './UserItem'


function UserList() {
    
    const {  users,loading}=useContext(GithubContext)

  


  return (
    
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  ">
        
        {loading && <div className='text-center'><Spinner/></div>}
      {users.map(user=>(
       <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList
