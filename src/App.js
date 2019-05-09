import React, { Component } from 'react'
import Section from './component/threesection/Section'
import Features from './component/features/Features';
import About from './component/about/About';
import SectionTwo from './component/sectiontwo/SectionTwo'

import Navbar from '../src/component/Navbar/Navbar'


export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <SectionTwo/>
      <Section/>
      <Features/>
      <About/>
      </div>
    )
  }
}
