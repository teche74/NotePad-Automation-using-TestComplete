//USEUNIT NotepadPage

When("user opens file {arg}", function (fileName){
  openFile(fileName);
  verifyTrue(findFileTab(fileName) != null , "file saved with name" + fileName , "no file saved with name : " + fileName);
});
