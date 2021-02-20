import React, { useState } from 'react'
import { addTodo } from '../redux/Action';
import { v1 as uuid } from "uuid";
import {useDispatch} from 'react-redux';

export default function TodoInput() {
    let [name, setName]=useState();
    let dispatch = useDispatch();
    return (
        <div className="row m-2">
            <input type="text" className="col form-control"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
            <button className="btn btn-primary mx-2"
            onClick={()=>{ 
              dispatch(
                addTodo(
                    {
                        id: uuid(),
                        name:name
                    }
                   )
              );
               setName('');
            }}
            >Add</button>
        </div>
    )
}
