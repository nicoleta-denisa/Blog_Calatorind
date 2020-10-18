import React, {useState} from 'react';
import { db } from '../../components/App';

const PostComment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('post-comment').add({
            name:name,
            email:email,
            message:message
        })
        .then(() => {
        alert('Mesajul a fost trimis cu succes.')
        })
        .catch(error => {
        alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
        <p><b>ADAUGA UN COMENTARIU</b></p>
        <form className="form" onSubmit= {handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label for="name">Nume</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group col-md-3">
                    <label for="email">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
        </div>
            <div className="form-row">
                <div class="form-group col-md-9">
                    <label for="message">Mesaj</label>
                    <textarea 
                        class="form-control" 
                        id="message" 
                        rows="4"
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} >
                    </textarea>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" >Trimite</button>
            <br></br>
        </form> 
    
        </>
    );
};

export default PostComment;