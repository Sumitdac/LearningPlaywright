const user = {
    firstName: "Sumit",
    lastName: "Kumar",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Aadish Kumar";
console.log(user.fullName);