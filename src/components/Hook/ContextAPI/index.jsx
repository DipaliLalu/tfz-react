import { createContext } from "react";

export const DataContext=createContext();
export const LevelContext=createContext(1);

export const DataProvider=({children})=>{
const myname='dipali'
   return <DataContext.Provider value={myname}>{children}</DataContext.Provider>
}


