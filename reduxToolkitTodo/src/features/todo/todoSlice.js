import {createSlice ,nanoid} from '@reduxjs/toolkit'

const initialState ={
    todos:[{
        id:1,
        text:"Hello World"
    }]
}


export const todoSlice =createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },   //state - abhi us state me jo values ha unki access degi , action ,state ka hamesa access rhe ga
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
       

    }

})

export const {addTodo,removeTodo} =todoSlice.actions
//indivisual functionalty export kri ha components me kam aaya ge 
export default todoSlice.reducer
// store ko sara reducers ka list chiye