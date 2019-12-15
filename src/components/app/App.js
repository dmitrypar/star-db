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
import Row from "../row/row";


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
                        <Header onServiceChange={this.onServiceChange}/>;

                        {planet}

                        <Row
                            left={<PersonList/>}
                            right={<PersonDetails itemId={11}/>}
                        />

                        <Row
                            left={<PlanetList/>}
                            right={<PlanetDetails itemId={3}/>}
                        />

                        <Row
                            left={<StarshipList/>}
                            right={<StarshipDetails itemId={3}/>}
                        />

                    </div>

                </SwapiServiceProvider>

            </ErrorBoundry>
        )
    }
}