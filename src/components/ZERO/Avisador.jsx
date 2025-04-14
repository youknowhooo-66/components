import { useState } from "react";
import React from "react";

function Toggler(){
    const [aviso, setAviso] = useState(false);
    
    const Toggler = () => {
        return (
            <div>
                <h1>Bienvenido</h1>
                <p>Que bueno tenerte acá</p>
            </div>
        )
    }

    const handleClick = () => {
        setAviso(!aviso);
    }
    
 return(
    <>
    <br/>
    { aviso && <Toggler /> }
    <button onClick={handleClick}>click here</button>
    </>
    )
}
 export default Toggler;