import React, { Component } from 'react'
import './Box1.css';
import Boxmodel from '../Boxmodel/Boxmodel';
export default class Box1 extends Component {
  render() {
    return (
      
        <div className="bg-color content style-content p-5 ">
      <div className="section">
        <h2 className="fontstyle">All the best painting tools you need</h2>
      </div>

      <div className=" pt-3 ">
      <div class="input-group  ">
  
  <div class="input-group-append">
  <Boxmodel/>
    
  </div>
      </div>
</div>
      </div>
     
    )
  }
}
