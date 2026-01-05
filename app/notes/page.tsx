"use client"
import React, { use, useState } from 'react'

// React Hooks
// useState() -> it's used for state/data management.
// Whenever you want to create a variable or data that changes, use the useState() hook.
// Inside the empty array we have 2 things inside [first, second]
// first is the name you want to give that variable
// second is the name of a function you want to use and update the variable(first)
// Ternary Operator


const Notes = () => {
    const [name, setName] = useState("Divine")
    const [toggleMode, setToggleMode] = useState(true)
    const [message, setMessage] = useState("Hello World")

    function changeMessage(){
      setMessage("Men!!! React is sweet but tough and i would like to go deeper and become a pro")
      console.log(message)
    }

    function changeToggle(){
      setToggleMode(!toggleMode)
      console.log(toggleMode)
    }

    function changeName() {
        setName("Ukari")//name="Ukari"
    }
  return (
    <div>
        <button onClick={changeName} className='bg-white p-2 rounded cursor-pointer text-black font-sans'>Click Me</button>
        <p>{name}</p>

        <div>
          <button onClick={changeToggle} className={`px-7 py-2 cursor-pointer rounded text-white font-sans ${toggleMode ? 'bg-purple-500' : 'bg-blue-500'}`}>Toggle Mode</button>
        </div>
        <div>
          <button onClick={changeMessage} className='bg-white p-2 rounded cursor-pointer text-black font-sans mt-4'>What i want</button>
        </div>
        <p className='text-lg text-white font-sans'>{message}</p>

        <div className='w-full shadow inset-shadow-purple-400 flex justify-center gap-3 p-4'>
          <form action="" className='w-1/2  p-4 space-y-4 bg-gray-900 rounded'>
            <h3 className='text-xl font-sans text-purple-400'>TESTING TAILWIND DESIGN SKILL</h3>
            <div className='flex flex-col p-0 m-0'>
            <label htmlFor="name" className="block mb-2 text-white p-0">Name</label>
            <input type="text" id='name' placeholder='Enter your Name' className='w-full outline-0 text-white py-3 pl-3 bg-gray-500 rounded'/>
            </div>

            <div className='flex flex-col p-0 m-0'>
            <label htmlFor="email" className="block mb-2 text-white p-0">Email</label>
            <input type="text" id='email' placeholder='Enter your Email' className='w-full outline-0 text-white py-3 pl-3 bg-gray-500 rounded'/>
            </div>

            <div className='flex flex-col p-0 m-0'>
            <label htmlFor="phone" className="block mb-2 text-white p-0">Phone</label>
            <input type="text" id='phone' placeholder='Enter your Phone' className='w-full outline-0 text-white py-3 pl-3 bg-gray-500 rounded'/>
            </div>
          </form>
          <div className='w-1/2 border bg-purple-500 mt-4 p-4 rounded flex justify-center items-center'>
            <h3 className='text-5xl text-center font-sans'>I think i find Next Js And Tailwind cool😉</h3>
          </div>
        </div>
    </div>
  )
}

export default Notes
