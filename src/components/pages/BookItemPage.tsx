import React, {FC, useEffect, useState} from "react";
import {IBook} from "../../entities/IBook";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import './BookItemPage.css'


export const BookItemPage: FC = (props) => {

    const [book, setBook] = useState<IBook | null>(null)
    const {uuid} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetchBook()
    }, [])

    async function fetchBook(){
        try {
            const response = await axios.get<IBook>('/books/uuid:?uuid=' + uuid)
            setBook(response.data)
        }
        catch(e){
            alert(e)
        }
    }

    async function deleteBook(){
        try {
            await axios.delete<IBook>('/books/uuid:?uuid=' + uuid)
            navigate(`/books`)
        }
        catch(e){
            alert(e)
        }
    }

    return(
      <div className="book-item-page">
            <h1 className="book-name">{book?.name}</h1>
            <div className="book-info">
                <p>Тип публикации: {book?.type} {book?.year}</p>
                <p>Содержание: {book?.content}</p>
                <p>Автор: {book?.author}</p>
                <p>Год: {book?.year}</p>
                <p>{book?.description}</p>
            </div>
           <input className="delete-btn" type="button" value="Удалить" onClick={deleteBook}/>
      </div>
  )
}