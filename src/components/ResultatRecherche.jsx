import { useEffect, useState } from "react";

async function AfficherResultatArticles(id){
const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
const data = await response.json();
return data;
}

function ResultatRecherche({ searchResult }) {

    const  [articleTrouve, setArticleTrouve] = useState([]);

    useEffect(() => {
        async function AfficherResultatArticle() {
            const articles = await Promise.all(
                searchResult.slice(0, 10).map((id) => AfficherResultatArticles(id))
            );
            setArticleTrouve(articles);
        }
        AfficherResultatArticle();
    }, [searchResult]);
    console.log()


    return (
        <>
            {articleTrouve.length > 0 && (
                <>
                    <h2>Résultats de recherche :</h2>
                    <ul>
                        {articleTrouve.map((article) => (
                            <li key={article.id}>
                                <h1>{article.title}</h1>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}


export default ResultatRecherche;