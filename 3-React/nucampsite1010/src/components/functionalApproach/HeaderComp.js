import React, {useState} from 'react'
import NavbarComp from './NavbarComp'
import { Jumbotron } from 'reactstrap'

const Header = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Nucamp</h1>
                            <h2>A better way to camp</h2> 
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <NavbarComp isNavOpen={isNavOpen} toggleNav={toggleNav}/>
        </div>
    )
}

export default Header;