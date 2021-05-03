import { Pokemon, attack } from './pokemon';


test('pokemon1 attaque pokemon2', () => {
	let pkm1 = new Pokemon("Pokemon1", 7);
	let pkm2 = new Pokemon("Pokemon2", 4);
  	expect(attack(pkm1, pkm2)).toBe(pkm1);
});

test('pokemon2 attaque pokemon1', () => {
	let pkm1 = new Pokemon("Pokemon1", 7);
	let pkm2 = new Pokemon("Pokemon2", 9);
  	expect(attack(pkm1, pkm2)).toBe(pkm2);
});

test('undefined behavior', () => {
	let pkm1 = new Pokemon("Pokemon1", 10);
	let pkm2 = new Pokemon("Pokemon2", 10);
  	expect(attack(pkm1, pkm2)).toBe(undefined);
});