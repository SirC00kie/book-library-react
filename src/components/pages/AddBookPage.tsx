import {FC, useState} from "react";

export const AddBookPage: FC = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState('');
    
    return(
        <div>
            <p> create</p>
            <input
                type='text'
                id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}