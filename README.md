# Virtual Pet 🐙

A guided code project written as part of the CommandShift Bootcamp. The aim of the project was to create a JavaScript Virtual Pet that has the following features: 
- the pet can be named
- they can get older 
- they can get hungry and less fit as they get older
- they can be walked and fed
- if the pet gets too hungry or unfit they can die
- if the pet reaches 30 days old it will die
- the pet can have children

## Getting started

### Clone the repository

First up, create a fork of this repo. 

Then clone your copy of the repo: 

- `git clone git@github.com:*your-github-username*/virtual-pet.git` 

### Install the project dependencies 

In your terminal change directory into the project's repository. Run the `npm install` to download the dependencies for this project. Once it has completed, you should have a new `node-modules` directory in the repository. 

### Run the test code 

Run `npm test` to run Jest. All the tests should pass. 

### Play Virtual Pet

Open Node REPL in your terminal using `node` command. 

Copy  `const Pet = require('../src/pet');` and return. 

Create your pet by entering `const pet = new Pet('pet's name')`. 

Once you've done that, you can start taking care of your pet by using the methods provided in the pet.js file located in the src folder. These methods include feeding, walking, having babies, and checking on your pet's status.



