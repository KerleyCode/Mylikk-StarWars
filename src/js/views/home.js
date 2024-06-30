import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card"

export const Home = () => {
	const { store, actions, } = useContext(Context);

	return (
		<div className="text-left px-5">
			<style>
				{`
     .row.flex-row.flex-nowrap.overflow-auto::-webkit-scrollbar {
  height: 8px;
  border-radius: 4px;
  border: 1px solid black; 
}

.row.flex-row.flex-nowrap.overflow-auto::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.row.flex-row.flex-nowrap.overflow-auto::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

    `}
			</style>

			<div>
				<h1 className="text-danger">People</h1>
				<div className="row flex-row flex-nowrap flex-nowrap overflow-auto rounded">
					{store.people.map(person => (
						<div className="col-auto mb-4" key={person.id}>
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
						<div className="col-auto pb-3" key={machinery.id}>
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
				<div className="row flex-row flex-nowrap overflow-auto ">
					{store.planets.map(planets => (
						<div className="col-auto pb-3" key={planets.id}>
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
