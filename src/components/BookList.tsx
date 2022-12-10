import {IBook} from "../entities/IBook";
import React from "react";
import {Head} from "./table/Head";
import {Row} from "./table/Row";
import './BookList.css'

interface BookListProps{
    books: IBook[]
}

export const BookList: React.FC<BookListProps> = ({ books}) =>{
    return (

        <table className="books-table">
            <Head/>
            <tbody>
            {
                books.map((book, i) => (
                    <Row
                        id={book.id}
                        name={book.name}
                        type={book.type}
                        content={book.content}
                        author={book.author}
                        year={book.year}
                        description={book.description}
                    />

                ))
            }
            </tbody>
        </table>
    );
}