import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'


const NavbarComponent = () => {
    return (
        <Navbar dark color={'primary'}>
            <div className={'container'}>
            <NavbarBrand href={'/'}>Nucamp</NavbarBrand>
            </div>
        </Navbar>
    )
}

export default NavbarComponent;