import { useEffect, useState } from "react";
import "../styles/Articles.css";
export default function Articles() {
    const [articles, setArticles] = useState([]);

    const AfficherObjects = async() => {
        try {
            const response = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects"
            );
            const data = await response.json();
            const objectIDs = data.objectIDs.slice(95, 110);
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


    return (
        <>
            <div className="row">
                {articles.slice(0,5).map((article) => (
                    <div key={article.objectID} className="col-2 box">
                        <div className="box-image">
                            <img src={article.primaryImageSmall} alt={article.title} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                            <div className="box-info">
                                <h3>{article.title}</h3>
                                <h3>{article.culture}</h3>
                                <h3>{article.artistRole}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                {articles.slice(5,10).map((article) => (
                    <div key={article.objectID} className="col-2 box">
                        <div className="box-image">
                            <img src={article.primaryImageSmall} alt={article.title} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                            <div className="box-info">
                                <h3>{article.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                {articles.slice(10,15).map((article) => (
                    <div key={article.objectID} className="col-2 box">
                        <div className="box-image">
                            <img src={article.primaryImageSmall} alt={article.title} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
                            <div className="box-info">
                            <h3>{article.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>

    );
}