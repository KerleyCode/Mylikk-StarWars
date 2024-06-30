import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../store/appContext'

export const Card = ({ item, category, uid }) => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState(`https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' :
    category === 'vehicles' ? 'vehicles' :
      category === 'planets' ? 'planets' : ''}/${uid}.jpg`)
  const handleClick = () => {
    navigate(`/details/${category}/${uid}`);
  }

  return (
    <div className=" row-1 col-1">
      <div className="card" style={{ width: "18rem" }}>

        <img src={imageURL} onError={() => setImageURL("https://i.pinimg.com/originals/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg")} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title fs-5">{item.name}</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="hstack gap-5 justify-content-lg-between">

            <div className="pt-2">
              <Link to={`/details/${category}/${uid}`} onClick={handleClick}>
                <a className="btn btn-outline-primary">Learn more!</a>
              </Link>
            </div>

            <div className="pt-2">
              <button type="button" className="btn btn-outline-warning" onClick={() => { actions.addFavorite(item) }}>
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






