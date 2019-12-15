import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorBoundry from "../error-boundry";

import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './App.css';




export default class App extends Component {



    state = {
        showRandomPlanet: true,
        swapiService: new DummySwapiService()
    };

     onServiceChange = () => {
         this.setState(({swapiService})=>{
             const Service = swapiService instanceof SwapiService ?
                 DummySwapiService : SwapiService;
                 console.log('Change', Service.name);
                 return {
                     swapiService: new Service()
                 }
         }

         );

    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;


        return (
            <ErrorBoundry>

                <SwapiServiceProvider value={this.state.swapiService}>

                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>;
                        // planett


                        //Row

                        <div>

                            <PersonDetails itemId={11}/>

                            <PlanetDetails itemId={3}/>
                            <StarshipDetails itemId={3}/>

                            <PersonList>

                            </PersonList>

                            <StarshipList>

                            </StarshipList>

                            <PlanetList>

                            </PlanetList>

                        </div>


                    </div>

                </SwapiServiceProvider>

            </ErrorBoundry>
        );
    }
}


/*          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>*/

/*     <PeoplePage />*/


/*<Row
left={personDetails}
right={starshipDetails}
/>*/


/* { planet }*/