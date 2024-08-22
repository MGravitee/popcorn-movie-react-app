import {NavLink} from "react-router-dom";
import {useState} from "react";

function Header() {
  const [navState, setNavState] = useState("invisible");
  const [burgerClickState, setBurgerClickState] = useState(false);

  function updateBurgerState() {
    if (!burgerClickState) {
      openMenu();
    } else {
      closeMenu();
    }

    setBurgerClickState(!burgerClickState);
  }

  function openMenu() {
    setNavState("visible");
  }
  function closeMenu() {
    setNavState("invisible");
  }
  //my need more ul for this?
  return (
    <header>
      <div className="header-contents">
        <div className="nav-logo">
          <NavLink to="/">
            <img src="/popcorn-logo.svg" alt="Popcorn logo" />
          </NavLink>
          <NavLink className={"logo-title-parent"} to="/">
            <h3>POPCORN</h3>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink className="large-nav inward-elem" to="/about">
            About
          </NavLink>
          <NavLink className="large-nav" to="/favourites">
            Favourites
          </NavLink>
        </div>
        <div
          className="hamburger-button small-nav "
          onClick={updateBurgerState}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul className={navState}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
