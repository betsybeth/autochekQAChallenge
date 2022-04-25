class AuthPage {
  main
  ChooseCountryDropdownIcon = "div.main-container div.header.hide-:nth-child(2) div.topbar div.container div.topbar-location div.input-container.select-container.no-border div.input-icon-container.rightIcon span.input-icon.right > svg:nth-child(1)"
  chooseNigeriaOption = "div.main-container div.header.hide-:nth-child(2) div.topbar div.container div.topbar-location div.input-container.select-container.no-border.isFocused ul.select-items > li:nth-child(1)"
  registerNavItem = "register";
  SigninNavItem = "Sign In";
  firstNameInputField = ".social-buttons > :nth-child(1) > div > .input";
  LastNameInputField = ".social-buttons > :nth-child(2) > div > .input";
  PhoneNumberInputField = ".form-control";
  emailAddressInputField = ".form-content > :nth-child(2) > div > .input";
  passwordInputField = ".relative > .input-container > div > .input";
  registerButton = ".button";
  loginInButton = ".button";

  fillFirstAndLastName(firstName, lastName){
      cy.get(this.firstNameInputField)
      .clear()
      .type(firstName)
      cy.get(this.LastNameInputField)
      .clear()
      .type(lastName)
    }
  fillEmailAndPhone(email, phone){
      cy.get(this.emailAddressInputField)
      .clear()
      .type(email)
      cy.get(this.PhoneNumberInputField)
      .clear()
      .type(phone)  
  }
  completeRegistrationFlow(){
    this.fillFirstAndLastName()
    this.fillEmailAndPhone();
    cy.get(this.registerButton)
    .should("exist")
    .click()
  }
}
