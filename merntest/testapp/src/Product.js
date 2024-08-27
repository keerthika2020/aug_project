import React from 'react';
export default function Product(){
    const getValue = async () => {
        let res= await fetch("https://api.restful-api.dev/objects", {method: "GET",});
        let data = await res.json();
        console.log(data);  
        
}
    return(
        <div>
            <button onClick={getValue}> GET NAMES</button>
        </div>
    );
}
