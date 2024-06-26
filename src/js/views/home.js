import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card"


export const Home = () => {
	const { store, actions, } = useContext(Context);



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
								uid={person.uid}


							/>
						)
					})}
				</div>
			</div>

			<div>
				<h1>Vehicles</h1>
				<div className="row">
					{store.vehicles.map(machinery => {
						return (
							<Card key={machinery.id}
								item={machinery}
								category="vehicles"
								uid={machinery.uid}


							/>

						)
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map(planets => {
						return (
							<Card key={planets.id}
								item={planets}
								category="planets"
								uid={planets.uid}


							/>
						)
					})}
				</div>
			</div>
			</div>
			);
			
}