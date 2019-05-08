import React, { Component } from 'react'
import { Button, Modal,  } from 'react-bootstrap';

import './Boxmodel.css'
import ab from '../../images/dont.mp4';
export default class Boxmodel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button className="btn-click"  onClick={this.handleShow}>
          INTRO VIDEO
          <i class="fas fa-caret-right arow-style"></i>
            
            {/* <i class="fas fa-caret-right arow-style"></i> */}
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
           
            <video className="video-style" height="280px" controls autoplay muted>
            <source src="https://www.youtube.com/watch?v=KhqYI3rohbA" />
            <source src={ab}></source>
            </video>
         
          </Modal>
        </>
      );
    }
  }
  
