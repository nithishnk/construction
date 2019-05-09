import React, { Component } from 'react'
import SectionOne from '../src/component/Section-one/SectionOne'
import SectionTwo from './component/Section-Two/SectionTwo'
import SectionThree from './component/Section-Three/SectionThree'
import SectionFour from '../src/component/Section-Four/SectionFour';
import SectionSix from '../src/component/Section-Six/SectionSix';

import SectionFive from './component/SectionFive/SectionFive'


export default class App extends Component {
  render() {
    return (
      <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      </div>
    )
  }
}
