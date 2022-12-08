import React, {FC, useEffect, useState} from "react";
import {BookList} from "../BookList";
import {IBook} from "../../entities/IBook";
import axios from "axios";

export const BooksPage: FC = () => {
    const [books, setBooks] = useState<IBook[]>([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks(){
        try {
            const response = await axios.get<IBook[]>('/books')
            setBooks(response.data)
        }
        catch(e){
            alert(e)
        }
    }

    return(
        <div>
            <BookList books={books}/>
        </div>
    )
}