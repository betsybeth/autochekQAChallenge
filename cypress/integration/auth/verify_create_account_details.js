/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit autocheck url", function() {
  cy.visit(
    "https://marketplace.staging.myautochek.com/en/ke/auth/register"
  ).url();
});
