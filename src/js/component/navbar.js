import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

export const Navbar = () => {
  const{store, actions}=useContext(Context)
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img style={{width:"50px"}}src="https://static.wikia.nocookie.net/20thcenturyfox/images/2/21/Star_Wars_logo.png/revision/latest?cb=20201122222349"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle btn btn-primary text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul class="dropdown-menu">
            {store.favorites.map(favorite => (<li><a class="dropdown-item" href="#">{favorite.name}
               {" "}<span onClick={() => {actions.deleteFavorite(favorite.name)}}> <i  class="fa-solid fa-trash-can"></i> </span>
            </a></li>))}
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
