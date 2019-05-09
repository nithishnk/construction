import React, { Component } from 'react';
import '../Section-one/section.css';
import Logo from './paint.svg';
import {Nav,Navbar} from 'react-bootstrap'

export default class TopNavbar extends Component {
    state = {
        navbar : [
        {id:'1'},
        {id:'2',navname:'Home',link:'/home'},
        {id:'3',navname:'Residential',link:'/residential'},
        {id:'4',navname:'Commercial',link:'/commercial'},
        {id:'5',navname:'Portfolio',link:'/portfolio'},
        {id:'6',navname:'About Us',link:'/about_us'},
        {id:'7',navname:'Contacts',link:'/contacts'}
      ]
    }
  render() {
    return (
      <div>
         
         <Navbar className="p-0 stk" collapseOnSelect expand="lg" bg="light" variant="light">
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
