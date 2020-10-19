import React, { useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Directory from './DirectoryComp'
import CampsiteInfo from './CampInfoComp'
import NavbarComp from './NavbarComp'
import { CAMPSITES } from '../../shared/campsites'

const Main = (props) => {
    const [campsites, setCampsites] = useState(CAMPSITES)
    const [selected, setSelected] = useState(null)

    const onCampsiteSelect = (campID) => {
        setSelected(campID)
    }

    return (
        <div>
            <NavbarComp />
            <Directory campsites={campsites} 
            onClick={campsiteID => onCampsiteSelect(campsiteID.id)} />
        </div>
    )
}

export default Main;