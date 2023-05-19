const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  it('has an initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });

  it('has an initial hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  });

  it('has an intial fitness of 10', () => {
    const pet = new Pet('Fido');
    expect(pet.fitness).toEqual(10);
  })
}); 

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it('increases hunger by 5 ', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it('decreases fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.hunger = 10;

    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
  })
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by 4 to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.fitness = 0;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')
  })
});

describe('feed', () => {
  it('decrease hunger by 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 9;
    pet.feed();

    expect(pet.hunger).toEqual(6);
  });

  it('decreases hunger by 3 to a minimum of 0', () => {
    const pet = new Pet('Fido');
      
    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);

  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  it('returns "I need a walk" if fitness is 3 or less', () => {
    const pet = new Pet('Fido');

    pet.fitness = 1;
    pet.hunger =3;

    expect(pet.checkUp()).toBe("I need a walk");
  });

  it('returns "I am hungry" if hunger is 5 or more', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6;
    pet.fitness = 4;

    expect(pet.checkUp()).toBe("I am hungry");
  });

  it('returns "I am hunrgy AND I need a walk" if fitness is 3 or less and hunger is 5 or more', () => {
    const pet = new Pet('Fido');

    pet.fitness = 1;
    pet.hunger = 6;

    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
  });

  it('returns "I feel great" if fitness is more than 3 and hunger is less than 5', () => {
    const pet = new Pet ('Fido');

    pet.fitness = 5;
    pet.hunger = 3;

    expect(pet.checkUp()).toBe("I feel great!")
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.hunger = 10;

    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
  })
});

describe('isAlive', () => {
  it('returns false if fitness is 0 or less', () => {
    const pet = new Pet ('Fido');

    pet.fitness = 0;
    pet.hunger = 1;
    pet.age = 27;

    expect(pet.isAlive).toBe(false);
  });

  it('returns false if hunger is 10 or more', () => {
    const pet = new Pet('Fido');

    pet.fitness = 5;
    pet.hunger = 11;
    pet.age = 14;

    expect(pet.isAlive).toBe(false);
  });

  it('returns false if age is 30 or more', () => {
    const pet = new Pet('Fido');

    pet.fitness = 7;
    pet.hunger = 8;
    pet.age = 31;

    expect(pet.isAlive).toBe(false);
  });

  it('returns true if fitness is more than 0, hunger is less than 10 and age is less than 30', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.hunger = 6;
    pet.age = 15;

    expect(pet.isAlive).toBe(true);
  });
});

describe('haveBaby', () => {
  it('creates a new Pet using the name passed in which will be added to the children property of the parent', () => {
    const parentPet = new Pet('Fido');

    parentPet.haveBaby('Herby');
    parentPet.haveBaby('Sully')

    expect(parentPet.children[0]).toBeInstanceOf(Pet);
    expect(parentPet.children[0].name).toBe('Herby');
    expect(parentPet.children[1].name).toBe('Sully');
  });

  it('throws an error if the baby is no longer alive', () => {
    const parentPet = new Pet('Fido');

    parentPet.hunger = 10;

    expect(()=> parentPet.haveBaby()).toThrow('Your pet is no longer alive :(')
  });
});

describe('adoptChild', () => {
  it('adds the child instance to the parent pet children property', () => {
    const parentPet = new Pet('Fido');
    const childPet = new Pet('Herby');
  
    parentPet.adoptChild(childPet);
  
    expect(parentPet.children).toStrictEqual([childPet]);
  });

  it('throws an error if the baby is no longer alive', () => {
    const parentPet = new Pet('Fido');

    parentPet.hunger = 10;

    expect(()=> parentPet.adoptChild()).toThrow('Your pet is no longer alive :(')
  });
});