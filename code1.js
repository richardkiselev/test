gdjs.OpeningCode = {};
gdjs.OpeningCode.localVariables = [];
gdjs.OpeningCode.idToCallbackMap = new Map();
gdjs.OpeningCode.GDJudge_9595TextObjects1= [];
gdjs.OpeningCode.GDJudge_9595TextObjects2= [];
gdjs.OpeningCode.GDJudge_9595TextObjects3= [];
gdjs.OpeningCode.GDHintObjects1= [];
gdjs.OpeningCode.GDHintObjects2= [];
gdjs.OpeningCode.GDHintObjects3= [];


gdjs.OpeningCode.asyncCallback10379060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Hint"), gdjs.OpeningCode.GDHintObjects2);

{for(var i = 0, len = gdjs.OpeningCode.GDHintObjects2.length ;i < len;++i) {
    gdjs.OpeningCode.GDHintObjects2[i].getBehavior("Opacity").setOpacity(gdjs.OpeningCode.GDHintObjects2[i].getBehavior("Opacity").getOpacity() - (2));
}
}
{gdjs.evtTools.window.setWindowSize(runtimeScene, 320, 180, false);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10379060, gdjs.OpeningCode.asyncCallback10379060);
gdjs.OpeningCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
for (const obj of gdjs.OpeningCode.GDHintObjects1) asyncObjectsList.addObject("Hint", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10379060(runtimeScene, asyncObjectsList)), 10379060, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10381388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10381388, gdjs.OpeningCode.asyncCallback10381388);
gdjs.OpeningCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10381388(runtimeScene, asyncObjectsList)), 10381388, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10383716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10383716, gdjs.OpeningCode.asyncCallback10383716);
gdjs.OpeningCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10383716(runtimeScene, asyncObjectsList)), 10383716, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10383108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gasp-6253.mp3", 3, false, 100, 1);
}

{ //Subevents
gdjs.OpeningCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10383108, gdjs.OpeningCode.asyncCallback10383108);
gdjs.OpeningCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10383108(runtimeScene, asyncObjectsList)), 10383108, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10385324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10385324, gdjs.OpeningCode.asyncCallback10385324);
gdjs.OpeningCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10385324(runtimeScene, asyncObjectsList)), 10385324, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10387436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "critical-tension-cinematic-braam-impact-184273.mp3", 3, false, 100, 1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10387436, gdjs.OpeningCode.asyncCallback10387436);
gdjs.OpeningCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10387436(runtimeScene, asyncObjectsList)), 10387436, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10389484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "loud-male-scream-hd-379385.mp3", 3, false, 100, 1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10389484, gdjs.OpeningCode.asyncCallback10389484);
gdjs.OpeningCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10389484(runtimeScene, asyncObjectsList)), 10389484, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10391540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10391540, gdjs.OpeningCode.asyncCallback10391540);
gdjs.OpeningCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10391540(runtimeScene, asyncObjectsList)), 10391540, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10393124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10393124, gdjs.OpeningCode.asyncCallback10393124);
gdjs.OpeningCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10393124(runtimeScene, asyncObjectsList)), 10393124, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10394836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10394836, gdjs.OpeningCode.asyncCallback10394836);
gdjs.OpeningCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10394836(runtimeScene, asyncObjectsList)), 10394836, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10396508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "hearbeat-71701.mp3", 3, true, 100, 1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10396508, gdjs.OpeningCode.asyncCallback10396508);
gdjs.OpeningCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10396508(runtimeScene, asyncObjectsList)), 10396508, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10318308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10318308, gdjs.OpeningCode.asyncCallback10318308);
gdjs.OpeningCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10318308(runtimeScene, asyncObjectsList)), 10318308, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10402044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10402044, gdjs.OpeningCode.asyncCallback10402044);
gdjs.OpeningCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10402044(runtimeScene, asyncObjectsList)), 10402044, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10403060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10403060, gdjs.OpeningCode.asyncCallback10403060);
gdjs.OpeningCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10403060(runtimeScene, asyncObjectsList)), 10403060, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10405988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects3);

