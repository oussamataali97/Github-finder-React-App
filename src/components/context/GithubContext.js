import { createContext,useReducer } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();


export const GithubProvider= ({children})=>{

    const initialState = {
        users:[],
        loading:false,
        user:{},
        repos:[],
    }

    const [state,dispatch]=useReducer(GithubReducer,initialState)

    //search users
    const searchUsers=async(text)=>{
        setLoading()
        const response=await fetch(`http://api.github.com/search/users?q=${text}`)
        const {items}= await response.json()
    
       dispatch({
        type:'GET_USERS',
        payload_users:items
       })
    }

    //get user infos 
    const getUser=async(login)=>{
        setLoading()
        const response=await fetch(`http://api.github.com/users/${login}`)
        if(response.statuts === 404){
            window.location='/notfound'
        }else{
            const data= await response.json()
    
            dispatch({
             type:'GET_USER',
             payload_user:data
            })
        }
        
    }

        //get user Repos : 
        const getUserRepos=async(login)=>{
            setLoading()
            const response=await fetch(`http://api.github.com/users/${login}/repos`)
            if(response.statuts === 404){
                window.location='/notfound'
            }else{
                const data= await response.json()
                console.log(data)
        
                dispatch({
                 type:'GET_REPOS',
                 payload_repos:data
                })
            }
            
        }

    const setLoading=()=>dispatch({
        type:'SET_LOADING'
    })

    const clearUsers=()=>dispatch({
        type:'CLEAR_USERS'
    })


    
    return <GithubContext.Provider value={{
        users:state.users,
        loading:state.loading,
        user:state.user,
        repos:state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos    
    }}>
        {children}
    
    </GithubContext.Provider>
}

export default GithubContext