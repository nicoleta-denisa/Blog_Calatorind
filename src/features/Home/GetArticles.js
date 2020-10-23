import React, { useState, useEffect } from 'react';
import './Home.css';
import firebase from '../../components/firebase';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ref = firebase.firestore().collection('articles');

export default function GetFirebase() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState(' ');
    const [file, setFile] = useState(null);
    const [url, setURL] = useState('');

    const storage = firebase.storage();

    async function handleAddArticle(e) {
        e.preventDefault();
        const imageRef = storage.ref(`/images/${file.name}`);
        await imageRef.put(file);
        const url = await imageRef.getDownloadURL();

        console.log(url);
        setURL(url);

        addArticle({
            url,
            title,
            text,
            id: uuidv4(),
        });
    }

    //GET FUNCTION
    useEffect(() => {
        getArticle();
        function getArticle() {
            setLoading(true);
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setArticles(items);
                setLoading(false);
            });
        }
    }, []);

    // ADD FUNCTION
    function addArticle(newArticle) {
        ref.doc(newArticle.id)
            .set(newArticle)
            .then(() => {
                setArticles((prev) => [newArticle, ...prev]);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //DELETE FUNCTION
    function deleteArticle(article) {
        ref.doc(article.id)
            .delete()
            .then(() => {
                setArticles((prev) =>
                    prev.filter((element) => element.id !== article.id)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // EDIT FUNCTION
    function editArticle(updatedArticle) {
        setLoading();
        ref.doc(updatedArticle.id)
            .update(updatedArticle)
            .then(() => {
                setArticles((prev) =>
                    prev.map((element) => {
                        if (element.id !== updatedArticle.id) {
                            return element;
                        }
                        return updatedArticle;
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleAddArticle}>
                        <h5>Adaugare articol nou</h5>
                        <div className="form-group">
                            <label htmlFor="image">Imagine</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            {/* <button disabled={!file}>upload to firebase</button> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Titlu</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Text</label>
                            <textarea
                                className="form-control"
                                id="text"
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Adaugare
                        </button>
                    </form>
                </div>
                <hr />
                {loading ? <h1>Loading...</h1> : null}
                {articles.map((article) => (
                    <div className="row" key={article.id}>
                        <div className="col-lg-8 mb-8">
                            <div className="card">
                                <div>
                                    <img
                                        src={article.url}
                                        alt=""
                                        className="cardImage card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {' '}
                                            {article.title}{' '}
                                        </h5>
                                        <p className="card-text">
                                            {article.text?.substring(0, 200)}
                                        </p>
                                        <Link
                                            to={`/home/${article.id}`}
                                            className="btn btn-primary buttons"
                                        >
                                            Detalii
                                        </Link>
                                        {/* <button className="btn btn-primary buttons">Detalii</button> */}
                                        <button
                                            className="btn btn-danger buttons"
                                            onClick={() =>
                                                deleteArticle(article)
                                            }
                                        >
                                            Sterge
                                        </button>
                                        <button
                                            className="btn btn-success buttons"
                                            onClick={() =>
                                                editArticle({
                                                    url,
                                                    title,
                                                    text,
                                                    id: article.id,
                                                })
                                            }
                                        >
                                            Editeaza
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
