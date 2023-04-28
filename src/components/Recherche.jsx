import { useState } from "react";

import  "../styles/Recherche.css"
import ResultatRecherche from "./ResultatRecherche";
function Recherche()
{
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = async (query) => {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
        const data = await response.json();
        return data;
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await handleSearch(search);
    if (data.objectIDs && data.objectIDs.length > 0) {
        setSearchResult(data.objectIDs);
        console.log("Résultats trouvés pour la recherche:", search);
    } else {
        console.log("Aucun résultat trouvé pour la recherche:", search);

    }
}

    const handleChange = (event) => {
        setSearch(event.target.value);
        console.log(event.target.value);
    };

    return (
        <>

        <div className="search-row">
            <form action="submit" onSubmit={handleSubmit}>
            <input type="text" className="search-input" placeholder="Recherche..." onChange={handleChange}/>
                <button className="search-button">Rechercher</button>
            </form>
        </div>
            <ResultatRecherche searchResult={searchResult} />
        </>
   );
}

export default Recherche