import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "./Header"

export default function Home(){
    const counterVal=useSelector((state)=>state.counter);
    //dispatch is coming from redux library
    const dispatch=useDispatch();
    //const [state,setState]=useState(false); wont come, give true
    const [state,setState]=useState(true);
    const add=()=>{
        dispatch({type:"add"})

    }
    const sub=()=>{
        dispatch({type:"sub"})


    }
    const storeMyDetails=()=>{
        dispatch({type:"saveDetails", data:{"name":"sandhya","email":"sandhya488495@gmail.com"}});
    }
    return(
        <div>
            <Header currentPage="Home"> </Header>

            <h1>HOME PAGE</h1>
            

             <h1>{counterVal}</h1>
           {<p className="red">This is a paragraph</p>}
          
            <input type="button" onClick={()=>add()}value="Add"/><br></br><br></br>
            <input type="button" onClick={()=>sub()} value="Sub"/><br></br><br></br>
            <input type="button" onClick={()=>storeMyDetails()}value="storemydetails"/>

           
        </div>
    )

}





/*
{(status)? <p className="red">This is a paragraph</p>:null}

import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

export default function Home(){
    const counterValue = useSelector((state) => state.counter); // to read the value from the store and not update
    const dispatch = useDispatch();
    const  Addition= () => {
        dispatch({
            type:"add"
        })

    }
    const  Subraction = () => {
        dispatch({
            type:"sub"
        })

    }
    return(
        <div>
            <h1> Home page </h1>
            <h1>{counterValue}  </h1><br/>
            <input type="button" onClick={() => Addition()} value="Add"/><br/><br/>

            <input type="button" onClick={() => Subraction()} value="Sub" /><br/>
            <Header></Header>
        </div>
    )
};*/