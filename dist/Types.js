"use strict";
let abc = undefined;
const def = null;
function getData() {
    return '';
}
const data = getData();
if (data) {
    const someOtherData = data;
}
let input;
input = 'someInput';
let someSensitiveValue;
if (typeof input === 'string') {
    someSensitiveValue = input;
}
function doTasks(tasks) {
    if (tasks > 3) {
        throw new Error('Too many tasks!');
    }
}
const stuff = doTasks(2);
