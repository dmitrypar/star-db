import React from 'react';
import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


const App = () => {
  return (
<div>
    <div>
	<Header/>
        <RandomPlanet />
    </div>
    <div className="row">
        <div className="col-md-6 mb2">
            <ItemList/>
        </div>
        <div className="col-md-6">
            <PersonDetails />
        </div>
    </div>
    <div>

    </div>
</div>
  );
}

export default App;
