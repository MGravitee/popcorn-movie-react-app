import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [navState, setNavState] = useState("invisible drop-down");
  const [burgerState, setBurgerState] = useState("hamburger-button small-nav");
  const [burgerClickState, setBurgerClickState] = useState(false);

  //handles closing dropdown on page change
  const location = useLocation();
  useEffect(() => {
    closeMenu();
  }, [location]);

  //handles closing dropdown when page is resized
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
  }, []);

  //handles opening/closing dropdown on click
  function updateBurgerState() {
    if (!burgerClickState) {
      openMenu();
    } else {
      closeMenu();
    }

    setBurgerClickState(!burgerClickState);
  }

  function openMenu() {
    setNavState("visible drop-down");
    setBurgerState("hamburger-button small-nav open");
  }
  function closeMenu() {
    setNavState("invisible drop-down");
    setBurgerState("hamburger-button small-nav");
    setBurgerClickState(false);
  }
  //my need more ul for this?
  return (
    <header>
      <div className="header-contents">
        <div className="nav-logo">
          <NavLink to="/" title="Link to the Popcorn home page" aria-label="Link to the Popcorn home page">
            <img src="/src/assets/popcorn-logo.svg" alt="Popcorn logo" />
          </NavLink>
          <NavLink className={"logo-title-parent"} to="/">
            <h3 className="logo-text">Popcorn</h3>
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
        <div className={burgerState} onClick={updateBurgerState}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
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
