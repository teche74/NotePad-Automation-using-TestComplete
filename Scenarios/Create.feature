Feature: Create Text and Save File

  Scenario: Users enter text in notepad and saves the file with specified name
    Given user launches notepad
    When users enters "Hello Automation Hello Javascript"
    And save file as "TestFile"
    Then editor should contain "Hello Automation Hello Javascript"
    Then user closes notepad 