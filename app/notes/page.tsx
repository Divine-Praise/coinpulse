"use client"
import React, { useState } from 'react'

// React Hooks
// useState() -> it's used for state/data management.
// Whenever you want to create a variable or data that changes, use the useState() hook.
// Inside the empty array we have 2 things inside [first, second]
// first is the name you want to give that variable
// second is the name of a function you want to use and update the variable(first)


const Notes = () => {
    const [name, setName] = useState("Divine")

    function changeName() {
        setName("Ukari")//name="Ukari"
    }
  return (
    <div>
        <button onClick={changeName} className='bg-white p-2 rounded cursor-pointer text-black font-sans'>Click Me</button>
        <p>{name}</p>
    </div>
  )
}

export default Notes
