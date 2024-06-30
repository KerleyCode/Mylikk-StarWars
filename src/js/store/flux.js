const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		vehicles: [],
		planets: [],
		favorites: [],
		peopleDetails: {
		  description: "",
		  properties: {}
		},
		vehicleDetails: {
		  description: "",
		  properties: {}
		},
		planetDetails: {
		  description: "",
		  properties: {}
		},
		
		apiURL: "https://www.swapi.tech/api"
	  },
	  actions: {
		getPeople: () => {
		  let store = getStore();
		  fetch(store.apiURL + "/people")
			.then(resp => resp.json())
			.then(data => setStore({ people: data.results }))
			.catch(error => console.log(error));
		},
		getPeopleDetails: (id) => {
		  let store = getStore();
		  fetch(`${store.apiURL}/people/${id}`)
			.then((response) => {
			  if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			  }
			  return response.json();
			})
			.then((data) => {
			  const peopleDetails = {
				description: data.result.description,
				properties: { ...data.result.properties },
			  };
			  setStore({ peopleDetails: peopleDetails });
			})
			.catch((error) => {
			  console.log(error);
			});
		},
		getPlanets: () => {
		  let store = getStore();
		  fetch(store.apiURL + "/planets")
			.then(resp => resp.json())
			.then(data => setStore({ planets: data.results }))
			.catch(error => console.log(error));
		},
		getPlanetDetails: (id) => {
		  let store = getStore();
		  fetch(`${store.apiURL}/planet/${id}`)
			.then((response) => {
			  if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			  }
			  return response.json();
			})
			.then((data) => {
			  const planetDetails = {
				description: data.result.description,
				properties: { ...data.result.properties },
			  };
			  setStore({ planetDetails: planetDetails });
			})
			.catch((error) => {
			  console.log(error);
			});
		},
		getVehicles: () => {
		  let store = getStore();
		  fetch(store.apiURL + "/vehicles")
			.then(resp => resp.json())
			.then(data => setStore({ vehicles: data.results }))
			.catch(error => console.log(error));
		},
		getVehicleDetails: (id) => {
		  let store = getStore();
		  fetch(`${store.apiURL}/vehicle/${id}`)
			.then((response) => {
			  if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			  }
			  return response.json();
			})
			.then((data) => {
			  const vehicleDetails = {
				description: data.result.description,
				properties: { ...data.result.properties },
			  };
			  setStore({ vehicleDetails: vehicleDetails });
			})
			.catch((error) => {
			  console.log(error);
			});
		},
		addFavorite: (favorite) => {
			let store = getStore();
			if (!store.favorites.some((item) => item.name === favorite.name)) {
			  setStore({ favorites: [...store.favorites, favorite] });
			} 
		  },
		  
		deleteFavorite: (item) => {
			let store = getStore();
			setStore({ favorites: store.favorites.filter((favorite) => favorite.name !== item.name) });
		  },
	  }
	};
  };
  
  export default getState;
  
