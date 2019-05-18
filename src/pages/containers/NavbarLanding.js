import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap'


import PropTypes from 'prop-types';

export class NavbarLanding extends Component {
    state = {
        color:'dark',
        theposition:0,
        isOpen: false
    };

    toggle = ()=> {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    listenToScroll = () => {
    
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop

      this.setState({
        theposition: scrolled,
        color: (this.state.theposition<this.props.scroll)?"transparent":"dark"
      })
    }
  
    componentDidMount() {
        if(typeof this.props.scroll != "undefined"){
            this.setState({
                color: "transparent"
            })
            window.addEventListener('scroll', this.listenToScroll)
        }
    }
  render() {
    return (
        <Navbar fixed="top" color={this.state.color} dark expand="md">
            <NavbarBrand href="/">Kegovc</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">
                        Facebook
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/Kegovc">
                        GitHub
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://www.linkedin.com/in/octavio-villavicencio-cruz-785463110/">
                        Linkedin
                    </NavLink>
                </NavItem>
                
            </Nav>
            </Collapse>
        </Navbar>
      
    )
  }
}

NavbarLanding.propTypes = {
    sroll: PropTypes.number
  };

export default NavbarLanding
