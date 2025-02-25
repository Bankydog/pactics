"use strict";
class Counter {
    constructor() {
        this.result = 0;
    }
    increment() {
        this.result++;
    }
}
const counter = new Counter();
counter.increment();
console.log(counter.result); // 1
