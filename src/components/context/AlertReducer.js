const alertReducer=(state,action)=>{
switch (action.type){
    case 'SET_ERROR':
        return  action.payload
    case 'REMOVE_ERROR':
        return null
    default:
        return state;
}
}
export default alertReducer