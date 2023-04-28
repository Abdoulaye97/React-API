import Articles from "./components/Articles";
import RechercheAvance from "./components/RechercheAvance";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RechercheSimple from "./components/RechercheSimple";
import DetailsArticles from "./components/DetailsArticles";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
return (


        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<div>
                         <RechercheSimple />
                         <Articles />
                         <Footer/>
                     </div>
                 } />
                <Route path="/recherche-avance" element={<RechercheAvance/>}/>
                <Route path="/details-articles/:id" element={<DetailsArticles/>} />
                <Route path="*" element={<Error/>}/>

            </Routes>
        </BrowserRouter>


)
};
export default App;
