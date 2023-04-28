import Articles from "./components/Articles";
import "./App.css";

import RechercheAvance from "./components/RechercheAvance";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RechercheSimple from "./components/RechercheSimple";
import DetailsArticles from "./components/DetailsArticles";

function App() {
return (

    <div className="container">
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<div>
                         <RechercheSimple />
                         <Articles />
                     </div>
                 } />
                <Route path="/recherche-avance" element={<RechercheAvance/>}/>
                <Route path="/details-articles/:id" element={<DetailsArticles/>} />
            </Routes>
        </BrowserRouter>

    </div>
)
};
export default App;
