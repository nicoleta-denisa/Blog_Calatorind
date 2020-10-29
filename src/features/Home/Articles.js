import React, { useState, useEffect } from 'react';
import './Home.css';
import firebase from '../../components/firebase';
import { Link } from 'react-router-dom';
import { VscArrowRight } from 'react-icons/vsc';

const ref = firebase.firestore().collection('articles');

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return (
        <div className="container ">
            {loading ? <h1>Loading...</h1> : null}
            {articles.map((article) => (
                <div className="row" key={article.id}>
                    <div className="col-lg-12 mb-12">
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
                                        {article.text?.substring(0, 300)}
                                    </p>
                                    <hr className="hr-dotted"></hr>
                                    <Link
                                        to={`/${article.id}`}
                                        className="btn  font-text"
                                    >
                                        CITEȘTE MAI MULT <VscArrowRight />
                                    </Link>
                                    <hr className="hr-dotted"></hr>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            ))}
        </div>
    );
}
