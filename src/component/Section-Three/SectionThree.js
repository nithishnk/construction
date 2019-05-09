import React, { Component } from 'react'
import '../Section-Three/sectionthree.css'
import restoration from '../../images/restoration.svg'
import residential from '../../images/residential.svg'
import commercial from '../../images/commercial.svg'
export default class Section extends Component {
  state ={
    data :[
      {customStyle:"col-md-4 p-4 d-flex align-items-center restoration",title:'Restoration',parag:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',image:restoration},
      {customStyle:"col-md-4 p-4 d-flex align-items-center residential",title:'Residential',parag:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',image:residential},
      {customStyle:"col-md-4 p-4 d-flex align-items-center commercial",title:'Commercial',parag:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',image:commercial},
    ]
  }
  render() {
    return (

    <div className="row mx-0">
      {this.state.data.map(description =>{
        return(
          <div className={description.customStyle}>
            <img className="sectionTwoimage float-left" src={description.image}></img>
            <div>
              <h1 className="text-white title" >{description.title}</h1>
              <p className="text-white content">{description.parag}</p>
            </div>
      </div>
        )
      })}
    
    </div>
    


    )
  }
}
