const user = {

}

const calculator = {
    value: 0,
    // name: "Sumit",
    add(n) {
        this.value += n;
        // this.name += " Kumar";
        return this;
    },
    substract(n) {
        this.value -= n;
        return this;
    }
}

console.log(calculator.add(5).substract(5));
// { value: 0, add: [Function: add], substract: [Function: substract] }
// console.log(calculator.substract(5));