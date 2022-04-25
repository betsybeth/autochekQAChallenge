Feature: Authorization of a user 
  Scenario: Create an account 
    Given I visit autocheck Nigeria page
    When I click on the register navitem
    And I insert information to register 
    Then user should be redirected to success page

