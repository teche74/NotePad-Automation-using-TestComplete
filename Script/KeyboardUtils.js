//USEUNIT Logger

function pressCtrlS(){
  try{
    Sys.Keys("^s");
    logInfo("Pressed Ctrl + S");
  }
  catch(error){
    logError("Error pressing Ctrl + S : " + error);
  }
}

function pressCtrlA(){
  try{
    Sys.Keys("^a");
    logInfo("Pressed Ctrl + A");
  }
  catch(error){
    logError("Error pressing Ctrl + A : " + error);
  }
}


function pressBackspace(){
  try{
    Sys.Keys("[BS]");
    logInfo("Pressed BackSpace");
  }
  catch(error){
    logError("Error pressing BackSpace : " + error);
  }
}

function pressCtrlC(){
  try{
    Sys.Keys("^c");
    logInfo("Pressed Ctrl + C");
  }
  catch(error){
    logError("Error pressing Ctrl + C : " + error);
  }
}

function pressCtrlV(){
  try{
    Sys.Keys("^v");
    logInfo("Pressed Ctrl + V");
  }
  catch(error){
    logError("Error pressing Ctrl + V : " + error);
  }
}

function pressAltF4(){
  try{
    Sys.Keys("[AltF4]");
    logInfo("Pressed [Alt F4]");
  }
  catch(error){
    logError("Error pressing [Alt F4] : " + error);
  }
}

function pressDelete(){
  try{
    Sys.Keys("[Del]");
    logInfo("Pressed [Del]");
  }
  catch(error){
    logError("Error pressing [Del] : " + error);
  }
}

function pressCtrlN(){
  try{
    Sys.Keys("^n");
    logInfo("Pressed [Ctrl] + n");
  }
  catch(error){
    logError("Error pressing [Ctrl] + n : " + error);
  }
}

function pressCtrlX(){
  try{
    Sys.Keys("^x");
    logInfo("Pressed [Ctrl] + x");
  }
  catch(error){
    logError("Error pressing [Ctrl] + x : " + error);
  }
}

function pressCtrlZ(){
  try{
    Sys.Keys("^z");
    logInfo("Pressed [Ctrl] + z");
  }
  catch(error){
    logError("Error pressing [Ctrl] + z : " + error);
  }
}

function pressCtrlY(){
  try{
    Sys.Keys("^y");
    logInfo("Pressed [Ctrl] + y");
  }
  catch(error){
    logError("Error pressing [Ctrl] + y : " + error);
  }
}

function pressCtrlF(){
  try{
    Sys.Keys("^f");
    logInfo("Pressed [Ctrl] + f");
  }
  catch(error){
    logError("Error pressing [Ctrl] + f : " + error);
  }
}

function pressCtrlplusS(){
  try{
    Sys.Keys("^~s");
    logInfo("Pressed [Ctrl] [Shift] s");
  }
  catch(error){
    logError("Error pressing [Ctrl] [Shift] s : " + error);
  }
}


function pressKeys(input){
  try{
    Sys.Keys(input);
    logInfo("Pressed " + input);
  }
  catch(error){
    logError("Error pressing" + input +" : " + error);
  }
}


function pressCtrlO(){
  try{
    Sys.Keys("^o");
    logInfo("Pressed [Ctrl] + o");
  }
  catch(error){
    logError("Error pressing [Ctrl] + o : " + error);
  }
}