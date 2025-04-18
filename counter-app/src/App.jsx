import React, { useState } from "react";
import "./App.css"

function App(){
    
    // Make count and setcount to save the state of the count and we will set it to Zero
    const [count, setcount] = useState(0)

    // Make a increment function => This will increase the count by 1 on every click
    const increment = ()=>{
        setcount(count + 1)
    }

    // Make a decrement function => This will decrease the count by 1 on every click
    const decrement = ()=>{
        setcount(count - 1)
    }


    return(
        <div>
            {/* Counter heading */}
            <h1>Counter App</h1>

             {/* counter to show the number increasing and decreasing */}
            <h2>Counter: {count}</h2>
             
             {/* buttons for increment and decrement */}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrememnt</button>
        </div>
    )
}

export default App;