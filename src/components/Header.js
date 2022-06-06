import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   const [isOpen, setOpen] = useState(false);

   return (
      <nav
         className="navbar is-primary"
         role="navigation"
         aria-label="main navigation"
      >
         <div className="container">
            <div className="navbar-brand">
               <button
                  className={`navbar-burger burger ${isOpen && 'is-active'}`}
                  aria-label="menu"
                  aria-expanded="false"
                  onClick={() => setOpen(!isOpen)}
               >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
               </button>
            </div>

            <div className={`navbar-menu ${isOpen && 'is-active'}`}>
               <div className="navbar-start">
                  <NavLink className="navbar-item" to="/">
                     Rebounds
                  </NavLink>

                  <NavLink className="navbar-item" to="/points">
                     Points
                  </NavLink>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Header;
