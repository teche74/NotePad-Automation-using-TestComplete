//USEUNIT BaseTest
//USEUNIT NotepadPage
//USEUNIT BaseAssertions

Given("user launches notepad", function (){
  launchApplication();
  verifyTrue(verifyApplicationOpen(), "notepad application running" , "not able to open notepad process");
});

When("users enters {arg}", function (inputText){
  enterText(inputText);
  verifyTrue(verifyEqual(getEditorText(), inputText) , "User input successfull" , "no input from user");
});

When("save file as {arg}" , function (fileName){
  saveFileAs(fileName);
  verifyTrue(checkFileExist(fileName), "file saved successfully" , "file not saved in Document folder");
});

Then("editor should contain {arg}", function (expectedText){
  verifyTrue(verifyContains(getEditorText() , expectedText) , "text present in notepad" , "text not updated in Editor");
});



Then("user closes notepad" , function (){
  closeApplication();
  verifyTrue(verifyApplicationClosed(), "closed notepad successfully" , "not able to close the notepad process");
});