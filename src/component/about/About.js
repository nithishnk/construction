import React, { Component } from 'react'
import add from '../../images/add.svg'

export default class About extends Component {
state={
  data:[
    {
      customStyle:"col-md-6 p-5 d-flex ",image:add,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",paragraph:"Lorem Ipsum is simply dummy text",span:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
    },
    {
      customStyle:"col-md-6 p-5 d-flex ",image:add,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",paragraph:"Lorem Ipsum is simply dummy text",span:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
    },
    {
      customStyle:"col-md-6 p-5 d-flex",image:add,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",paragraph:"Lorem Ipsum is simply dummy text",span:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
    },
    {
      customStyle:"col-md-6 p-5 d-flex ",image:add,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",paragraph:"Lorem Ipsum is simply dummy text",span:"Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
    }
  ]
}






  render() {
    return (
      <div className="row mx-0">
      <div className="col-md-12 p-5">
      <h1 className="d-flex justify-content-center">Our painter & company</h1>
      <h1 className="d-flex justify-content-center">latest news</h1>
      </div>
      <div className="row mx-0">
      {this.state.data.map(description =>{
        return(
          <div className={description.customStyle}>
          <img className="icon-responsive" src={description.image}></img>
          <h5 className="">{description.title}</h5>
          <span className="">{description.paragraph}</span>
          <p>{description.span}</p>

          </div>
        )}
      )}
      </div>
      </div>
    )
  }
}
