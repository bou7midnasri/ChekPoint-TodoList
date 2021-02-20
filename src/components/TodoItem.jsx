import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo, updateTodo } from '../redux/Action';
import { useState } from 'react';


export default function TodoItem({todo}) {
    const [editable, setEditable] = useState(false)
    const [name, setname] = useState(todo.name)
    const [isDone, setDone] = useState('false')

    let dispatch =useDispatch();
    return (
        <div>
            <div className='row mx-2 align-items-center'>
           <div>{todo.id.length >1 ? todo.id[2] : todo.id}</div>
           <div className="col">
               {editable ? 
               <input type='text' className="from-control" value={name}
               onChange={
                   (e)=>setname(e.target.value)
               }/>
               : <h4>{todo.name}</h4>}
           </div>
           <button type="button" class="btn btn-secondary"
           onClick={()=>dispatch(completeTodo(todo.id))}
           >sDone</button>
           <button className="btn btn-primary m-2"
           onClick={()=>{
               if(editable){
                   dispatch(updateTodo (
                       {
                           ...todo,
                           name:name
                       }
                   )
                    
                    );
                   setname(todo.name);
               }
               setEditable(!editable);
           }

           }>
               {editable ? "Update" : "Edit"}
           </button>
           <button className="btn btn-danger m-2"
           onClick={()=>dispatch(deleteTodo(todo.id))}
           >Dlete</button>
           <p style={{margin: "0px",}} className={todo.isDone?"decoration":""}></p>
            
            </div>
        </div>
    )
}
