import { Link } from "react-router-dom";

// import BurgerMenu from "./burgerMenu/BurgerMenu";

import "./Header.scss";

const Header = () => {
   return (
      <>
         <header className="header">
            <div className="container">
               <div className="header__menu menu">
                  <Link to="/" className="menu__logo">
                     <span></span>
                  </Link>
                  <nav className="menu__body">
                     <ul className="menu__list">
                        <li className="menu__item">
                           <Link to="/" className="menu__link"></Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
