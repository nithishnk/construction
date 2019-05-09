import React, { Component } from 'react'
import './SectionFive.css';
import constrct  from '../../images/construction.png';
import paintconstrct from '../../images/paintconstruction.png';
import house from '../../images/thumailhouse.png';
import painimage from '../../images/thumnail.png';
import backhouse from '../../images/thumnailimage.png';
export default class SectionFive extends Component {
  render() {
    return (
        <div class="container">
        <div className="text-container pt-5 pb-5">
        <h1 >Need Some Inspiration</h1>
      <p class="color-text">The caption class adds proper padding and a dark grey color to text inside thumbnails.</p>
        <p class="color-text">Click on the images to enlarge them.</p></div>
        <div class="row">
          <div class="col-md-7">
            <div class="thumbnail">
        <img className="d-block w-100" src={constrct} alt=" slide"/>
                <div className="caption p-3">
                  <h4>Lorem ipsum donec id elit at eget metus.</h4>
                </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="thumbnail">
            <img className="d-block w-100" src={paintconstrct} alt=" slide"/>
                <div className="caption-Second p-3">
                  <h4>Lorem ipsum donec id elit  at eget metus.</h4>
                </div>
            </div>
          </div>
        </div>
         <div class="row pt-4 pb-5">
          <div class="col-md-4">
            <div class="thumbnail">
              <img className="d-block w-100" src={painimage} alt=" slide"/>
                <div className="cap-text p-3">
                  <h4>Lorem ipsum donec id elit at eget metus.</h4>
                </div>
             </div>
            </div>
          <div class="col-md-4">
            <div class="thumbnail thumail-style p-2">
            {/* <img
            className="d-block w-100" src={backhouse} alt=" slide"/> */}
            <div className="cap p-3">
            <h4 >Painting Wall </h4>
            <hr className="line-width mb-3"></hr>
                  <h2>Lorem ipsum donec id elit at eget metus.</h2>
                </div>
                </div>
            </div>
          <div class="col-md-4">
            <div class="thumbnail">
              <img className="d-block w-100" src={house} alt=" slide"/>
                <div className="cap-text p-3">
                  <h4>Lorem ipsum donec id elit at eget metus.</h4>
                </div>
             </div>
            </div>
            </div>
</div>
       )
  }
}


