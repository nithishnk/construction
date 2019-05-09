import React, { Component } from 'react';
import Box1 from '../Box1/Box1';
import Box2 from '../Box2/Box2';


export default class SectionTwo extends Component {
  render() {
    return (
      <div className="row mx-0 bg-color row-align">
             <div className="col-lg-3 col-md-12 col-xl-4 p-0 bg-color">
             <Box1 />
             </div>
      <div className="col-lg-9 col-md-12 col-xl-8 p-0">
        <Box2 />
      </div>
      </div>
      
    );
  }
}
