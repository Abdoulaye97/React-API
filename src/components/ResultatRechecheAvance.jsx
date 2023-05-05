import { useEffect, useState } from "react";
import "../styles/Articles.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

async function AfficherResultatArticles(id) {
    const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    const data = await response.json();
    return data;
}

function ResultatRechercheAvancee({ searchResult }) {
    const [articleTrouve, setArticleTrouve] = useState([]);

    useEffect(() => {
        async function AfficherResultatArticle() {
            const articles = await Promise.all(
                searchResult.slice(0, 10).map((id) => AfficherResultatArticles(id))
            );
            setArticleTrouve(articles);
        }
        AfficherResultatArticle();
    }, [searchResult]);

    return (
        <>
            {articleTrouve.length > 0 && (
                <>
                    <h2 className="titre">Résultats de recherche</h2>
                    <div className="row" key="search-results">
                        {articleTrouve.slice(0,5).map((article) => (
                            <div key={article.id} className="col-2 box">
                                <Link
                                    to={`/details-articles/${article.objectID}`}
                                    className="box-image lien"
                                >
                                    <img
                                        src={article.primaryImageSmall}
                                        alt={article.title}
                                    />
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
                        <div className="pagi">
                            <Pagination totalsPosts={articleTrouve.length}/>
                        </div>
                </>
            )}

        </>
    );
}

export default ResultatRechercheAvancee;
