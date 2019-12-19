

const reduser = (state=0, action) => {

	switch(action.type) {
case 'INC':
return state + 1;
default:
return state;

	}

};

let state = reduser(undefined, {})

state = reduser(state, {type:'INC'});
console.log(state);

state = reduser(state, {type:'INC'});

console.log(state);