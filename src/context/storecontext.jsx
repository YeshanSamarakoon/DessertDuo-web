import { createContext } from 'react';
import { food_list } from "../assets/assets"


export const storecontext = createContext(null)

const StorecontextProvider = (props) => {



    const contextValue ={
        food_list
    }
    
    return (

        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default StorecontextProvider;
