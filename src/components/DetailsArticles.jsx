import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../styles/DetailsArticles.css";
import "../styles/Recherche.css";
import RechercheSimple from "./RechercheSimple";
import Footer from "./Footer";

function DetailsArticles() {
    const [article, setArticle] = useState(null);
    const [showAvanceButton, setShowAvanceButton] = useState(false);
    // c'est avec cet hooks que je recupere l'id passee en parametre
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Article not found');
                }
                return response.json();
            })
            .then((data) => setArticle(data))
            .catch(() => {
                navigate('*');
            });
    }, [id, navigate]);

    if (!article)
    {
        return <div>Loading...</div>;
    }
    //l'affichage
    return (
        <>

            <RechercheSimple showAvanceButton={showAvanceButton}/>

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
                    <span className="value">{article.accessionYear}</span>
                </div>
                <div className="detail">
                    <span className="label">Artist Role</span>
                    <span className="value">{article.artistRole}</span>
                </div>
                <div className="detail">
                    <span className="label">Wikipedia</span>
                    <span className="value"><a href={article.objectWikidata_URL} target="_blank" rel="noopener noreferrer">Lien</a></span>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default DetailsArticles;