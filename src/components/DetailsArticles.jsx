import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function DetailsArticles() {
    const [article, setArticle] = useState(null);
    // c'est avec cet hooks que je recupere l'id passee en parametre
    const { id } = useParams();

    useEffect(() => {
        // je passe id que j'ai recuper sur le lien qui se trouve sur App.js
        //cette id je le passe l'api pour pouvoir trouver l'article correspondants
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then((response) => response.json())
            //les resultat recuperer je le passe au setteur de mon state
            .then((data) => setArticle(data));
    }, [id]);
    //tant les donnes ne sont pas terminer je charge la page
    if (!article) {
        return <div>Loading...</div>;
    }

    //l'affichage
    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.primaryImageSmall} alt={article.title} />
            <p>{article.description}</p>
        </div>
    );
}
export default DetailsArticles;