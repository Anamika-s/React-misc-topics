import React, { useEffect, useState } from 'react'

export const User = () => {
    const [usersList, setUsers] = useState([]);
    const [searchtext, setText] = useState("");
    useEffect(()=>
    {
        const fetchUsers = async ()=>{
            const resp  = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await resp.json();
            // console.log(json)
            setUsers(json);
            // console.log(usersList);
            
        };
        fetchUsers();
    },[]);


    let renderUsers = usersList.map((user)=>
    {
        return(
            <div key={user.id}>
            <p> <strong> {user.name} </strong></p>
            </div>
        )
    });

    let filteredUsers = usersList.filter(({name})=>
    {
     return name.indexOf(searchtext)>=0;
    })
    .map((user)=>
        {
            return(
                <div key={user.id}>
                <p> <strong> {user.name} </strong></p>
                </div>
            );
        });

  return (
    <div> <h1> Users List  </h1>
    <input type="text" value={searchtext} 
    onChange={(e)=>  setText(e.target.value)}/>
    {/* {renderUsers} */}
    {filteredUsers}
    </div>

  )
}
