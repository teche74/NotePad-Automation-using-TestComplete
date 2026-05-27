Feature: Read Text

  Scenario: User read text from notepad editor
    Given user launches notepad
    When user opens file "TestFile"
    Then editor should contain "Hello Automation"
    Then user closes notepad