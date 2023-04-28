import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "../styles/DetailsArticles.css";
import "../styles/Recherche.css";
import RechercheSimple from "./RechercheSimple";

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
        <>

            <RechercheSimple/>

            <img className="image" src={article.primaryImageSmall} alt={article.title} />
            <div className="details">
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
                <div className="detail">
                    <span className="label">Department:</span>
                    <span className="value">{article.department}</span>
                </div>
                <div className="detail">
                    <span className="label">Annee Accession:</span>
                    <span className="value">Nom du photographe</span>
                </div>
                <div className="detail">
                    <span className="label">Artist Role</span>
                    <span className="value">Nom du photographe</span>
                </div>
            </div>
        </>
    );
}
export default DetailsArticles;