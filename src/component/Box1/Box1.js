import React, { Component } from 'react'
import './Box1.css';
import Boxmodel from '../Boxmodel/Boxmodel';
export default class Box1 extends Component {
  render() {
    return (
        <div className="content style-content pl-4 ">
      <div className="section">
        <h1 className="fontstyle">All the best painting tools you need</h1>
      </div>

      <div className="btngroup">
      <div class="input-group pt-5 pt-2 mb-3">
  
  <div class="input-group-append">
  <Boxmodel/>
    
  </div>
      </div>

      </div>
      </div>
    )
  }
}
