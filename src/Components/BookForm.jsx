import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import { addBook } from "../features/bookSlice";

const BookForm = ({bookToEdit,onCancel}) => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        price: ''
    });
    useEffect(()=>{
        if(bookToEdit){
            setBook(bookToEdit)
        }
    },[bookToEdit])
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const {name, value } = event.target;
        setBook((prevBook)=> ({...prevBook,
            [name]:value}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
       if(bookToEdit){}else{ dispatch(addBook({...book, id:nanoid()}))}
       setBook({
        title: '',
        author: '',
        price: ''
    })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={book.title}
                    onChange={handleChange}
                    required />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={book.author}
                    onChange={handleChange}
                    required />
                <input
                    type="number"
                    name="price"
                    placeholder="price"
                    value={book.price}
                    onChange={handleChange}
                    required />
                    <button type="submit">
                        {
                            bookToEdit ? "Update Book" : "Add Book"
                        }
                       
                    </button>
                    {bookToEdit && <button className="ml-2" onClick={onCancel}>cancel</button>}
            </form>
        </div>
    );
};

export default BookForm;