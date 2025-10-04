Feature: User navigates to the Menu

  Scenario: User enters a valid table number and navigates to the Menu
    Given the user opens Choose table page
    When the user enters a valid table number 11 and continue
    Then the user should navigate to the Menu page
