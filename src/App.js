import React, { useState } from "react";
import Userinput from "./components/Userinput.js";
import "./App.css"

function App() {

  const [users,setUsers]=useState([]);

  const addUser=(userData)=>{
    setUsers((currValue)=>[...currValue,userData]);

  }
  console.log(users);
  return (
    <div>
      <h1>User Entri System</h1>
      <Userinput addUser={addUser}/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Address</th>
           
          </tr>
        </thead>
        <tbody>
          {
            users.map((users,index)=>{
              return( <tr key={index}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
               
                <td>
                <img src={users.image} />
                </td>
                <td>{users.address}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App