import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Navigation extends Component{
  render(){
    return(
      <div class = 'navigation'>
        <Navbar  color="light" light expand="md">
          <NavbarBrand href="/">Kayak Kings</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#book">Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Navigation