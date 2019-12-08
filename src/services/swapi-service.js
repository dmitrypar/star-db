export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(
                `Could not dostigaite ${url} ` +
                ` , received ${res.status}`)
        }
        ;
      
        return await res.json();
    }


   getAllPlanets =  async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet)
        // преобразуем фунцию просто в массив людей
    };

   getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet);
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
        // преобразуем фунцию просто в массив людей
    };

   getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person);
    };


   getAllStarShips = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship)
        // преобразуем фунцию просто в массив людей
    };

    getStarShip = async (id)=> {
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starship);
    };


    _extractId = (item) => {

        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];

    };


    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }

    };


    _transformStarship = (starship) => {

        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            passangers: starship.passangers
        }

    };


    _transformPerson = (person) => {

        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }

    };


};

const swapi = new SwapiService();

/*swapi.getAllPeople().then((body)=>{
console.log(body);
})*/
//variant 1 - get all data

/*swapi.getAllPeople().then((people) => {
people.forEach((p)=>{console.log(p.name);
})*/
//variant 2 - get all name

swapi.getPerson(3).then((p) => {
    console.log(p.name);
})
//variant 3 - get target name


/*fetch('https://swapi.co/api/people/1/')
.then((res)=> {
console.log('Got Response', res.status);
});*/


/*fetch('https://swapi.co/api/people/1/')
.then((res)=> {
return res.json();
})
.then((body)=> {
console.log(body);
});*/


/*const getResource = async (url) => {
const res = await fetch(url);
const body = await res.json();
//запрос данных с сервера
return body;
};

getResource('https://swapi.co/api/people/1/')
.then((body)=> {
console.log(body);
})
.catch((err)=> {
	console.error('Could not fetch', err);
});*/


/*const getResource = async (url) => {
const res = await fetch(url);

if (!res.ok) {
	throw new Error (
		`Could not dostigaite ${url} ` + 
		` , received ${res.status}` )
};

const body = await res.json();
//запрос данных с сервера
return body;
};

getResource('https://swapi.co/api/people/1/')
.then((body)=> {
console.log(body);
})
.catch((err)=> {
	console.error('Could n fetch', err);
});*/


/*class SwapiService {

async getResource(url) {

const res = await fetch(url);

if (!res.ok) {
	throw new Error (
		`Could not dostigaite ${url} ` + 
		` , received ${res.status}` )
};

return await res.json();
}

getAllPeople() {
	return this.getResource(`https://swapi.co/api/people/`)
};
};

const swapi = new SwapiService();

swapi.getAllPeople().then((body)=>{
console.log(body);
})*/


/*class SwapiService {

_apiBase = 'https://swapi.co/api';

async getResource(url) {

const res = await fetch(`${this._apiBase}${url}`);

if (!res.ok) {
	throw new Error (
		`Could not dostigaite ${url} ` + 
		` , received ${res.status}` )
};

return await res.json();
}

getAllPeople() {
	return this.getResource(`/people/`)
};

getPerson(id) {
	return this.getResource(`/people/${id}/`)
};

};

const swapi = new SwapiService();

swapi.getAllPeople().then((body)=>{
console.log(body);
})*/





