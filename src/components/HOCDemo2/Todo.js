import React, { useEffect, useState } from 'react'

export const Todo = () => {
    const [TodoList, setTodoList] = useState([]);
    const [searchtext, setText] = useState("");
    useEffect(()=>
    {
        const fetchTodoList = async ()=>{
            const resp  = await fetch("https://jsonplaceholder.typicode.com/todos");
            const json = await resp.json();
            // console.log(json)
            setTodoList(json);
            // console.log(usersList);
            
        };
        fetchTodoList();
    },[]);


    let renderTodoList = TodoList.map((todo)=>
    {
        return(
            <div key={todo.id}>
            <p> <strong> {todo.title} </strong></p>
            </div>
        )
    });

    let filteredTodoList = TodoList.filter(({title})=>
    {
     return title.indexOf(searchtext)>=0;
    })
    .map((todo)=>
        {
            return(
                <div key={todo.id}>
                <p> <strong> {todo.title} </strong></p>
                </div>
            );
        });

  return (
    <div> <h1> Todo List  </h1>
    <input type="text" value={searchtext} 
    onChange={(e)=>  setText(e.target.value)}/>
     {/* {renderTodoList}  */}
    {filteredTodoList}
    </div>

  )
}
