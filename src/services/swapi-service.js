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

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results
        // преобразуем фунцию просто в массив людей
    };

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    };


    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results
        // преобразуем фунцию просто в массив людей
    };

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    };

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`)
        return res.results
        // преобразуем фунцию просто в массив людей
    };

    getStarShip(id) {
        return this.getResource(`/starships/${id}/`)
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





