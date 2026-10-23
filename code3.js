gdjs.ComputerCode = {};
gdjs.ComputerCode.localVariables = [];
gdjs.ComputerCode.idToCallbackMap = new Map();
gdjs.ComputerCode.GDComputerObjects1= [];
gdjs.ComputerCode.GDComputerObjects2= [];
gdjs.ComputerCode.GDComputerObjects3= [];
gdjs.ComputerCode.GDBankAppObjects1= [];
gdjs.ComputerCode.GDBankAppObjects2= [];
gdjs.ComputerCode.GDBankAppObjects3= [];
gdjs.ComputerCode.GDWindowObjects1= [];
gdjs.ComputerCode.GDWindowObjects2= [];
gdjs.ComputerCode.GDWindowObjects3= [];
gdjs.ComputerCode.GDXObjects1= [];
gdjs.ComputerCode.GDXObjects2= [];
gdjs.ComputerCode.GDXObjects3= [];
gdjs.ComputerCode.GDBANK_9595INFOObjects1= [];
gdjs.ComputerCode.GDBANK_9595INFOObjects2= [];
gdjs.ComputerCode.GDBANK_9595INFOObjects3= [];
gdjs.ComputerCode.GDTIMEObjects1= [];
gdjs.ComputerCode.GDTIMEObjects2= [];
gdjs.ComputerCode.GDTIMEObjects3= [];
gdjs.ComputerCode.GDSlotsAppObjects1= [];
gdjs.ComputerCode.GDSlotsAppObjects2= [];
gdjs.ComputerCode.GDSlotsAppObjects3= [];


gdjs.ComputerCode.asyncCallback10440148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BankApp"), gdjs.ComputerCode.GDBankAppObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Computer"), gdjs.ComputerCode.GDComputerObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("SlotsApp"), gdjs.ComputerCode.GDSlotsAppObjects3);

