import { useState } from "react"
import BookForm from "./Components/BookForm"
import BookList from "./Components/BookList"

function App() {
  const [bookToEdit, setBookToEdit] = useState(null)
  const handleEdit = (book) =>{
    setBookToEdit(book)
  }
  const handleCancelEdit = (book) =>{
    setBookToEdit(null)
  }

  return (
    <>
      <div className="text-center">
        <BookForm bookToEdit={bookToEdit} onCancel={handleCancelEdit}></BookForm>
        <BookList onHandleEdit={handleEdit}></BookList>
      </div>
    </>
  )
}

export default App
