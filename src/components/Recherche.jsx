import { useState } from "react";

import  "../styles/Recherche.css"
function Recherche()
{
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        //eviter le rechargement de la page
        event.preventDefault();
        alert(search);
    }

    const handleChange = (event) => {
        const valueAfter = event.target.value;
        setSearch(valueAfter);
        console.log(search);
    };

    return (
        <>
        <div className="search-row">
            <form action="submit" onSubmit={handleSubmit}>
            <input type="text" className="search-input" placeholder="Recherche..." onChange={handleChange}/>
                <button className="search-button">Rechercher</button>
            </form>
        </div>
        </>
   );
}

export default Recherche