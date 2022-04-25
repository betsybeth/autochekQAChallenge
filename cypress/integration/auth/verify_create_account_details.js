/* eslint-disable cucumber/async-then */
/// <reference types="cypress" />

import faker from "faker";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AuthPage from "../../pageObjects/auth";

const authPage = new AuthPage();
Given("I visit autocheck Nigeria page", function() {
  authPage.visitNigeriaPage();
});

When("I click on the register navitem", function() {
  cy.get(authPage.registerNavItem)
    .should("exist")
    .should("have.text", "Register")
    .click();
});
And("I insert information to register", function() {
  const firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    email = faker.internet.email(),
    phone = faker.phone.phoneNumberFormat(2),
    password = faker.internet.password();
  authPage.fillFirstAndLastName(firstName, lastName);
  authPage.fillEmailAndPhone(email, phone);
  authPage.completeRegistrationFlow(password);
});
Then("user should be redirected to success page", function() {
  authPage.verifySuccessPage();
});
