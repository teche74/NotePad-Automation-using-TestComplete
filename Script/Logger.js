function logInfo(message){

    Log.Message("[INFO] : " + message);

}

function logWarning(message){

    Log.Warning("[WARNING] : " + message);

}

function logError(message){

    Log.Error("[ERROR] : " + message);

}

function logStep(message){

    Log.Message("========== STEP ==========");
    Log.Message(message);
    Log.Message("==========================");

}

function logPass(message){

    Log.Checkpoint("[PASSED] : " + message);

}