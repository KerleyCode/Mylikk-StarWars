import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card"

export const Home = () => {
	const { store, actions, } = useContext(Context);

	return (
		<div className="text-left mt-5">
			<div>
				<h1 className="text-danger">People</h1>
				<div className="row flex-row flex-nowrap overflow-auto" >
					{store.people.map(person => (
						<div className="col-auto" key={person.id}>
							<Card
								item={person}
								category="people"
								uid={person.uid}
							/>
						</div>
					))}
				</div>
			</div>

			<div>
				<h1 className="text-danger">Vehicles</h1>
				<div className="row flex-row flex-nowrap overflow-auto" >
					{store.vehicles.map(machinery => (
						<div className="col-auto" key={machinery.id}>
							<Card
								item={machinery}
								category="vehicles"
								uid={machinery.uid}
							/>
						</div>
					))}
				</div>
			</div>

			<div>
				<h1 className="text-danger">Planets</h1>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.planets.map(planets => (
						<div className="col-auto" key={planets.id}>
							<Card
								item={planets}
								category="planets"
								uid={planets.uid}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
