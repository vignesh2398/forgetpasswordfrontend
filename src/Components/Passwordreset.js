import React, { useState } from 'react'
import axios from 'axios'
import { url1 } from '../App'
import { useNavigate } from 'react-router-dom'
export const Passwordreset = () => {
    var url=`${url1}/users/forget`
    const navigate = useNavigate();    
    const[email,setemail]=useState("")
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setemail((prevState)=>({
           ...prevState,
           [name]:value
        }))
       }


       const onsumbit=async(e)=>{
        e.preventDefault();
        try {

        console.log(email)
          let res=await axios.post(url,email)
   
          if(res.data.success)
          {
              alert("PLease check yor mail box")
             
          }
          else
          {
              alert(res.data.msg)
      
             
          }
        } catch (error) {
          console.log("fill all details")
        }
      }
  return (
    <>
    <div class="card container col-3 my-5 " >
 
    <div class="container">
  <form class="px-4 py-3">
    <div class="form-group">
        <h2>Reset Password</h2>
      <label>Email address</label>
      <input type="email" class="form-control" onChange={handlechange}
       name="email" placeholder="email@example.com"/>
    </div>


    <button type="submit" class="btn btn-primary" onClick={onsumbit} >Reset</button>
  </form>
  
</div>
</div>

    </>
  )
}