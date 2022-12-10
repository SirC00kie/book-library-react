import React, {FC, useState} from "react";
import axios from "axios";
import {IBook} from "../../entities/IBook";
import {useNavigate} from "react-router-dom";
import './AddBookPage.css'

export const AddBookPage: FC = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(2000);
    const [description, setDescription] = useState('');


    const navigate = useNavigate();
    async function AddBook(){
        try {
            await axios.post<IBook>('/books', {name, type, content, author, year, description})
            navigate(`/books`)
        }
        catch(e){
            alert(e)
        }
    }


    return(
        <div className="add-book-page">
            <label className="text-field-label" >Название</label>
            <input className="text-field-input"
                type='text'
                id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <label className="text-field-label">Тип публикации</label>
            <input className="text-field-input"
                type='text'
                id='type'
                value={type}
                onChange={(e)=>setType(e.target.value)}
            />
            <label className="text-field-label">Содержание</label>
            <input className="text-field-input"
                type='text'
                id='content'
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
            <label className="text-field-label">Автор</label>
            <input className="text-field-input"
                type='text'
                id='author'
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
            />
            <label className="text-field-label">Год</label>
            <input className="text-field-input"
                type='number'
                id='year'
                value={year}
                onChange={(e)=>setYear(Number(e.target.value))}
            />
            <label className="text-field-label">Описание</label>
            <input className="text-field-input"
                type='text'
                id='description'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />
            <input className="text-field-btn" type="button" value="Добавить" onClick={AddBook}/>
        </div>

    )
}