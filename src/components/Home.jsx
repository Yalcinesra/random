import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {
 
    const [users, setUsers] = useState([]);
const BASE_URL="https://randomuser.me/api/?results=10"
const getRandomUser=async()=>{
  const veri=await axios.get(BASE_URL)
  console.log(veri.data.results);
  setUsers(veri.data.results)
}
useEffect(() => {
  getRandomUser();
}, []);
   
  
    return (
      <div className="users text-center">
      <h1 className='text-center text-warning'>RANDOM USER</h1>
      <button className='btn btn-success' onClick={()=>{ getRandomUser()}}>Getir</button>
        {users.map((user) => (
          <div key={user.login.username} className="users__user container w-50 mb-4">
            <img src={user.picture.large} className="users__avatar" alt="#" />
            <div className="users__meta">
              <h1>{user.name.first}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    
  )
}

export default Home