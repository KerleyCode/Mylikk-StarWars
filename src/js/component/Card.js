import React, {useContext} from "react";
import { Link } from "react-router-dom"
import {Context} from '../store/appContext'



export const Card = ({ item, category,uid }) => {
  const{store, actions}=useContext(Context)
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
          <button type="button" class="btn btn-primary" onClick={() => {actions.addFavorite(item)}}><i class="fa-regular fa-heart"></i></button>
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