import React from "react";
import {Link} from "react-router-dom"

export const Card = ({item, category}) => {
	return (
        <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={"/"+category+"/"+item.id}><a className="btn btn-primary">Press here</a></Link>
  </div>
</div>
	
);
}

//Create route for LINK 
// CREAT DETAILS PAGE 
//- fetch details of person plant and vehicles
// create functions for favorites