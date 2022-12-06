import React from "react";
import {IBook} from "../entities/IBook";

interface BookItemProps{
    book: IBook
}

export const BookItem: React.FC<BookItemProps> = ({ book}) =>{

    return(
        <div className="book-item">
            <p>{book.id}</p>
            <p>{book.name}</p>
            <p>{book.type}</p>
            <p>{book.content}</p>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.description}</p>
        </div>
    )
}