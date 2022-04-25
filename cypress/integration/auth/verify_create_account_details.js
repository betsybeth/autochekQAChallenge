/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit autocheck url", function() {
  cy.visit().url();
});

// When("When I click on navitem to change to Ng", function(){

// });

// And("I click on the register navitem", function(){

// })
// And ("I insert information to register", function(){

// })
// // eslint-disable-next-line cucumber/async-then
// Then("I should register to the application", function(){

// })
