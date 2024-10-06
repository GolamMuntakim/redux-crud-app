import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";


const BookList = ({onHandleEdit}) => {
   const books =  useSelector((state)=> state.books.books)
   const dispatch = useDispatch()
   const handleDelete = (id) =>{
    dispatch(deleteBook(id))
   }  
   const handleEdit = (book) =>{
    onHandleEdit(book)
   }  
    return (
        <div>
            <h2>List of books</h2>
                {books && books.length > 0 ? (
                    <ul>
                        {
                    books.map((book)=>( <li key={book.id}>
                           {book?.title} - {book?.author} -{book?.price}
                           <button onClick={()=>handleDelete(book.id)} className="btn ml-2">Delete</button>
                           <button onClick={()=>handleEdit(book)} className="btn ml-2">Edit</button>
                        </li>)
                    )
                }
                    </ul>
                ):(<p>No Book Exist</p>)}
        </div>
    );
};

export default BookList;