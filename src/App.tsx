import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
	people: {
		name: string,
		url: string,
		age: number,
		note?: string,
	}[]
}

function App () {

	const [people, setPeople] = useState<IState["people"]>([
		{
			name: "Sigi",
			age: 2,
			url: "https://cdn.unitycms.io/image/ocroped/1200,1200,1000,1000,0,0/FeDbTv4Ozb0/7vrINirQahQ8aciFi80ERm.jpg",
			note: "Siiiigiiii"
		}
	]);

	return (
		<div className='App'>
			<h1>People invited to my party</h1>
			<List people={people} />
		</div>
	);
}

export default App;
