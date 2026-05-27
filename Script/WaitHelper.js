//USEUNIT Constants
//USEUNIT Logger

function waitForObject(obj, timeout = 10000){
  timeout = timeout || DEFAULT_TIMEOUT;

  try{

      if(!obj){
          logError("Invalid object passed to waitForObject()");
          return false;
      }

      if(obj.WaitProperty("Exists", true, timeout)){

          logPass("Object found successfully");
          return true;

      }

      logError("Object not found within timeout : " + timeout);
      return false;

  }
  catch(error){

      logError("Exception in waitForObject() : " + error);
      return false;

  }
}

function waitForEnabled(obj, timeout = 5000){

  timeout = timeout || DEFAULT_TIMEOUT;

  try{

      if(!obj){
          logError("Invalid object passed to waitForEnabled()");
          return false;
      }

      if(obj.WaitProperty("Enabled", true, timeout)){

          logPass("Object is enabled");
          return true;

      }

      logError("Object is not enabled within timeout : " + timeout);
      return false;

  }
  catch(error){

      logError("Exception in waitForEnabled() : " + error);
      return false;

  }
}

function waitForVisible(obj, timeout = 5000){
  timeout = timeout || DEFAULT_TIMEOUT;

  try{

      if(!obj){
          logError("Invalid object passed to waitForVisible()");
          return false;
      }

      if(obj.WaitProperty("VisibleOnScreen", true, timeout)){

          logPass("Object is visible on screen");
          return true;

      }

      logError("Object is not visible within timeout : " + timeout);
      return false;

  }
  catch(error){

      logError("Exception in waitForVisible() : " + error);
      return false;

  }

}

function waitForExistence(obj, timeout = 5000){
  timeout = timeout || DEFAULT_TIMEOUT;

  try{

      if(!obj){
          logError("Invalid object passed to waitForExistence()");
          return false;
      }

      if(obj.WaitProperty("Exists", true, timeout)){

          logPass("Object existence verified");
          return true;

      }

      logError("Object does not exist within timeout : " + timeout);
      return false;

  }
  catch(error){

      logError("Exception in waitForExistence() : " + error);
      return false;

  }
}
