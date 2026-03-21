const calculator = {
    value: 0,
    add(n) {
        this.value += n;
        return this.value;
    }
}

console.log(calculator.add(5));