
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const { id, type } = useParams();

  useEffect(() => {
    if (type === "people") {
      actions.getPeopleDetails(id);
    } else if (type === "planets") {
      actions.getPlanetDetails(id);
    } else if (type === "vehicles") {
      actions.getVehicleDetails(id);
    }
  }, [id, type, actions]);

  return (
    <div className="jumbotron">
      {type === "people" && (
        <div>
          <h1 className="display-4">{store.peopleDetails.name}</h1>
          {/* Display people details */}
        </div>
      )}
      {type === "planets" && (
        <div>
          <h1 className="display-4">{store.planetDetails.name}</h1>
          {/* Display planet details */}
        </div>
      )}
      {type === "vehicles" && (
        <div>
          <h1 className="display-4">{store.vehicleDetails.name}</h1>
          {/* Display vehicle details */}
        </div>
      )}
    </div>
  );
};

Details.propTypes = {
	match: PropTypes.object
};

