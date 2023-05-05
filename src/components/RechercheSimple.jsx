import { useState } from "react";

import  "../styles/Recherche.css"
import ResultatRechercheSimple from "./ResultatRechercheSimple";

import {Link} from "react-router-dom";
import Pagination from "./Pagination";


function RechercheSimple({showAvanceButton})
{
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(5);

    const handleSearch = async (query) => {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
        const data = await response.json();
        return data;
        setCurrentPage(1);
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

    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = searchResult.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <>

        <div className="search-row">
            <form action="submit" onSubmit={handleSubmit}>
            <input type="text" className="search-input" value={search} placeholder="Recherche Simple..." onChange={handleChange}/>
                <button className="search-button">Rechercher</button>
                  <Link to="/recherche-avance" className={showAvanceButton ? '' : 'hide'}>
                      <button className="search-button">Avance</button>
                  </Link>
                <Pagination
                    articlesPerPage={articlesPerPage}
                    totalArticles={searchResult.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </form>
        </div>
            <ResultatRechercheSimple searchResult={currentArticles} />
        </>
   );
}

export default RechercheSimple