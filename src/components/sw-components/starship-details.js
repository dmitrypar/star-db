import React from 'react';
import ItemDetails, {Record}  from '../item-details/item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';


const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {({getStarship,getStarshipImage})=>{
                return (
                    <ItemDetails
                        itemId={itemId}
                        getData={getStarship}
                        getImageUrl={getStarshipImage}>

                        <Record field="name" label = "Name"/>
                        <Record field="model" label = "Model"/>

                    </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>

    );
};


export default StarshipDetails;