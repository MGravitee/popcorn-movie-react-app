import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [burgerState, setBurgerState] = useState("inactive");
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
    setBurgerState("active");
  }
  function closeMenu() {
    setBurgerState("inactive");
  }
  return (
    <header>
      <NavLink to="/">
        <img src="/popcorn-logo.svg" alt="Popcorn logo" />
      </NavLink>
      <NavLink className={"logo-title-parent"} to="/">
        <h3>POPCORN</h3>
      </NavLink>

      <div className="hamburger-button" onClick={updateBurgerState}>
        <div className={burgerState}></div>
        <div className={burgerState}></div>
        <div className={burgerState}></div>
      </div>
      <ul className="nav-ul">
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">favourites</NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
