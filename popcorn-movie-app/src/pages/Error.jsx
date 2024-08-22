import {NavLink} from "react-router-dom";


function Error() {
    return (
        <>
            <h1 class="screen-reader-text">Popcorn Movies | Error Page</h1>
            <img className="caution-symbol" src="/caution-symbol.svg" alt="Caution symbol for error page"/> 

            <h2 className="prgrph">Uh oh.... something went wrong</h2>

            <p className="prgrph">
                Not sure what happened but we couldn't find the page you're
                looking for.
            </p>
            <NavLink to="/">Back to Home</NavLink>
        </>
    );
}
export default Error;
