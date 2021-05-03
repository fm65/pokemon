export class Pokemon {
	name: string;
	speed: number;
	constructor(name: string, speed: number) {
		this.name = name;
		this.speed = speed;
	}
	getName(){
		return this.name;
	}
	getSpeed(){
		return this.speed;
	}
}

export function attack(pokemon1: Pokemon, pokemon2: Pokemon){
	if (pokemon1.getSpeed() > pokemon2.getSpeed()){
		console.log(pokemon1.getName() + " attaque " + pokemon2.getName());
		return pokemon1;
	}
	else if (pokemon1.getSpeed() < pokemon2.getSpeed()) {
		console.log(pokemon2.getName() + " attaque " + pokemon1.getName());
		return pokemon2;
	}
	else {
		console.log("***WARNING: undefined behavior");
		return undefined;
	}
}