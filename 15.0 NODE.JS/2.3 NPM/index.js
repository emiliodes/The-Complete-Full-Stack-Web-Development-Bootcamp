// var generateName = require('sillyname');
import generateName from 'sillyname';
var sillyName = generateName();

console.log('My silly name is '+sillyName+ '.');

import {randomSuperhero} from 'superheroes';
var mySuperHeroNamenode =randomSuperhero();
console.log('My superhero name is '+mySuperHeroNamenode+ '!');