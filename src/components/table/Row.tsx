import React from "react";
import {IBook} from "../../entities/IBook";
import {Link} from "react-router-dom";

export const Row: React.FC<IBook> = ({
    id,
    name,
    type,
    content,
    author,
    year,
    description}) =>{

    return (
        <tr>
            <td><Link key={id} to={`/books/${id}`}> {id} </Link></td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{content}</td>
            <td>{author}</td>
            <td>{year}</td>
            <td>{description}</td>
        </tr>
    )

}
