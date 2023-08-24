import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import Cartwidget from './Cartwidget';

const NavBar = () => {
    return (
        <div className="container">
            {/* header */}
            <header className="header">
                <div className="brand">
                    <h3>Mi GrowShop</h3> </div>
                <nav className="navbar">
                    <Menu>
                        <MenuButton className="navbar-button">
                            Productos
                        </MenuButton>
                        <MenuList className="menu-list">
                            <MenuItem className="menu-item">Plantas</MenuItem>
                            <MenuItem className="menu-item">Semillas</MenuItem>
                            <MenuItem className="menu-item">Carpas</MenuItem>
                            <MenuItem className="menu-item">Luces</MenuItem>
                        </MenuList>


                    </Menu>
                </nav>
                
                
                <div className="CartWidgett"><Cartwidget/><span class="material-symbols-outlined">
                shopping_cart_checkout
            </span>8</div>
            </header>

            {/* body */}
            <div className="listcontainer">
                <h1 className="welcome-message"></h1>
                {/* lista de productos */}
            </div>
        </div>
    );
}

export default NavBar;
