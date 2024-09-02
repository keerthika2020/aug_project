import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
export default function About(){
    const counterVal=useSelector((state)=>state.counter);
    const myDetails=useSelector((state)=>state.myDetails);
    //dispatch is coming from redux library
    const dispatch=useDispatch();
    const add=()=>{
        dispatch({type:"add"})

    }
    const sub=()=>{
        dispatch({type:"sub"})


    }
    return(
        <div>
            <h1>ABOUT PAGE</h1>
            <h1>{counterVal}</h1>
            <h1>{myDetails.name}</h1>
            <h1>{myDetails.email}</h1>
          
          <input type="button" onClick={()=>add()}value="Add"/><br></br><br></br>
          <input type="button" onClick={()=>sub()} value="Sub"/>
            <Header/>
        </div>
    )

}