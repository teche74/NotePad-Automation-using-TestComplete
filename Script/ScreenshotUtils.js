//USEUNIT Logger

function captureFullScreen(name){
    try{
        Log.Picture(Sys.Desktop.Picture(),name);
        logPass("Fullscreen screenshot captured : " + name);
    }
    catch(error){
        logError("Unable to capture fullscreen screenshot : " + error);
    }
}

function captureWindow(window, name){
    try{
        Log.Picture(window.Picture(),name);
        logPass("Window screenshot captured : " + name);
    }
    catch(error){
        logError("Unable to capture window screenshot : " + error);
    }
}


