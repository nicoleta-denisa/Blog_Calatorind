import React, { useState, useEffect, Fragment } from 'react';
import './Home.css';
import firebase from '../../components/firebase';
import { v4 as uuidv4 } from "uuid";

function Article() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState(' ');

    const ref = firebase.firestore().collection('articles');
    // console.log(ref);
    
    //GET function
    function getArticle() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setArticles(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getArticle();
    }, []);

    //ADD function

    function addArticle(newArticle) {
        ref
            .doc(newArticle.id)
            .set(newArticle)
            .catch((err) => {
                console.error(err);
            });
    }

    //DELETE FUNCTION
    function deleteArticle(article) {
        ref
            .doc(article.id)
            .delete()
            .catch((err) => {
                console.error(err);
            });
    }

    //EDIT FUNCTION
    function editArticle(updatedArticle) {
        setLoading();
        ref
        .doc(updatedArticle.id)
        .update(updatedArticle)
        .catch((err) => {
            console.error(err);
        });
    }

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                <form>
                    <h5>Adaugare articol nou</h5>
                    <div className="form-group">
                    <label for="title">Titlu</label>
                    <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label for="text">Text</label>
                    <textarea className="form-control" id="text" onChange={(e) =>setText(e.target.value)}>
                    </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() =>addArticle({title, text, id:uuidv4() })}>Adaugare</button>
                </form>
                </div>
                <hr />
                {loading ? <h1>Loading...</h1> : null}
                {articles.map((article) => (
                <div className="row">
                    <div className="col-lg-8 mb-8">
                    <div className="card">
                        <div className="card-body">
                        <div key={article.id}> 
                            <h5 className="card-title"> {article.title} </h5>
                            <p className="card-text">{article.text}</p>
                            <div>
                            <button className="btn btn-primary buttons">Detalii</button>
                            <button className="btn btn-danger buttons" onClick={() => deleteArticle(article)}>Sterge</button>
                            <button className="btn btn-success buttons" onClick={() =>
                                editArticle({ title: article.title, text, id: article.id })}>Editeaza
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <br></br><br></br>
                    </div>
                </div>
                ))}
            </div>
        </Fragment>
    )
}
export default Article;
// const ArticleCard = (props) => {
//     return(
//         <section>
//             <div className="row">
//                 <div className="col-lg-8 mb-8">
//                     <div className="card">
//                         <img src={iasiImg} alt="Iasi" className="cardImage card-img-top" />
//                         <div className="card-body">
//                             <h5 className="card-title">Obiective turistice Iasi</h5>
//                             <p className="card-text"> Dacă încă te gândești ce merită să vizitezi din obiectivele turistice din Iași, îți aducem cinci recomandări care să te ajute să alegi mai ușor dintre tot ceea ce este de văzut în capitala Moldovei. </p>
//                             {/* <Link exact to='/home/iasi' className="btn btn-outline-success btn-sm">Citeste mai multe</Link> */}
//                             {/* <Switch><Route exact path="/home/iasi" component={ Iasi } /></Switch> */}
//                             <a href="#" className="btn btn-outline-success btn-sm">Citeste mai multe</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default ArticleCard