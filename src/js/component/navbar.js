import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const [showFavorites, setShowFavorites] = useState(false);

  const handleLogoClick = () => {
    actions.navigateToHome();
  };

  const handleFavoritesToggle = () => {
    setShowFavorites(!showFavorites);
  };

  const handleAddToFavorites = (favorite) => {
    actions.addFavorite(favorite);
    setShowFavorites(true);
  };

  const handleDeleteFavorite = (favorite) => {
    actions.deleteFavorite(favorite);
    setShowFavorites(true);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand" href="#"><img style={{ width: "50px" }} src="https://static.wikia.nocookie.net/20thcenturyfox/images/2/21/Star_Wars_logo.png/revision/latest?cb=20201122222349" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex justify-content-end w-100">
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle btn btn-primary text-white ${showFavorites ? 'show' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={showFavorites}
                onClick={handleFavoritesToggle}
              >
                Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
              </a>
              <ul className={`dropdown-menu dropdown-menu-end ${showFavorites ? 'show' : ''}`}>
                {store.favorites.length > 0 ? (
                  store.favorites.map((favorite) => (
                    <li key={favorite.name}>
                      <a className="dropdown-item d-flex justify-content-between" href="#">
                        <button type="button" className="btn btn-link" onClick={() => handleAddToFavorites(favorite)}>
                          {favorite.name}
                        </button>
                        <span onClick={() => handleDeleteFavorite(favorite)}>
                          <i className="fa-solid fa-trash-can"></i>
                        </span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item d-flex justify-content-center">(empty)</li>
                )}
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};



