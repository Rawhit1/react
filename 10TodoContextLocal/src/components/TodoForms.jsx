import React, { useState } from 'react'
//import {useTodo} from './context/index'
 import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo , setTodo] = useState("");
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return;

        //addTodo function from context
        // this is writeen in normal as 
        // addTodo({id: Date.now() , todo: todo, completed: false });
        // but as id is given there so we dont need to pass it here
        // so we can just pass the todo and completed status
        // also as key is same as value we can just pass todo
        // so we can just pass todo
        addTodo({ todo, completed: false});
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10
                 rounded-l-lg px-3 outline-none duration-150
                  bg-white/20 py-1.5"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg 
            px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


