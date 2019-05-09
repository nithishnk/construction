import React, { Component } from 'react'
import '../../index.css'
import '../Section-Four/sectionfour.css'
import banner from '../../images/banner.png'
import schedule from '../../images/schedule.svg'
import clean from '../../images/clean.svg'
import certified from '../../images/certified.svg'
import color from '../../images/color-card.svg'

export default class Features extends Component {
state={
  data :[
    {customStyle:"col-md-6 p-0 d-flex align-items-center",image:schedule,span:"Flexible scheduling option"
    },
    {customStyle:"col-md-6 p-0 d-flex align-items-center",image:certified,span:"PDCA certified member"
    },
    {customStyle:"col-md-6 p-0 d-flex align-items-center",image:color,span:"Free color consultation"
    },
    {customStyle:"col-md-6 p-0 d-flex align-items-center",image:clean,span:"Maintain a clean work area"
    },
  ]
}


  render() {
    return (
      <div className="row mx-0 section-color">

        <div className="col-md-5">
        <img className="img-fluid" src={banner}></img>
        </div>
        <div className="col-md-6 d-flex align-items-center">
        <div>
        <h1 className="text-color">Welcome to</h1>
        <h1 className="text-color">Painter</h1>
        <p className="text-color">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="row mx-0 mt-5">

        {this.state.data.map(description =>{
          return(
        <div className={description.customStyle}>
        <img className="icon-responsive" src={description.image}></img>
        <div>
        <span className="text-color">{description.span}</span>
        </div>
        </div>
        )
      }
        )}
      
        </div>
        </div>
      </div>
      </div>
      )
    }
  }
  
