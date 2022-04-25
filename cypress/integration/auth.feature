Feature: Authorization of a user 
  Scenario: Create an account 
    Given I visit autocheck main page
    When I click on navitem to change to Ng
    And I click on the register navitem
    And I insert information to register 
    Then I should register to the application

