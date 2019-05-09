import React, { Component } from 'react'
import add from '../../images/add.svg'
import '../about/about.css'

export default class About extends Component {
state={
  data:[
    {
      customStyle:"col-md-6 d-flex",textGrid:"col-md-5",image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Lorem Ipsum is simply ",span:"Lorem Ipsum is simply dummy "
    },
    {
      customStyle:"col-md-6 d-flex",textGrid:"col-md-5",image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Lorem Ipsum is simply ",span:"Lorem Ipsum is simply dummy "
    },
    {
      customStyle:"col-md-6 d-flex",textGrid:"col-md-5",image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Lorem Ipsum is simply ",span:"Lorem Ipsum is simply dummy "
    },
    {
      customStyle:"col-md-6 d-flex",textGrid:"col-md-5",image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Lorem Ipsum is simply ",span:"Lorem Ipsum is simply dummy "
    }
  ]
}
  render() {
    return (
      <div>
      <div className="container">
      <div className="row mx-0">
      <div className=" ">
      <h1 className="">Our painter & company</h1>
      <h1 className="">latest news</h1>
      </div>
      <div className="row mx-0">
      {this.state.data.map(description =>{
        return(
          
          <div className={description.customStyle}>
          <div className={description.imgGrid}>
          <img className="icon-responsive" src={description.image}></img>
          </div>
          <div className={description.textGrid}>
          <h5 className="">{description.title}</h5>
          <span className="">{description.paragraph}</span>
          <p>{description.span}</p>
          </div>
          </div>
          
        )}
        
      )}
      </div>
      </div>
      </div>
      </div>
    )
  }
}
