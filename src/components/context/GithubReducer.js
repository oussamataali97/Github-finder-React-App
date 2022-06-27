

const githubReducer=(state,action)=>{
switch (action.type){
    case 'GET_USERS':
        return {
            ...state,
            users:action.payload_users,
            loading:false,

        }
    case 'SET_LOADING':
        return{
            ...state,
            loading:true
        }
    
    case 'GET_USER':
        return{
            ...state,
            user:action.payload_user,
            loading:false
        }

    case 'GET_REPOS':
        return{
            ...state,
            repos:action.payload_repos
        }
    case 'CLEAR_USERS':
        return{
            ...state,
            users:[],
        }    
    default:
        return state
}
}

export default githubReducer
