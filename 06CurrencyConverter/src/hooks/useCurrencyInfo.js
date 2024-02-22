//custom hooks design 
import { useEffect,useState } from "react";

function useCurrencyInfo (currency){
    const [data,setData]=useState({}) // empty obj daal dete haa 
    useEffect(()=>{
        let url =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url).
        then((res)=>res.json()).
        then((res)=>setData(res[currency]))  // obj ko access krne ke liye dot jaruri nhi ha [] sqre bracket se bhi access krr skte ha
    },[currency])
    console.log(data)
    return data

}

export default useCurrencyInfo;




