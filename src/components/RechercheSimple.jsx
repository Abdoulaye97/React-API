import { useState } from "react";

import  "../styles/Recherche.css"
import ResultatRechercheSimple from "./ResultatRechercheSimple";
import {Link} from "react-router-dom";

function RechercheSimple()
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
        console.log("trouvés :", search);
    } else {
        console.log("non trouve",search);
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
            <input type="text" className="search-input" placeholder="RechercheSimple..." onChange={handleChange}/>
                <button className="search-button">Rechercher</button>
                <Link to="/recherche-avance">
                    <button className="search-button">Avance</button>
                </Link>
            </form>
        </div>
            <ResultatRechercheSimple searchResult={searchResult} />
        </>
   );
}

export default RechercheSimple