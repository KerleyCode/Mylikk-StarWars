import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const { uid, category } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/" + category + "/" + uid)
      .then(resp => resp.json())
      .then(data => setItem(data.result))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      navigate('/');
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="px-5">
      <div className="row px-5 mb-5">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={`https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' :
            category === 'vehicles' ? 'vehicles' :
              category === 'planets' ? 'planets' : ''}/${uid}.jpg`} className="img-fluid rounded mx-auto d-block"
            style={{ width: '800px', height: '600px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="text-center">
            {item?.properties.name}
          </h2>
          <p className="text-center">
            {item?.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at purus at nisi sollicitudin tincidunt ac finibus metus. Phasellus mollis est in leo congue tempus. Cras eu ligula eget diam sollicitudin mattis. In tortor libero, dapibus eu suscipit iaculis, lacinia eget nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac justo quis diam pretium suscipit. Phasellus sem tellus, tincidunt ac tempor et, volutpat ac turpis.
          </p>
        </div>
      </div>
      <div className="border-top border-danger border-2 mt-3 mb-3 px-5"></div>
      <div className="row text-danger mt-5 px-5">
        <div className="col">
          <h4> {category === "people" ? "Name" : category === "planets" ? "Name" : "Name"} </h4>
          <p>{item?.properties.name}</p>
        </div>
        <div className="col">
          <h4> {category === "people" ? "Gender" : category === "planets" ? "Climate" : "Model"} </h4>
          <p>{item?.properties.gender || item?.properties.climate || item?.properties.model}</p>
        </div>
        <div className="col">
          <h4> {category === "people" ? "Birth Year" : category === "planets" ? "Terrain" : "Vehicle Class"} </h4>
          <p>{item?.properties.birth_year || item?.properties.terrain || item?.properties.vehicle_class}</p>
        </div>
        <div className="col">
          <h4> {category === "people" ? "Height" : category === "planets" ? "Diameter" : "Length"} </h4>
          <p>{item?.properties.height || item?.properties.diameter || item?.properties.length}</p>
        </div>
        <div className="col">
          <h4> {category === "people" ? "Hair Color" : category === "planets" ? "Gravity" : "Crew"} </h4>
          <p>{item?.properties.hair_color || item?.properties.gravity || item?.properties.crew}</p>
        </div>
        <div className="col">
          <h4> {category === "people" ? "Skin Color" : category === "planets" ? "Orbital Period" : "Passengers"} </h4>
          <p>{item?.properties.skin_color || item?.properties.orbital_period || item?.properties.passengers}</p>
        </div>
      </div>

    </div>
  );
};
