import { Link } from "react-router-dom";
import logo from '/src/assets/popcorn-logo.svg'
import tmdb from '/src/assets/tmdb-logo.svg'

function About() {
  return (
    <>
        <h1 className="screen-reader-text">Popcorn Movies | About</h1>
        <img className="popcorn-logo" src={logo} alt="Popcorn Movies logo"/>
        <p className="prgrph">At Popcorn, we are passionate about movies and strive to bring you the best movie experience possible. Our team of movie enthusiasts has developed a movie database app that is both comprehensive and user-friendly.</p>

        <p className="prgrph">With Popcorn, you can discover new movies, stay up to date on the latest releases, and find the perfect flick to watch on any given day.</p>

        <p className="prgrph">This product uses the TMDb API but is not endorsed or certified by TMDb. </p>
    
        <Link className="tmdb-link" to="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" title="Link to the TMDB Home Page" aria-label="Link to the TMDB Home Page">
          <img className="tmdb-logo" src={tmdb} alt="TMDB Logo" />
        </Link>
    </>
  )
}
export default About