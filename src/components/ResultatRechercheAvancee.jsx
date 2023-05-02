import { useEffect, useState } from "react";
import "../styles/Articles.css";
import { Link } from "react-router-dom";

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
          <div className="row" style={{ flexWrap: "wrap" }}>
            {articleTrouve.map((article) => (
              <div key={article.objectID} className="col-2 box">
                <Link
                  to={`/details-articles/${article.objectID}`}
                  className="box-image"
                >
                  <div className="image-container">
                    <img
                      src={article.primaryImageSmall}
                      alt={article.title}
                      className="box-image-img"
                    />
                  </div>
                  <div className="box-info">
                    <h3 className="box-title">{article.title}</h3>
                    <p className="box-details">
                      {article.artistDisplayName &&
                        `${article.artistDisplayName}, `}
                      {article.objectDate && article.objectDate + ", "}
                      {article.medium && article.medium}
                    </p>
                    <p className="box-details">
                      Department: {article.department}
                    </p>
                    <p className="box-details">
                      Object Name: {article.objectName}
                    </p>
                    <p className="box-details">Culture: {article.culture}</p>
                    <p className="box-details">
                      Object Begin Date: {article.objectBeginDate}
                    </p>
                    <p className="box-details">
                      Object End Date: {article.objectEndDate}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ResultatRechercheAvancee;
