import React, {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom"
import {Context} from '../store/appContext'

export const Card = ({ item, category,uid }) => {
  const{store, actions}=useContext(Context)
  const navigate = useNavigate();
  const[imageURL, setImageURL]=useState(`https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' : 
        category === 'vehicles' ? 'vehicles' : 
        category === 'planets' ? 'planets' : ''}/${uid}.jpg`)
  const handleClick = () => {
    navigate(`/category/${category}/${uid}`);
  }

  return (
    <div className=" row-1 col-1">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageURL} onError={()=>setImageURL("https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg")} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="hstack gap-5">
            
            <div className="pt-2">
              <Link to={`/details/${category}/${uid}`} onClick={handleClick}>
                <a className="btn btn-primary">LEARN MORE</a>
              </Link>
            </div>
            
            <div className="pt-2">
              <button type="button" className="btn btn-primary" onClick={() => {actions.addFavorite(item)}}>
                <i className="fa-regular fa-heart"></i>
              </button>
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
