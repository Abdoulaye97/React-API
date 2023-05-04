import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Articles.css";
import "../styles/Recherche.css";
import RechercheSimple from "./RechercheSimple";


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [showAvanceButton, setShowAvanceButton] = useState(true);


    // dans cet etape je recuper 15 id de l'api que je passe au plutart en parametre pour recuper les information des articles
    const AfficherObjects = async () => {
        try {
            const response = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects"
            );
            const data = await response.json();
            const objectIDs = data.objectIDs.slice(94, 109);
            const objectPromises = objectIDs.map((id) =>
                fetch(
                    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
                ).then((response) => {
                    if (!response.ok) {
                        throw new Error("Reponse Correct");
                    }
                    return response.json();
                })
            );
            const objects = await Promise.all(objectPromises);
            setArticles(objects);
        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        AfficherObjects();
    }, []);

    //l'affichage
    return (
        <>
            <RechercheSimple showAvanceButton={showAvanceButton} />
            <h1 className="titre">Notre Collection</h1>
            <div className="row">
                {articles.slice(0,5).map((article) => (
                    <div key={article.objectID} className="col-2 box">

                        <Link  to={`/details-articles/${article.objectID}`} className="box-image lien" >
                          <img src={article.primaryImageSmall} alt={article.title}/>
                            <div className="details-articles">
                                <div className="detail">
                                    <span className="label">Titre :</span>
                                    <span className="value">{article.title}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Object Name:</span>
                                    <span className="value">{article.objectName}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Auteur:</span>
                                    <span className="value">{article.artistDisplayName}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">City:</span>
                                    <span className="value">{article.city}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Culture:</span>
                                    <span className="value">{article.culture}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="row">
                {articles.slice(5,10).map((article) => (
                    <div key={article.objectID} className="col-2 box">

                        <Link  to={`/details-articles/${article.objectID}`} className="box-image lien" >
                            <img src={article.primaryImageSmall} alt={article.title}/>
                            <div className="details-articles">
                                <div className="detail">
                                    <span className="label">Titre :</span>
                                    <span className="value">{article.title}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Object Name:</span>
                                    <span className="value">{article.objectName}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Auteur:</span>
                                    <span className="value">{article.artistDisplayName}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">City:</span>
                                    <span className="value">{article.city}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Culture:</span>
                                    <span className="value">{article.culture}</span>
                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="row">
                {articles.slice(10,15).map((article) => (
                    <div key={article.objectID} className="col-2 box">

                        <Link  to={`/details-articles/${article.objectID}`} className="box-image lien" >
                            <img src={article.primaryImageSmall} alt={article.title}/>
                            <div className="details-articles">
                                <div className="detail">
                                    <span className="label">Titre :</span>
                                    <span className="value">{article.title}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Object Name:</span>
                                    <span className="value">{article.objectName}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Auteur:</span>
                                    <span className="value">{article.artistDisplayName}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">City:</span>
                                    <span className="value">{article.city}</span>
                                </div>
                                <div className="detail">
                                    <span className="label">Culture:</span>
                                    <span className="value">{article.culture}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </>

    );
}