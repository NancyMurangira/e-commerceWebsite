import React from 'react';
import './index.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";




function Header() {
    return (
        <div>
            <header>
                <div class="textlogo">
                    <p class="text"> 3ILOGICS </p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home"> Home </a></li>
                        <li><a href="#shop"> Shop </a></li>
                        <li><a href="#products"> Products </a></li>
                        <li><a href="#blog"> Blog </a></li>
                        <li><a href="#Pages"> Pages </a></li>
                        <TiShoppingCart class="cart" />
                        <FaSearch class="search" />

                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header;