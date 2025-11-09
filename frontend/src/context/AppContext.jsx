import {createContext} from "react";
export const Appcontext=createContext();

import {doctors} from '../assets/assets_frontend/assets';


const AppContextProvider=(props)=>{
      const value={
          doctors
      }

      return (
          <Appcontext.Provider value={value}>
               {props.children}
          </Appcontext.Provider>
      )
}

export default AppContextProvider;