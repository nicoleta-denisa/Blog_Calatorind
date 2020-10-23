import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../components/firebase';

export default function ArticleDetails() {
    const [article, setArticles] = useState(null);
    const { id: articleId } = useParams();

    useEffect(() => {
        const ref = firebase.firestore().collection('articles');
        function getArticle() {
            ref.where('id', '==', articleId)
                .get()
                .then((item) => {
                    const items = item.docs.map((doc) => doc.data());
                    setArticles(items);
                });
        }
        getArticle();
    }, [articleId]);

    if (!article) {
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            {article.map((article) => (
                <React.Fragment key={article.id}>
                    <h1> {article.title}</h1>
                    <div>{article.text}</div>
                </React.Fragment>
            ))}
        </div>
    );
}
