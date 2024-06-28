import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#"><img style={{ width: "50px" }} src="https://static.wikia.nocookie.net/20thcenturyfox/images/2/21/Star_Wars_logo.png/revision/latest?cb=20201122222349" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-end w-100">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle btn btn-primary text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {store.favorites.map(favorite => (<li><a className="dropdown-item" href="#">{favorite.name}
                  {""}<span onClick={() => { actions.deleteFavorite(favorite.name) }}> <i className="fa-solid fa-trash-can"></i> </span>
                </a></li>))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


