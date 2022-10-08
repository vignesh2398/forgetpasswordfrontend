import React, { useState } from 'react'
import { url1 } from '../App';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Create = () => {
    const navigate=useNavigate();
    const [loginvalue,setvalue]=useState({
        email:'',
        name:'',
        password:''
    })

    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setvalue({...loginvalue,[name]:value})
       }
     
       const sumbit=async(e)=>{
        e.preventDefault();
try {
    console.log(loginvalue)
  
    let res= await axios.post(`${url1}/users/create`,loginvalue)
    if(res.data.statusCode==200)
    {
    
        alert("account created")
    navigate("/")
    }
    else{
      
     
      console.log(res.data.message)
        
    }
} catch (error) {
    alert(error)
}
      
        }

  return (
    <div className='card container col-4'><form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" name="email" onChange={handlechange} value={loginvalue.email} aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="email" class="form-control" name="name" onChange={handlechange} value={loginvalue.name} aria-describedby="emailHelp" placeholder="Enter name"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" name="password" onChange={handlechange} value={loginvalue.password} id="exampleInputPassword1" placeholder="Password"/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={sumbit}>Submit</button>
  </form></div>
  )
}
