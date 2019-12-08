import React, {Component} from 'react';


import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";



export default class PeoplePage extends Component   {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        selectedItem: null,
        hasError: false
    };




    componentDidCatch() {
        console.log('componentDidCatchAAA');
        this.setState({hasError: true});
    };


    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };


    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }


        console.log(this.state.selectedItem);

        return (

            <div>

                <div className="row">
                    <div className="col-md-6 mb2">
                        <ItemList getData={this.swapiService.getAllPeople()}
                                  onItemSelected={this.onPersonSelected}
                                  renderItem={(item)=>item.name}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails   personId = {this.state.selectedItem}/>
                    </div>
                </div>




                <div>

                </div>
            </div>



        );

    }

}


