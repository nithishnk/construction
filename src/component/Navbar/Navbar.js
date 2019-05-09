import React, { Component } from 'react';
import './navbar.css';
import Logo from '../../images/paint.svg';
import {Nav,Navbar} from 'react-bootstrap'

export default class TopNavbar extends Component {
    state = {
        navbar : [
        {id:'1',navname:'Home',link:'/home'},
        {id:'2',navname:'Residential',link:'/residential'},
        {id:'3',navname:'Commercial',link:'/commercial'},
        {id:'4',navname:'Portfolio',link:'/portfolio'},
        {id:'5',navname:'About Us',link:'/about_us'},
        {id:'6',navname:'Contacts',link:'/contacts'}
      ]
    }
  render() {
    return (
      <div>
         
         <Navbar className="p-0 sticky-top fixed-top" collapseOnSelect expand="lg" bg="light" variant="light">
         <div><Navbar.Brand className="renv-logo"><img src={Logo}/></Navbar.Brand></div>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    {this.state.navbar.map(navitem =>{
                                return(
                                  // <Link to={navitem.link}>
                    <Nav.Link className="p-4 navb-li">{navitem.navname}</Nav.Link>
                        //  </Link>
                                )})}
                    <Nav.Link className="call p-4">CALL: +91 9876543210</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
          </Navbar>

      </div>
    )
  }
}
