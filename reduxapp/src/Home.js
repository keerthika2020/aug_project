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
};