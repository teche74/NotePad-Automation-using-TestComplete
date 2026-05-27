Feature: Delete file from notepad

  Scenario: user deletes the pre existing file from notepad
    Given user launches notepad 
    When user navigates to Open Tab
    And Checks for the file "TestFile"
    And deletes the file
    Then user closes notepad