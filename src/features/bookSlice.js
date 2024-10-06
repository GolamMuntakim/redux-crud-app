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
        updateBook : (state, action)=>{
            const {id, title, author, price } = action.payload;
            const existingBook = state.books.find((book)=> book.id === id)
            if(existingBook){
                existingBook.title = title;
                existingBook.author = author;
                existingBook.price = price;
            }
        },
        addBook : (state, action)=>{
            state.books.push(action.payload)
        },

    },
})
export const {deleteBook, addBook , updateBook} = bookSlice.actions
export default bookSlice.reducer