{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects3.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects3[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dun-283044.mp3", false, 1000, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DayScreen", false);
}
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10405988, gdjs.OpeningCode.asyncCallback10405988);
gdjs.OpeningCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
/* Don't save Judge_Text as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10405988(runtimeScene, asyncObjectsList)), 10405988, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.asyncCallback10405892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OpeningCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}

{ //Subevents
gdjs.OpeningCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.OpeningCode.localVariables.length = 0;
}
gdjs.OpeningCode.idToCallbackMap.set(10405892, gdjs.OpeningCode.asyncCallback10405892);
gdjs.OpeningCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OpeningCode.localVariables);
for (const obj of gdjs.OpeningCode.GDJudge_9595TextObjects1) asyncObjectsList.addObject("Judge_Text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.OpeningCode.asyncCallback10405892(runtimeScene, asyncObjectsList)), 10405892, asyncObjectsList);
}
}

}


};gdjs.OpeningCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.OpeningCode.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDHintObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDHintObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "court_opening.mp3", 1, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs.OpeningCode.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Opacity").setOpacity(gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Opacity").getOpacity() + (1));
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDHintObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDHintObjects1[i].getBehavior("Opacity").setOpacity(gdjs.OpeningCode.GDHintObjects1[i].getBehavior("Opacity").getOpacity() + (1));
}
}

{ //Subevents
gdjs.OpeningCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(30);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("September Stockington, you are accused of a heinous crime!");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(30);
}
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("That being the consumption of a family of four!");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("I plead not guilty!");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gasp-6253.mp3", 3, true, 100, 1);
}

{ //Subevents
gdjs.OpeningCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("NOT GUILTY?????????????????????????????????????????????????????????????????????????????????????????????????");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(30);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("There are CRUMBS\nALL OVER your shirt!!");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("...");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 7);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("Very well...");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 8);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(30);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("For the slaughter of 4 cookies,");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 9);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(30);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("I demand you pay the ultimate price!");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("A fine!");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "dun-283044.mp3", 3, false, 100, 1);
}

{ //Subevents
gdjs.OpeningCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 11);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("Of 1,000,000 Cookies");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("AutoTyping").SetInterval(0.05, null);
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("You owe 1 Million Cookies.");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 13);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("AutoTyping").SetInterval(0.05, null);
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("You have 7 days.");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 14);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Judge_Text"), gdjs.OpeningCode.GDJudge_9595TextObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].setCharacterSize(50);
}
}
{for(var i = 0, len = gdjs.OpeningCode.GDJudge_9595TextObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDJudge_9595TextObjects1[i].getBehavior("Text").setText("I dunno... get a job or something?");
}
}

{ //Subevents
gdjs.OpeningCode.eventsList15(runtimeScene);} //End of subevents
}

}


};

gdjs.OpeningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningCode.GDJudge_9595TextObjects1.length = 0;
gdjs.OpeningCode.GDJudge_9595TextObjects2.length = 0;
gdjs.OpeningCode.GDJudge_9595TextObjects3.length = 0;
gdjs.OpeningCode.GDHintObjects1.length = 0;
gdjs.OpeningCode.GDHintObjects2.length = 0;
gdjs.OpeningCode.GDHintObjects3.length = 0;

gdjs.OpeningCode.eventsList16(runtimeScene);
gdjs.OpeningCode.GDJudge_9595TextObjects1.length = 0;
gdjs.OpeningCode.GDJudge_9595TextObjects2.length = 0;
gdjs.OpeningCode.GDJudge_9595TextObjects3.length = 0;
gdjs.OpeningCode.GDHintObjects1.length = 0;
gdjs.OpeningCode.GDHintObjects2.length = 0;
gdjs.OpeningCode.GDHintObjects3.length = 0;


return;

}

gdjs['OpeningCode'] = gdjs.OpeningCode;
