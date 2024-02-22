import React, { useState } from "react";
import { useTodo } from "../context";


function TodoForm() {
    const [todo,setTodo]=useState("") // indivisual todo ke liye

    const {addTodo} =useTodo()
    const add = (e)=>{
        e.preventDefault()
        if(!todo) return

        addTodo({todo,completed:false}) // field ka name same ha like  todo:todo to usko only todo bhi likh skte ha
        setTodo("")  // field ko empty krr do
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                value={todo}  // wireup krr do input ko state ke sath connect 
                onChange={(e)=>setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

