import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";


export const Card = ({ item, category,uid }) => {
  return (

    <div className="col-3">
    <div className="card" style={{ width: "18rem" }}>
      <img src={`https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' : 
  category === 'vehicles' ? 'vehicles' : 
  category === 'planets' ? 'planets' : ''}/${uid}.jpg`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       
       
        <div class="hstack gap-5">

        
        <div className="pt-2">
        <Link to={"/" + category + "/" + item.id}><a className="btn btn-primary">LEARN MORE</a></Link>
        </div>
         <div className="pt-2">
          <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></button>
</div>
</div>

      </div>
      </div>
      </div>
    

  );
}




//Create route for LINK 
// CREAT DETAILS PAGE 
//- fetch details of person plant and vehicles
// create functions for favorites