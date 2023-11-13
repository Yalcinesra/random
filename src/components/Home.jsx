import React, { useEffect, useState } from 'react'
import axios from "axios";

const Home = () => {
 
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios("https://randomuser.me/api/?results=10")
        .then((response) =>
          response.data.results.map((user) => ({
            name: `${user.name.first} ${user.name.last}`,
            username: `${user.login.username}`,
            email: `${user.email}`,
            image: `${user.picture.large}`,
          }))
        )
        .then((data) => {
          setUsers(data);
        });
    }, []);
  
    return (
      <div className="users text-center">
      <h1 className='text-center text-warning'>RANDOM USER</h1>
      <button className='btn btn-success' onClick={()=>{ window.location.reload()}}>Getir</button>
        {users.map((user) => (
          <div key={user.username} className="users__user container w-50 mb-4">
            <img src={user.image} className="users__avatar" alt="#" />
            <div className="users__meta">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    
  )
}

export default Home