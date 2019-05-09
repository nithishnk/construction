import React, { Component } from 'react'
import Section from './component/threesection/Section'
import Features from './component/features/Features';
import About from './component/about/About';
import SectionTwo from './component/sectiontwo/SectionTwo'
<<<<<<< HEAD
import SectionFive from './component/SectionFive/SectionFive'
=======

import Navbar from '../src/component/Navbar/Navbar'

>>>>>>> 6299c96f30a5af328362b37b23d38029eb03a26e

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <SectionTwo/>
      <Section/>
      <Features/>
<<<<<<< HEAD
      <SectionFive/>
=======
      <About/>
>>>>>>> 6299c96f30a5af328362b37b23d38029eb03a26e
      </div>
    )
  }
}
