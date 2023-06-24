import React, { useState } from "react";
import "./Userunput.css";

const Userinput=({addUser})=>{
 
        const [input, setInput] = useState({
            name: "",
            email: "",
            phone: "",
            image: "",
            address: ""
        })
    


    const handleclick = (e) => {
        const { name, value } = e.target;


        setInput((currValue) => {
          return {
             ...currValue,
             [name]:value
          };
        

        })
    }
 const handleadd=(e)=>{
    e.preventDefault();
    addUser(input);
    setInput({
        name: "",
        email: "",
        phone: "",
        image: "",
        address: ""

    })

 };



    return (
        <form className="inputForm">
            <input type="text" name="name" placeholder="Name" onChange={handleclick} value={input.name}/> <br />
            <input type="email" name="email" placeholder="Email" onChange={handleclick} value={input.email}/><br />
            <input type="text" name="phone" placeholder="Phone" onChange={handleclick} value={input.phone}/><br />
            <input type="url" name="image" placeholder="ImageUrl" onChange={handleclick} value={input.image}/><br />
            <textarea rows={4} name="address" placeholder="Address" onChange={handleclick} value={input.address}/><br />

            <button onClick={handleadd}>Add User</button>


        </form>
    ) };


export default Userinput