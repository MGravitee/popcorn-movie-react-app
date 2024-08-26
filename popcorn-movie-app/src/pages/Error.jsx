import {NavLink} from "react-router-dom";
import caution from "/src/assets/caution-symbol.svg"

function Error() {
    return (
        <>
            <h1 className="screen-reader-text">Popcorn Movies | Error Page</h1>
            <img className="caution-symbol" src={caution} alt="Caution symbol for error page"/> 

            <h2 className="err-heading">Uh oh.... something went wrong</h2>

            <p className="prgrph">
                Not sure what happened but we couldn't find the page you're
                looking for.
            </p>
            <NavLink className="back-to-home" to="/">Back to Home</NavLink>
        </>
    );
}
export default Error;
