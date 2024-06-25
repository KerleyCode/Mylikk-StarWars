const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[], 
			vehicles:[],
			planets:[],
			favorites:[],
			apiURL:"https://www.swapi.tech/api"
		},
		actions: {
		getPeople:() => {
			let store=getStore()
			fetch(store.apiURL+"/people")
			.then(resp => resp.json())
			.then(data => setStore({
				people:data.results
			}))
			.catch(error => console.log(error))
		},	
		
		getPlanets:() => {
			let store=getStore()
			fetch(store.apiURL+"/planets")
			.then(resp => resp.json())
			.then(data => setStore({
				planets:data.results
			}))
			.catch(error => console.log(error))
		},	

		getVehicles:() => {
			let store=getStore()
			fetch(store.apiURL+"/vehicles")
			.then(resp => resp.json())
			.then(data => setStore({
				vehicles:data.results
			}))
			.catch(error => console.log(error))
		}	
		}
	};
};

export default getState;
