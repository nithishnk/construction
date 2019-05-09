import React, { Component } from 'react'
import add from '../../images/add.svg'
import '../Section-Six/sectionsix.css'

export default class About extends Component {
state={
  data:[
    {
      image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Warren carson 09-05-2019",span:"Lorem Ipsum is simply dummy Ipsum is simply dummy Ipsum is simply dummy "
    },
    {
      image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Warren carson 09-05-2019",span:"Lorem Ipsum is simply dummy Ipsum is simply dummy Ipsum is simply dummy "
    },
    {
      image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Warren carson 09-05-2019",span:"Lorem Ipsum is simply dummy Ipsum is simply dummy Ipsum is simply dummy"
    },
    {
      image:add,title:"Lorem Ipsum is simply dummy text.",paragraph:"Warren carson 09-05-2019",span:"Lorem Ipsum is simply dummy Ipsum is simply dummy Ipsum is simply dummy "
    },
    
  ]
}
  render() {
    return (
      
      <div className="container">
      <div className="row mx-0">
      <div className="col-md-12 txt-algn pb-5 pt-5" >
      <h1>Our painter & company</h1>
      <h1>latest news</h1>
      </div>
      <div className="row mx-0">
      {this.state.data.map(description =>{
        return(
          
          <div className="col-md-6 pb-5 d-flex ">
          <div>
          <img className="icon-responsive" src={description.image}></img>
          </div>
          <div>
          <h5 className="">{description.title}</h5>
          <p className="text-size text-clr">{description.paragraph}</p>
          <span className="text-size txt-clr-gray">{description.span}</span>
          </div>
          </div>
          
        )}
        
      )}
      </div>
      </div>
      </div>
      
    )
  }
}
