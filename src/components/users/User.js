import React,{useContext,useEffect} from 'react'
import GithubContext from '../context/GithubContext'
import {useParams,Link} from 'react-router-dom'
import Spinner from '../shared/Spinner'
import {FaUsers,FaUserFriends,FaCodepen,FaEye,FaStar,FaUtensils} from 'react-icons/fa'

function User() {
    const {getUser,user,loading,getUserRepos,repos}=useContext(GithubContext)
    const params=useParams();
    useEffect(()=>{
        getUser(params.login)
        getUserRepos(params.login)
    },[])
    if(loading){
        return <Spinner/>
    }

  return (
    <>
    <div className="w-full mx-auto lg:w-10/12" >
    
        <div className="mb-0">
        <Link to='/' className="btn btn-ghost mb-8">
            Back to Search
        </Link>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 mb-0 md:gap-8 ">
           <div className="custom-card-img mb-3 ">
            <div className="rounded-lg card image-full shadow-xl">
            <figure>
                <img src={user.avatar_url} alt="" />
            </figure>
            <div className="card-body justify-end">
                <h2 className="card-title text-white xs:text-green">{user.name}</h2>
                <h5 className='text-white'>{user.login}</h5>
            </div>
            </div>
         
            </div> 

            <div className="col-span-2">
                <div className="mx-6">
                    <h1 className="card-title text-3xl">{user.name}
                    <div className="ml-2 badge badge-info">{user.type}</div>
                    {user.hireable &&  <div className="ml-1 badge badge-success">Hireable</div> }
                    </h1>
                    <p className='mt-4'>{user.bio}</p>
                    <div className="card-actions my-4">
                    <a href={user.html_url} rel="noreferrer" target="blank" className='btn btn-outline'>Visite Profile</a>
                    </div>
                </div>
                <div className="w-full rounded-lg stats bg-base-100 shadow-md my-0  mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                    {user.location && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Location
                            </div>
                            <div className="text-lg stat-value"> {user.location} </div>
                        </div>
                    )}

                    {user.blog && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                blog
                            </div>
                            <div className="text-lg stat-value ">
                                <a href={`https://${user.blog}`} target="blank"> {user.blog}</a>
                                 </div>
                        </div>
                    )}
                    {user.twitter_username && (
                        <div className="stat">
                            <div className="stat-title text-md">
                                Twitter
                            </div>
                            <div className="text-lg stat-value"> {user.twitter_username} </div>
                        </div>
                    )}
                    </div>
                   
                </div>

             

            </div>
            
        </div>

    {/* seconde stats */} 
        <div className="w-full rounded-lg bg-base-200 shadow-md stats mt-8">
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="stat">
<div className="stat-figure text-green-300">
<FaUsers className='text-3xl md:text-5xl'/>
</div>
<div className="stat-title">Followers :</div>
<div className="stat-value text-white"> {user.followers} </div>
</div>

<div className="stat">
<div className="stat-figure text-green-300">
<FaUserFriends className='text-3xl md:text-5xl'/>
</div>
<div className="stat-title">Following</div>
<div className="stat-value text-white">{user.following}</div>
</div>

<div className="stat">
<div className="stat-figure text-green-300">
<FaCodepen className='text-3xl md:text-5xl'/>
</div>
<div className="stat-title">Public Repos</div>
<div className="stat-value text-white">{user.public_repos}</div>
</div>

</div>


</div>
<h2 className='text-3xl my-8 text-center'>Latest Repository</h2>
<div className="grid grid-cols-1 md:grid-cols-3 bg-dark-200 gap-4">
    
    {repos.map(repo=>(
        <div className="card" key={repo.id}>
            <div className="card bg-base-300 hover:bg-base-200 shadow-xl rounded-lg">
  <div className="card-body">
    <h2 className="card-title my-2 "> {repo.name}</h2>
    <div className='pb-8'>
    <div className="badge mr-2"><FaEye className='mr-2'/>{repo.watchers_count}</div>
<div className="badge badge-success  mr-2"><FaStar className='mr-2'/>{repo.stargazers_count}</div>
<div className="badge badge-secondary"><FaUtensils className='mr-2'/>{repo.forks}</div>

    </div>

    <div className="card-actions justify-center">
        <a href={`${repo.html_url}`} target="blank" className='btn btn-primary w-full'>View Repos</a>
        </div>
  </div>
</div>
        </div>
    ))}
</div>
</div>
    </>
  )
}

export default User
