import React, {Component} from 'react';
import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


export default class App extends Component   {
  
state = {
    showRandomPlanet: true,
    selectedPerson: null
};


onPersonSelected = (id) => {
    this.setState({
        selectedPerson: id
    });
};





/*  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };*/

render() {


console.log(this.state.selectedPerson);

return (

<div>
    <div>
    <Header/>
        <RandomPlanet />
    </div>
    <div className="row">
        <div className="col-md-6 mb2">
            <ItemList onItemSelected={this.onPersonSelected}/>
        </div>
        <div className="col-md-6">
            <PersonDetails  personId = {this.state.selectedPerson}/>
        </div>
    </div>
    <div>

    </div>
</div>
  );

}
  
}


