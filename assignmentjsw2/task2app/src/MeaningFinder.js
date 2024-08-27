import React, { useState } from 'react';

export default function MeaningFinder() {
    const [input, setInput] = useState('');

    const getinput = async () => {
            let response = await fetch(`https://api.agify.io/?name=${input}`, {method: "GET",});
            let userData = await response.json();
            console.log(input);
            console.log(userData);  
            
    }

    return (
        <div>
            <h1>Retrieve values and print API response</h1><br /><br />
            <input  type="text"  placeholder="Enter a name" value={input} onChange={(e) => setInput(e.target.value)}/><br /><br />
            <button onClick={getinput}>SUBMIT</button>
        </div>
    )
};
