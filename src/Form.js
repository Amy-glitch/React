import { useState } from 'react';
export  default function Form(props) 

{
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
      }



    const [name, setName] = useState("");
    return (
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input  value={name} onChange={(e)=>setName(e.target.value)} type="text" />
          <p> Your name is {name} </p> 
          <input type="submit" />
          </label>
        </form>
      )
}