const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
const batteryCounter = (totalAmount, batteryBatch) => totalAmount + batteryBatch;
const totalBatteries = batteryBatches.reduce(batteryCounter, 0);
