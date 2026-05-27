//USEUNIT Logger
//USEUNIT WindowUtils
//USEUNIT ScreenshotUtils

function launchApplication(){

try{

    logStep("Launching application");

    TestedApps.notepad.Run();

    logPass("Application launched successfully");

}
catch(error){

    logError("Unable to launch application : " + error);

}

}

function closeApplication(){

try{

    logStep("Closing application");

    if(Aliases.Notepad.wndNotepad.Exists){

        closeWindow(Aliases.Notepad.wndNotepad);

        logPass("Application closed successfully");

    }

}
catch(error){

    logError("Unable to close application : " + error);

}

}

function cleanup(){

try{

    logStep("Performing cleanup");

    if(Aliases.Notepad.wndNotepad.Exists){

        closeWindow(Aliases.Notepad.wndNotepad);

    }

    logPass("Cleanup completed successfully");

}
catch(error){

    logError("Cleanup failed : " + error);

}

}

function beforeTest(){

try{

    logStep("========== TEST STARTED ==========");

    launchApplication();

    logPass("BeforeTest completed");

}
catch(error){

    logError("Exception in beforeTest() : " + error);

}

}

function afterTest(){

try{

    logStep("========== TEST COMPLETED ==========");

    captureFullScreen("Final Test State");

    cleanup();

    logPass("AfterTest completed");

}
catch(error){

    logError("Exception in afterTest() : " + error);

}

}