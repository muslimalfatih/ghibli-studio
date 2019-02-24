import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bulma-components'
import GhibliIcon from '../assets/studio-ghibli-logo.png'

class Header extends Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <Container>
          <Navbar style={{ marginBottom: '20px'}}>
            <Navbar.Brand>
              <img src={GhibliIcon} alt="Ghibli's Studio"/>
            </Navbar.Brand>

            <Navbar.Menu>
              <NavLink exact to="/">Films</NavLink>
              <NavLink exact to="/people">People</NavLink>
              <NavLink exact to="/locations">Locations</NavLink>
              <NavLink exact to="/species">Species</NavLink>
              <NavLink exact to="/vehicles">Vehicles</NavLink>
            </Navbar.Menu>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header;