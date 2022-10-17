import React, { Component } from 'react';
import { Navbar,NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
export default function Navigation(){
        return (
            <Navbar style={{backgroundColor: 'black', color: 'white'}} 
            alignLinks="right"
            id="mobile-nav"
            menuIcon={<Icon >menu</Icon>}
          >
            <NavItem>
            <Link to="/" className='noTransition'><Icon left>home</Icon>Home</Link>
            </NavItem>
            <NavItem href="/contact">
            <Link to="/contact" className='noTransition'><Icon left>contact_page</Icon>Contact</Link>
            </NavItem>
          </Navbar>
        )
}