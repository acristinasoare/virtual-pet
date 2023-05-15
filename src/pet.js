const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MINIMUM_ACCEPTABLE_HUNGER = 5;
const MINIMUM_ACCEPTABLE_FITNESS = 3; 

function Pet(name) {
  this.name = name; 
  this.age = 0; 
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger +=5;
  this.fitness -=3;
};

Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
}

Pet.prototype.feed = function () {
  if ((this.hunger - 3) <= 0) {
    this.hunger = MINIMUM_HUNGER;
  } else {
    this.hunger -= 3;
  }
}
Pet.prototype.checkUp = function () {
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
module.exports = Pet;