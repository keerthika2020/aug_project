import { NavLink } from "react-router-dom";

export default function Header(props){
    
    return(
        /*
        <div>
        <ul>
                <li><a href="/home" > Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div> */ 
        <div>
            
            <NavLink to="/home">Home</NavLink><br/>
            <NavLink to="/about">About</NavLink><br/>
            <NavLink to="/contact">Contact</NavLink><br/>

            <span> crytop {props.currentPage}</span>
        </div>
        
    )

}