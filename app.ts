// app.ts
import { SuperHeroFactory } from './superherofactory';

const superheroFactory = new SuperHeroFactory();
const batman = superheroFactory.createSuperHero({name: 'Batman', type: "hero"});
const joker = superheroFactory.createSuperHero({name: 'Joker', health: 50, type: "villain"});

batman.attacked(40); // Hero attacked: 40 -- 60
joker.attacked(40); // Villain attacked: 40 -- 10
joker.rampage(); // Joker restored health to 90