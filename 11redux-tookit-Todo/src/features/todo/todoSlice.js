import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // with addtodo we get two things {state , action}
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id
        !== action.payload )
        },
        updateTodo: (state, action) => {
              const {id , newtext} = action.payload;
             const todo= state.todos.find(
                t => t.id === id);
                if(todo){
                    todo.text=newtext;
                }
                // dont know if corect 
        //    updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload.id ?{ ...todo,text : action.payload.text }: todo.text);
        // } 

        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer