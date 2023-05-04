import {Link} from "react-router-dom";
import "../styles/Error.css";

function Error()
{
    return(
        <>
            <div className="center">
                <div>
                    <div className="message">Page introuvable</div>
                    <Link className="lien" to={"/"}>
                    <button className="button">Accueil</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Error;