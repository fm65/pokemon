export class Pokemon {
	name: string;
	speed: number;
	life: number;
	constructor(name: string, speed: number, life: number) {
		this.name = name;
		this.speed = speed;
		this.life = life;
	}
	getName(){
		return this.name;
	}
	getSpeed(){
		return this.speed;
	}
	getLife(){
		return this.life;
	}
}

export class Fight{
	pokemon1: Pokemon;
	pokemon2: Pokemon;
	constructor(pokemon1: Pokemon, pokemon2: Pokemon){
		this.pokemon1 = pokemon1;
		this.pokemon2 = pokemon2;
	}
	
	firstAttacking(){
		if (this.pokemon1.getSpeed() > this.pokemon2.getSpeed()){
			console.log(this.pokemon1.getName() + " attaque " + this.pokemon2.getName());
			return this.pokemon1;
		}
		else if (this.pokemon1.getSpeed() < this.pokemon2.getSpeed()) {
			console.log(this.pokemon2.getName() + " attaque " + this.pokemon1.getName());
			return this.pokemon2;
		}
		else {
			console.log("***WARNING: undefined behavior");
			return undefined;
		}
	}
	
	isPokemonDead(pokemon: any): boolean {
		return pokemon.life <= 0;
	}
	
	async processFight() {
		const firstAttacking = this.firstAttacking();
		const lastAttacking = firstAttacking == this.pokemon1 ? this.pokemon2: this.pokemon1;
		
		while(!this.isPokemonDead(firstAttacking) || !this.isPokemonDead(lastAttacking)) {
			await this.processAttack(firstAttacking, lastAttacking);
			if (!this.isPokemonDead(lastAttacking)) {
				await this.processAttack(lastAttacking, firstAttacking);
			}
		}
	}

	async processAttack(pokemon1: any, pokemon2: any): Promise<void> {
		pokemon2.life -=1;
		if (this.getNumber(0, 1) == 0) {
			pokemon1.life -=1;	
		}
		else {
			pokemon2.life -=1;
		}
	}

	getNumber(min: number, max: number) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	winner(): Pokemon {
		return this.isPokemonDead(this.pokemon1) ? this.pokemon1: this.pokemon2;
	}
	
}

let pkm1 = new Pokemon("Pokemon1", 7, 5);
let pkm2 = new Pokemon("Pokemon2", 4, 5);
let fight = new Fight(pkm1, pkm2);
fight.processFight();
console.log("The winner is : ", fight.winner());


