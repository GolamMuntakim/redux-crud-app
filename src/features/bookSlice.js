import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books : [
        {id: 1,title:'X', author:'siam', price: 100},
        {id: 2,title:'Y', author:'Muntakim', price: 200}
    ]
}
const bookSlice = createSlice({
    name : 'books',
    initialState :initialState,
    reducers: {
        deleteBook : (state, action) => {
            const id = action.payload;
            console.log(id)
            state.books = state.books.filter((book)=> book.id != id)
        },
        addBook : (state, action)=>{
            state.books.push(action.payload)
        }
    },
})
export const {deleteBook, addBook} = bookSlice.actions
export default bookSlice.reducer