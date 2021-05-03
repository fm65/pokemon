import { Pokemon, Fight } from './pokemon';


test('pokemon1 attaque pokemon2', () => {
	let pkm1 = new Pokemon("Pokemon1", 7, 5);
	let pkm2 = new Pokemon("Pokemon2", 4, 5);
	let fight = new Fight(pkm1, pkm2);
  	expect(fight.firstAttacking()).toBe(pkm1);
});

test('pokemon2 attaque pokemon1', () => {
	let pkm1 = new Pokemon("Pokemon1", 7, 5);
	let pkm2 = new Pokemon("Pokemon2", 9, 5);
	let fight = new Fight(pkm1, pkm2);
  	expect(fight.firstAttacking()).toBe(pkm2);
});

test('undefined behavior', () => {
	let pkm1 = new Pokemon("Pokemon1", 10, 5);
	let pkm2 = new Pokemon("Pokemon2", 10, 5);
	let fight = new Fight(pkm1, pkm2);
  	expect(fight.firstAttacking()).toBe(undefined);
});