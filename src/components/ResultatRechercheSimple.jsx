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

function ResultatRechercheSimple({ searchResult }) {
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
  console.log();

  return (
    <>
      {articleTrouve.length > 0 && (
        <>
          <h2 className="titre">Résultats de recherche</h2>
          <div className="row">
            {articleTrouve.slice(0.5).map((article) => (
              <div key={article.id} className="col-2 box">
                <Link
                  to={`/details-articles/${article.objectID}`}
                  className="box-image"
                >
                  <img
                    src={article.primaryImageSmall}
                    alt={article.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="box-info">
                    <h3>{article.title}</h3>
                    <h3>{article.culture}</h3>
                    <h3>{article.artistRole}</h3>
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

export default ResultatRechercheSimple;
