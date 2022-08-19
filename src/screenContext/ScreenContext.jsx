import react, { createContext, useEffect, useState } from "react"

export const ScreenContext= createContext()


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export const ScreenProvider = ({children})=>{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(()=>{
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
          
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
            
            
       },[])
    
    return (
        <ScreenContext.Provider value={{windowDimensions}}>{children}</ScreenContext.Provider>
    )
}