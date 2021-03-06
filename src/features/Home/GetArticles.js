import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import firebase from '../../components/firebase';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../Auth/AuthContext';

const ref = firebase.firestore().collection('articles');

export default function GetArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState(' ');
    const [file, setFile] = useState(null);
    const [url, setURL] = useState('');

    const { user } = useContext(AuthContext);

    const storage = firebase.storage();

    async function handleAddArticle(e) {
        if (user) {
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
                console.error(err);
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
                console.error(err);
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
                console.error(err);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleAddArticle} className="form-getarticles ">
                    <p className="form-title-getarticles">
                        Adăugare articol nou
                    </p>
                    <div className="form-group">
                        <label
                            htmlFor="image"
                            className="form-title-getarticles"
                        >
                            Imagine
                        </label>
                        <input
                            type="file"
                            className="form-control "
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="title"
                            className="form-title-getarticles"
                        >
                            Titlu
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="text"
                            className="form-title-getarticles"
                        >
                            Text
                        </label>
                        <textarea
                            rows="4"
                            className="form-control"
                            id="text"
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn getarticles-btn">
                        Adăugare
                    </button>
                </form>
            </div>
            <hr />
            {loading ? <h1>Loading...</h1> : null}
            {articles.map((article) => (
                <div className="row" key={article.id}>
                    <div className="card article-frame">
                        <div>
                            <img
                                src={article.url}
                                alt=""
                                className="cardImage card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-title">
                                    {' '}
                                    {article.title}{' '}
                                </h5>
                                <p className="card-text font-text">
                                    {article.text?.substring(0, 200)}
                                </p>
                                <Link
                                    to={`/${article.id}`}
                                    className="btn btn-primary buttons font-text"
                                >
                                    Detalii
                                </Link>
                                <button
                                    className="btn btn-danger buttons font-text"
                                    onClick={() => deleteArticle(article)}
                                >
                                    Șterge
                                </button>
                                <button
                                    className="btn btn-success buttons font-text"
                                    onClick={() =>
                                        editArticle({
                                            url,
                                            title,
                                            text,
                                            id: article.id,
                                        })
                                    }
                                >
                                    Editează
                                </button>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            ))}
        </div>
    );
}
