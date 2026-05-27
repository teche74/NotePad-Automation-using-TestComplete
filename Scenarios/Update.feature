Feature: Update Text from Notepad Editor 

  Scenario: User updates existing editor text
    Given user launches notepad 
    When user opens file "TestFile"  
    And user updates all occurences of "Hello" to "Yellow"
    Then editor text should not contain "Hello"
    Then user closes notepad