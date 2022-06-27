import { createContext,useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext =createContext();


export const AlertProvider =({children})=>{
    const initialState =null
    const [state,dispatch]=useReducer(alertReducer,initialState)

    //set Alert

    const setAlert=(msg,type)=>{
        dispatch({
            type:'SET_ERROR',
            payload:{msg, type}
        })
    }

    setTimeout(()=>dispatch({
        type:'REMOVE_ERROR'

    }),3000)

    return (<AlertContext.Provider value={{alert:state,setAlert}}>
        {children}
    </AlertContext.Provider>
    )
}

export default AlertContext