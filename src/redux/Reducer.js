import {COMPLETE_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO} from './Action';
import { todos } from './States';

export let reducer =(state = todos, action)=>{
   
    switch(action.type){
        case COMPLETE_TODO :
        let DONE=[...state];
        DONE.map((el)=>el.id === action.payload? {...el, isDone: !el.isDone}:el)
        return DONE;

        case ADD_TODO :
            let newTodo = [...state];
            newTodo.push(action.payload);
            return newTodo;

        case DELETE_TODO :
            let newTodos = [...state];
            newTodos = newTodos.filter(todo=>todo.id != action.payload);
            return newTodos;
          
        case UPDATE_TODO :
            let NewTodos = [...state];
            let index = -1;
            for(let i=0; i<NewTodos.length; i++){
            index++;
            if (NewTodos[i].id == action.payload.id){
                break;
            }}
            if(index != -1){
                NewTodos[index] = action.payload;
                return NewTodos;
            } 
    }
    return state;
}

