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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Kayak Kings</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Navigation