class AuthPage {
  mainUrl = "https://marketplace.staging.myautochek.com/ng";
  registerNavItem = "a[href='/en/ng/auth/register']";
  SigninNavItem = "Sign In";
  firstNameInputField = ".social-buttons > :nth-child(1) > div > .input";
  LastNameInputField = ".social-buttons > :nth-child(2) > div > .input";
  PhoneNumberInputField = ".form-control";
  emailAddressInputField = ".form-content > :nth-child(2) > div > .input";
  passwordInputField = ".relative > .input-container > div > .input";
  registerButton = ".button";
  loginInButton = ".button";
  successText = ".success > p";
  successPage = "https://marketplace.staging.myautochek.com/ke/auth/success";
//  get the main page
  visitNigeriaPage() {
    cy.visit(this.mainUrl);
  }
  fillFirstAndLastName(firstName, lastName) {
    cy.get(this.firstNameInputField)
      .clear()
      .type(firstName);
    cy.get(this.LastNameInputField)
      .clear()
      .type(lastName);
  }
  fillEmailAndPhone(email, phone) {
    cy.get(this.emailAddressInputField)
      .clear()
      .type(email);
    cy.get(this.PhoneNumberInputField).type(phone);
  }
  completeRegistrationFlow(password) {
    cy.get(this.passwordInputField)
      .clear()
      .type(password);
    cy.get(this.registerButton)
      .should("exist")
      .click();
  }
  verifySuccessPage() {
    cy.url().should("eq", this.successPage);
    cy.get(this.successText)
      .should("exist")
      .should(
        "have.text",
        "Your have successfully signed up. The details you provided will be reviewed and you be notified of your account creation. Kindly check your email to verify your account."
      );
  }
}

export default AuthPage;