{for(var i = 0, len = gdjs.ComputerCode.GDComputerObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDComputerObjects3[i].getBehavior("Animation").setAnimationName("on");
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDComputerObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDComputerObjects3[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDComputerObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDComputerObjects3[i].getBehavior("Animation").resumeAnimation();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TIME");
}
{for(var i = 0, len = gdjs.ComputerCode.GDBankAppObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDBankAppObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDSlotsAppObjects3.length ;i < len;++i) {
    gdjs.ComputerCode.GDSlotsAppObjects3[i].hide(false);
}
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "open");
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "openn");
}
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10440148, gdjs.ComputerCode.asyncCallback10440148);
gdjs.ComputerCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
/* Don't save BankApp as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.ComputerCode.GDComputerObjects2) asyncObjectsList.addObject("Computer", obj);
/* Don't save SlotsApp as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10440148(runtimeScene, asyncObjectsList)), 10440148, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.asyncCallback10439524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ComputerCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Computer"), gdjs.ComputerCode.GDComputerObjects2);

{for(var i = 0, len = gdjs.ComputerCode.GDComputerObjects2.length ;i < len;++i) {
    gdjs.ComputerCode.GDComputerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}

{ //Subevents
gdjs.ComputerCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.ComputerCode.localVariables.length = 0;
}
gdjs.ComputerCode.idToCallbackMap.set(10439524, gdjs.ComputerCode.asyncCallback10439524);
gdjs.ComputerCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ComputerCode.localVariables);
for (const obj of gdjs.ComputerCode.GDBankAppObjects1) asyncObjectsList.addObject("BankApp", obj);
for (const obj of gdjs.ComputerCode.GDComputerObjects1) asyncObjectsList.addObject("Computer", obj);
for (const obj of gdjs.ComputerCode.GDSlotsAppObjects1) asyncObjectsList.addObject("SlotsApp", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomFloatInRange(0.5, 1)), (runtimeScene) => (gdjs.ComputerCode.asyncCallback10439524(runtimeScene, asyncObjectsList)), 10439524, asyncObjectsList);
}
}

}


};gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDBankAppObjects1Objects = Hashtable.newFrom({"BankApp": gdjs.ComputerCode.GDBankAppObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDSlotsAppObjects1Objects = Hashtable.newFrom({"SlotsApp": gdjs.ComputerCode.GDSlotsAppObjects1});
gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDXObjects1Objects = Hashtable.newFrom({"X": gdjs.ComputerCode.GDXObjects1});
gdjs.ComputerCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BANK_INFO"), gdjs.ComputerCode.GDBANK_9595INFOObjects1);
gdjs.copyArray(runtimeScene.getObjects("BankApp"), gdjs.ComputerCode.GDBankAppObjects1);
gdjs.copyArray(runtimeScene.getObjects("Computer"), gdjs.ComputerCode.GDComputerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlotsApp"), gdjs.ComputerCode.GDSlotsAppObjects1);
gdjs.copyArray(runtimeScene.getObjects("Window"), gdjs.ComputerCode.GDWindowObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.ComputerCode.GDXObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDComputerObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDComputerObjects1[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{for(var i = 0, len = gdjs.ComputerCode.GDWindowObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDWindowObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDBankAppObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBankAppObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDSlotsAppObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDSlotsAppObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDXObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDXObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDBANK_9595INFOObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBANK_9595INFOObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDComputerObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDComputerObjects1[i].getBehavior("Animation").setAnimationName("load");
}
}

{ //Subevents
gdjs.ComputerCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Computer"), gdjs.ComputerCode.GDComputerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDComputerObjects1.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDComputerObjects1[i].getBehavior("Animation").getAnimationName() == "on" ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDComputerObjects1[k] = gdjs.ComputerCode.GDComputerObjects1[i];
        ++k;
    }
}
gdjs.ComputerCode.GDComputerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BankApp"), gdjs.ComputerCode.GDBankAppObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlotsApp"), gdjs.ComputerCode.GDSlotsAppObjects1);
gdjs.copyArray(runtimeScene.getObjects("Window"), gdjs.ComputerCode.GDWindowObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.ComputerCode.GDXObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDWindowObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDWindowObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDXObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDXObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDBankAppObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBankAppObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDSlotsAppObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDSlotsAppObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Computer"), gdjs.ComputerCode.GDComputerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ComputerCode.GDComputerObjects1.length;i<l;++i) {
    if ( gdjs.ComputerCode.GDComputerObjects1[i].getBehavior("Animation").getAnimationName() == "on" ) {
        isConditionTrue_0 = true;
        gdjs.ComputerCode.GDComputerObjects1[k] = gdjs.ComputerCode.GDComputerObjects1[i];
        ++k;
    }
}
gdjs.ComputerCode.GDComputerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BankApp"), gdjs.ComputerCode.GDBankAppObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlotsApp"), gdjs.ComputerCode.GDSlotsAppObjects1);
gdjs.copyArray(runtimeScene.getObjects("Window"), gdjs.ComputerCode.GDWindowObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.ComputerCode.GDXObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDWindowObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDWindowObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDXObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDXObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDBankAppObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBankAppObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDSlotsAppObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDSlotsAppObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BankApp"), gdjs.ComputerCode.GDBankAppObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDBankAppObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "openn", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("BANK");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SlotsApp"), gdjs.ComputerCode.GDSlotsAppObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDSlotsAppObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "openn", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("SLOTS");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.ComputerCode.GDXObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ComputerCode.mapOfGDgdjs_9546ComputerCode_9546GDXObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "open", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("NOTHING");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "BANK");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BANK_INFO"), gdjs.ComputerCode.GDBANK_9595INFOObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDBANK_9595INFOObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBANK_9595INFOObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.ComputerCode.GDBANK_9595INFOObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBANK_9595INFOObjects1[i].getBehavior("Text").setText("Your balance is " + (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString()) + " Cookies. You need " + gdjs.evtTools.common.toString(1000000 - (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber())) + " more Cookies to pay off your debt. ");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "BANK");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BANK_INFO"), gdjs.ComputerCode.GDBANK_9595INFOObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDBANK_9595INFOObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDBANK_9595INFOObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "TIME") * 6)));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "TIME") / 10));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()) - gdjs.evtTools.common.toNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()) * 60));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "0");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("00");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "1");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("01");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "2");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("02");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "3");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("03");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "4");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("04");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "5");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("05");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "6");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("06");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "7");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("07");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "8");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("08");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "9");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("09");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TIME"), gdjs.ComputerCode.GDTIMEObjects1);
{for(var i = 0, len = gdjs.ComputerCode.GDTIMEObjects1.length ;i < len;++i) {
    gdjs.ComputerCode.GDTIMEObjects1[i].getBehavior("Text").setText((runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()) + ":" + (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString()));
}
}
}

}


};

gdjs.ComputerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ComputerCode.GDComputerObjects1.length = 0;
gdjs.ComputerCode.GDComputerObjects2.length = 0;
gdjs.ComputerCode.GDComputerObjects3.length = 0;
gdjs.ComputerCode.GDBankAppObjects1.length = 0;
gdjs.ComputerCode.GDBankAppObjects2.length = 0;
gdjs.ComputerCode.GDBankAppObjects3.length = 0;
gdjs.ComputerCode.GDWindowObjects1.length = 0;
gdjs.ComputerCode.GDWindowObjects2.length = 0;
gdjs.ComputerCode.GDWindowObjects3.length = 0;
gdjs.ComputerCode.GDXObjects1.length = 0;
gdjs.ComputerCode.GDXObjects2.length = 0;
gdjs.ComputerCode.GDXObjects3.length = 0;
gdjs.ComputerCode.GDBANK_9595INFOObjects1.length = 0;
gdjs.ComputerCode.GDBANK_9595INFOObjects2.length = 0;
gdjs.ComputerCode.GDBANK_9595INFOObjects3.length = 0;
gdjs.ComputerCode.GDTIMEObjects1.length = 0;
gdjs.ComputerCode.GDTIMEObjects2.length = 0;
gdjs.ComputerCode.GDTIMEObjects3.length = 0;
gdjs.ComputerCode.GDSlotsAppObjects1.length = 0;
gdjs.ComputerCode.GDSlotsAppObjects2.length = 0;
gdjs.ComputerCode.GDSlotsAppObjects3.length = 0;

gdjs.ComputerCode.eventsList2(runtimeScene);
gdjs.ComputerCode.GDComputerObjects1.length = 0;
gdjs.ComputerCode.GDComputerObjects2.length = 0;
gdjs.ComputerCode.GDComputerObjects3.length = 0;
gdjs.ComputerCode.GDBankAppObjects1.length = 0;
gdjs.ComputerCode.GDBankAppObjects2.length = 0;
gdjs.ComputerCode.GDBankAppObjects3.length = 0;
gdjs.ComputerCode.GDWindowObjects1.length = 0;
gdjs.ComputerCode.GDWindowObjects2.length = 0;
gdjs.ComputerCode.GDWindowObjects3.length = 0;
gdjs.ComputerCode.GDXObjects1.length = 0;
gdjs.ComputerCode.GDXObjects2.length = 0;
gdjs.ComputerCode.GDXObjects3.length = 0;
gdjs.ComputerCode.GDBANK_9595INFOObjects1.length = 0;
gdjs.ComputerCode.GDBANK_9595INFOObjects2.length = 0;
gdjs.ComputerCode.GDBANK_9595INFOObjects3.length = 0;
gdjs.ComputerCode.GDTIMEObjects1.length = 0;
gdjs.ComputerCode.GDTIMEObjects2.length = 0;
gdjs.ComputerCode.GDTIMEObjects3.length = 0;
gdjs.ComputerCode.GDSlotsAppObjects1.length = 0;
gdjs.ComputerCode.GDSlotsAppObjects2.length = 0;
gdjs.ComputerCode.GDSlotsAppObjects3.length = 0;


return;

}

gdjs['ComputerCode'] = gdjs.ComputerCode;
