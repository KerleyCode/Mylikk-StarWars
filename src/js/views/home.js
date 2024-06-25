import React, {useContext} from "react";
import { Context } from "../store/appContext";
import{Card} from "../component/Card"


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	<div className="text-center mt-5">
		<div>
			<h1>People</h1>
			<div className="row">
				{store.people.map(person => {
					return (
						<Card key={person.id}
						item={person}
						category="people"
						
						/>
					)
				})	}
			</div>
		</div>
		<div>
			<h1>Vehicles</h1>
			<div className="row">
				
			</div>
		</div>
		<div>
			<h1>
				Planets
			</h1>
			<div className="row">
				
			</div>
		</div>
	</div>
);
}