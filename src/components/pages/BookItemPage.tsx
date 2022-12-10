import React, {FC, useEffect, useState} from "react";
import {IBook} from "../../entities/IBook";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


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
      <div>
            <h1>{book?.name}</h1>
            <div>
                <p>{book?.type} {book?.content} {book?.year}</p>
                {book?.description}
            </div>
           <input type="button" name="submit" value="Удалить" onClick={deleteBook}/>
           <input type="button" name="submit" value="Изменить" onClick={deleteBook}/>
      </div>
  )
}