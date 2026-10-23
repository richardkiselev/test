gdjs.DayScreenCode = {};
gdjs.DayScreenCode.localVariables = [];
gdjs.DayScreenCode.idToCallbackMap = new Map();
gdjs.DayScreenCode.GDDay_9595CounterObjects1= [];
gdjs.DayScreenCode.GDDay_9595CounterObjects2= [];
gdjs.DayScreenCode.GDDay_9595CounterObjects3= [];
gdjs.DayScreenCode.GDDay_9595CounterObjects4= [];
gdjs.DayScreenCode.GDDebtObjects1= [];
gdjs.DayScreenCode.GDDebtObjects2= [];
gdjs.DayScreenCode.GDDebtObjects3= [];
gdjs.DayScreenCode.GDDebtObjects4= [];
gdjs.DayScreenCode.GDBalanceObjects1= [];
gdjs.DayScreenCode.GDBalanceObjects2= [];
gdjs.DayScreenCode.GDBalanceObjects3= [];
gdjs.DayScreenCode.GDBalanceObjects4= [];


gdjs.DayScreenCode.asyncCallback10422124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.DayScreenCode.GDBalanceObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "dun-283044.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.DayScreenCode.GDBalanceObjects4.length ;i < len;++i) {
    gdjs.DayScreenCode.GDBalanceObjects4[i].getBehavior("Opacity").setOpacity(255);
}
}
gdjs.DayScreenCode.localVariables.length = 0;
}
gdjs.DayScreenCode.idToCallbackMap.set(10422124, gdjs.DayScreenCode.asyncCallback10422124);
gdjs.DayScreenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.DayScreenCode.asyncCallback10422124(runtimeScene, asyncObjectsList)), 10422124, asyncObjectsList);
}
}

}


};gdjs.DayScreenCode.asyncCallback10421660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Debt"), gdjs.DayScreenCode.GDDebtObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "dun-283044.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.DayScreenCode.GDDebtObjects3.length ;i < len;++i) {
    gdjs.DayScreenCode.GDDebtObjects3[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.DayScreenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.DayScreenCode.localVariables.length = 0;
}
gdjs.DayScreenCode.idToCallbackMap.set(10421660, gdjs.DayScreenCode.asyncCallback10421660);
gdjs.DayScreenCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.DayScreenCode.asyncCallback10421660(runtimeScene, asyncObjectsList)), 10421660, asyncObjectsList);
}
}

}


};gdjs.DayScreenCode.asyncCallback10421140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Day_Counter"), gdjs.DayScreenCode.GDDay_9595CounterObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "dun-283044.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.DayScreenCode.GDDay_9595CounterObjects2.length ;i < len;++i) {
    gdjs.DayScreenCode.GDDay_9595CounterObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.DayScreenCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.DayScreenCode.localVariables.length = 0;
}
gdjs.DayScreenCode.idToCallbackMap.set(10421140, gdjs.DayScreenCode.asyncCallback10421140);
gdjs.DayScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.DayScreenCode.asyncCallback10421140(runtimeScene, asyncObjectsList)), 10421140, asyncObjectsList);
}
}

}


};gdjs.DayScreenCode.asyncCallback10423772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Computer", false);
}
gdjs.DayScreenCode.localVariables.length = 0;
}
gdjs.DayScreenCode.idToCallbackMap.set(10423772, gdjs.DayScreenCode.asyncCallback10423772);
gdjs.DayScreenCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.DayScreenCode.asyncCallback10423772(runtimeScene, asyncObjectsList)), 10423772, asyncObjectsList);
}
}

}


};gdjs.DayScreenCode.asyncCallback10423324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Balance"), gdjs.DayScreenCode.GDBalanceObjects2);
gdjs.copyArray(runtimeScene.getObjects("Day_Counter"), gdjs.DayScreenCode.GDDay_9595CounterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Debt"), gdjs.DayScreenCode.GDDebtObjects2);
{for(var i = 0, len = gdjs.DayScreenCode.GDDay_9595CounterObjects2.length ;i < len;++i) {
    gdjs.DayScreenCode.GDDay_9595CounterObjects2[i].getBehavior("Opacity").setOpacity(gdjs.DayScreenCode.GDDay_9595CounterObjects2[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{for(var i = 0, len = gdjs.DayScreenCode.GDDebtObjects2.length ;i < len;++i) {
    gdjs.DayScreenCode.GDDebtObjects2[i].getBehavior("Opacity").setOpacity(gdjs.DayScreenCode.GDDebtObjects2[i].getBehavior("Opacity").getOpacity() - (3));
}
}
{for(var i = 0, len = gdjs.DayScreenCode.GDBalanceObjects2.length ;i < len;++i) {
    gdjs.DayScreenCode.GDBalanceObjects2[i].getBehavior("Opacity").setOpacity(gdjs.DayScreenCode.GDBalanceObjects2[i].getBehavior("Opacity").getOpacity() - (5));
}
}

{ //Subevents
gdjs.DayScreenCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.DayScreenCode.localVariables.length = 0;
}
gdjs.DayScreenCode.idToCallbackMap.set(10423324, gdjs.DayScreenCode.asyncCallback10423324);
gdjs.DayScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DayScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.DayScreenCode.asyncCallback10423324(runtimeScene, asyncObjectsList)), 10423324, asyncObjectsList);
}
}

}


};gdjs.DayScreenCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "dun-283044.mp3");
}

{ //Subevents
gdjs.DayScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 320, 180, false);
}

{ //Subevents
gdjs.DayScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.DayScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DayScreenCode.GDDay_9595CounterObjects1.length = 0;
gdjs.DayScreenCode.GDDay_9595CounterObjects2.length = 0;
gdjs.DayScreenCode.GDDay_9595CounterObjects3.length = 0;
gdjs.DayScreenCode.GDDay_9595CounterObjects4.length = 0;
gdjs.DayScreenCode.GDDebtObjects1.length = 0;
gdjs.DayScreenCode.GDDebtObjects2.length = 0;
gdjs.DayScreenCode.GDDebtObjects3.length = 0;
gdjs.DayScreenCode.GDDebtObjects4.length = 0;
gdjs.DayScreenCode.GDBalanceObjects1.length = 0;
gdjs.DayScreenCode.GDBalanceObjects2.length = 0;
gdjs.DayScreenCode.GDBalanceObjects3.length = 0;
gdjs.DayScreenCode.GDBalanceObjects4.length = 0;

gdjs.DayScreenCode.eventsList5(runtimeScene);
gdjs.DayScreenCode.GDDay_9595CounterObjects1.length = 0;
gdjs.DayScreenCode.GDDay_9595CounterObjects2.length = 0;
gdjs.DayScreenCode.GDDay_9595CounterObjects3.length = 0;
gdjs.DayScreenCode.GDDay_9595CounterObjects4.length = 0;
gdjs.DayScreenCode.GDDebtObjects1.length = 0;
gdjs.DayScreenCode.GDDebtObjects2.length = 0;
gdjs.DayScreenCode.GDDebtObjects3.length = 0;
gdjs.DayScreenCode.GDDebtObjects4.length = 0;
gdjs.DayScreenCode.GDBalanceObjects1.length = 0;
gdjs.DayScreenCode.GDBalanceObjects2.length = 0;
gdjs.DayScreenCode.GDBalanceObjects3.length = 0;
gdjs.DayScreenCode.GDBalanceObjects4.length = 0;


return;

}

gdjs['DayScreenCode'] = gdjs.DayScreenCode;
