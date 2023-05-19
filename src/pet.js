const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_ACCEPTABLE_HUNGER = 5;
const MINIMUM_ACCEPTABLE_FITNESS = 3; 
const MAXIMUM_AGE = 30;


function Pet(name) {
  this.name = name; 
  this.age = 0; 
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
  }
};

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger +=5;
  this.fitness -=3;
};

Pet.prototype.walk = function() {
  if(!this.isAlive) {
    throw new Error ('Your pet is no longer alive :(')
  }
  if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
}

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw Error ('Your pet is no longer alive :(');
  }
  if ((this.hunger - 3) <= 0) {
    this.hunger = MINIMUM_HUNGER;
  } else {
    this.hunger -= 3;
  }
}

Pet.prototype.checkUp = function () {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(')
  }
  if (this.fitness <= MINIMUM_ACCEPTABLE_FITNESS && this.hunger>= MINIMUM_ACCEPTABLE_HUNGER){
    return "I am hungry AND I need a walk"
  } if (this.fitness > MINIMUM_ACCEPTABLE_FITNESS && this.hunger < MINIMUM_ACCEPTABLE_HUNGER) {
    return "I feel great!"
  } if (this.hunger >= MINIMUM_ACCEPTABLE_HUNGER) {
    return "I am hungry"
  } if (this.fitness <= MINIMUM_ACCEPTABLE_FITNESS) {
    return "I need a walk"
  };
}

Pet.prototype.haveBaby = function(name) {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(')
  }
  const childPet = new Pet(name);
  this.children.push(childPet);
}

Pet.prototype.adoptChild = function (childPet) {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(')
  }
  this.children.push(childPet);
}



module.exports = Pet;