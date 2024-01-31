import React from "react";
 import './Header.css'
 import SearchBar from "./SearchBar/SearchBar";
 import CartButton from "./CartButton/CartButton";

function Header() {
    return ( 
        <header className="header">
            <div className="container">
                
                <SearchBar></SearchBar>
            <CartButton></CartButton>
            </div>
        </header>
     );
}

export default Header; 