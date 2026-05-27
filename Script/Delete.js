//USEUNIT BaseTest
//USEUNIT NotepadPage
//USEUNIT BaseAssertions


When("user navigates to Open Tab", function (){
  pressCtrlO();
  verifyTrue(openWindowExists(), "open function dailog box appears" , "dailog for open box not appears");
});

When("Checks for the file {arg}", function (fileName){
  getFilesView();
  pressKeys(fileName);
  pressKeys("Enter");
  verifyTrue(getSelectedFileNameOpenWindow() == fileName , "We have selected the targeted file" , "No file with that name is present");
});


When("deletes the file", function (){
  pressDelete();
  pressCancelOpenDailog();
});
