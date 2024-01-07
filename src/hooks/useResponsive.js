import { useState } from "react"

export const useResponsive = () =>{

    const [responsive, setResponsive] = useState(true)
    
    const checkViewport = (viewPortWidth) => {
        (window.visualViewport.width <= viewPortWidth) ? setResponsive(true) : setResponsive(false)
    }

    return{
        checkViewport,
        responsive,
    }
}