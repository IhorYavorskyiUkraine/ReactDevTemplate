import { useState } from "react";
import { Link } from "react-router-dom";

import burgerOpen from "/images/header/burger/burger.png";
import burgerClose from "/images/header/burger/close.png";

import "./BurgerMenu.scss";

const BurgerMenu = () => {
   const [lock, setLock] = useState(false);

   const handleLock = () => {
      setLock(!lock);
      lock
         ? document.body.classList.remove("lock")
         : document.body.classList.add("lock");
   };

   return (
      <>
         <div className="burger">
            <button onClick={handleLock} className="burger__icon">
               <img src={burgerOpen} alt="icon" />
            </button>
            <div
               className={lock ? "burger__overlay" : "burger__overlay hidden"}
            >
               <div className="burger__header">
                  <div className="burger__logo"></div>
                  <button onClick={handleLock} className="burger__close">
                     <img src={burgerClose} alt="burgerClose" />
                  </button>
               </div>
               <div className="burger__main">
                  <Link to="/" id="" className="burger__link">
                     <span className="burger__item"></span>
                  </Link>
                  <Link to="/" id="" className="burger__link">
                     <span className="burger__item"></span>
                  </Link>
                  <Link to="/bog" id="" className="burger__link">
                     <span className="burger__item"></span>
                  </Link>
                  <Link to="/" id="" className="burger__link">
                     <span className="burger__item"></span>
                  </Link>
               </div>
               <div className="burger__footer">
                  <Link to="/" className="burger__btn">
                     <span></span>
                  </Link>
                  <Link to="/" className="burger__btn">
                     <span></span>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default BurgerMenu;
