import { useState } from "react";
import "../styles/RechercheAvance.css";
import ResultatRechercheAvancee from "./ResultatRechercheAvancee";
import { Link } from "react-router-dom";

function RechercheAvancee() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [objectName, setObjectName] = useState("");
  const [culture, setCulture] = useState("");
  const [objectBeginDate, setObjectBeginDate] = useState("");
  const [objectEndDate, setObjectEndDate] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
    );
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = `${title}+${department}+${objectName}+${culture}+${objectBeginDate}+${objectEndDate}`;
    const data = await handleSearch(query);
    if (data.objectIDs && data.objectIDs.length > 0) {
      setSearchResult(data.objectIDs);
      console.log("trouvés :", query);
    } else {
      console.log("non trouvé", query);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
    console.log(event.target.value);
  };

  const handleObjectNameChange = (event) => {
    setObjectName(event.target.value);
    console.log(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
    console.log(event.target.value);
  };

  const handleObjectBeginDateChange = (event) => {
    setObjectBeginDate(event.target.value);
    console.log(event.target.value);
  };

  const handleObjectEndDateChange = (event) => {
    setObjectEndDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className="search-row">
        <h2 className="title">Recherche avancée</h2>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="search-input-container">
            <label htmlFor="title">Titre:</label>
            <input
              type="text"
              id="title"
              className="search-input"
              placeholder="Titre..."
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="search-input-container">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              className="search-input"
              placeholder="Department..."
              value={department}
              onChange={handleDepartmentChange}
            />
          </div>
          <div className="search-input-container">
            <label htmlFor="object-name">Object Name:</label>
            <input
              type="text"
              id="object-name"
              className="search-input"
              placeholder="Object Name..."
              value={objectName}
              onChange={handleObjectNameChange}
            />
          </div>
          <div className="search-input-container">
            <label htmlFor="culture">Culture:</label>
            <input
              type="text"
              id="culture"
              className="search-input"
              placeholder="Culture..."
              value={culture}
              onChange={handleCultureChange}
            />
          </div>
          <div className="search-input-container">
            <label htmlFor="object-begin-date">Object Begin Date:</label>
            <input
              type="text"
              id="object-begin-date"
              className="search-input"
              placeholder="Object Begin Date..."
              value={objectBeginDate}
              onChange={handleObjectBeginDateChange}
            />
          </div>
          <div className="search-input-container">
            <label htmlFor="object-end-date">Object End Date:</label>
            <input
              type="text"
              id="object-end-date"
              className="search-input"
              placeholder="Object End Date..."
              value={objectEndDate}
              onChange={handleObjectEndDateChange}
            />
          </div>
          <button className="search-button">Rechercher</button>
        </form>
      </div>
      <ResultatRechercheAvancee searchResult={searchResult} />
    </>
  );
}

export default RechercheAvancee;
