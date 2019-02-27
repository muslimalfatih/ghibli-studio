import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bulma-components'
import GhibliIcon from '../assets/studio-ghibli-logo.png'

interface TProps {
}

interface TState {
  open: boolean
}
class Header extends Component<TProps, TState> {
  constructor(props: any) {
    super(props)

    this.state = {
      open: false
    }

    this.handleCollapseNav = this.handleCollapseNav.bind(this)
  }

  handleCollapseNav() {
    this.setState({open: false})
  }


  render() {
    return (
      <div className="header">
        <Container>
          <Navbar style={{ marginBottom: '20px' }} active={this.state.open}>
            <Navbar.Brand>
              <Link to="/"><img src={GhibliIcon} alt="Ghibli's Studio" /></Link>
            </Navbar.Brand>
            <Navbar.Burger
              onClick={() =>
                this.setState((state) => ({ open: !state.open}))
              }
            />

            <Navbar.Menu>
              <NavLink exact to="/" onClick={this.handleCollapseNav}>Films</NavLink>
              <NavLink to="/people" onClick={this.handleCollapseNav}>People</NavLink>
              <NavLink to="/locations" onClick={this.handleCollapseNav}>Locations</NavLink>
              <NavLink to="/species" onClick={this.handleCollapseNav}>Species</NavLink>
              <NavLink to="/vehicles" onClick={this.handleCollapseNav}>Vehicles</NavLink>
            </Navbar.Menu>
          </Navbar>
        </Container>
      </div>
    )
  }
}

export default Header;