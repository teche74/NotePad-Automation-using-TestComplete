//USEUNIT Logger
//USEUNIT WaitHelper

function maximizeWindow(window){
    try{
        waitForObject(window);
        window.Maximize();
        logPass("Window maximized successfully");
    }
    catch(error){
        logError("Unable to maximize window : " + error);
    }
}


function minimizeWindow(window){
    try{
        waitForObject(window);
        window.Minimize();
        logPass("Window minimized successfully");
    }
    catch(error){
        logError("Unable to minimize window : " + error);
    }
}


function closeWindow(window){
    try{
        waitForObject(window);
        window.Close();
        logPass("Window closed successfully");
    }
    catch(error){
        logError("Unable to close window : " + error);
    }
}