import React from "react";

function Container ({children}){ // box ha ek styling property define hoti ha 
    return <div className=" w-full max-w-7xl mx-auto px-4">{children} </div>;   

}

export default Container;