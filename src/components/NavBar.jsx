import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import imgLogo from '../assets/iconLogo.png'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const NavBar = () => {
    return (
        <div className="ContainerNavBar" >
            <div className='navbar-home'>
                <Link to={"/"}>
                    <img className="imgLogo" title='Home' src={imgLogo} alt="Logo" />
                </Link>
            </div>
            <Menu >
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Category
                </MenuButton>
                <MenuList >

                    <MenuItem >
                        <Link to={`/categoria/${'CBD'}`}>
                            CBD
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/categoria/${'THC'}`}>
                            THC
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/categoria/${'Híbrido'}`}>
                            Híbrido
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/categoria/${'Indica'}`}>
                            Indica
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/categoria/${'Sativa'}`}>
                            Sativa
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/categoria/${'Fertilizantes'}`}>
                            Fertilizantes
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Link to={"/Cart"}>
                <CartWidget />
            </Link>
        </div>
    )
}


export default NavBar