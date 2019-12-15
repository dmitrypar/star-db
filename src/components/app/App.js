import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorBoundry from "../error-boundry";

import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';


import './App.css';

import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";


export default class App extends Component {


    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
                const Service = swapiService instanceof SwapiService ?
                    DummySwapiService : SwapiService;
                console.log('Change', Service.name);
                return {
                    swapiService: new Service()
                }
            }
        );

    };


    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;


        return (
            <ErrorBoundry>

                <SwapiServiceProvider value={this.state.swapiService}>

                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>

                        {planet}

                        <PeoplePage itemId={11}/>

                        <PlanetsPage itemId={4}/>

                        <StarshipsPage itemId={8}/>

                    </div>

                </SwapiServiceProvider>

            </ErrorBoundry>
        )
    }
}