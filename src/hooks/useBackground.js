import { useState } from "react";

export const useBackground = () => {

    const [background, setBackground] = useState('')

    // console.log(background);

    return{
        background,
        setBackground
    }
}

