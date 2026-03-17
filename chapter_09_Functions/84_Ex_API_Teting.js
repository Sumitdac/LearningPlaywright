// if (ourStatusCode >=200 && ourStatusCode < 300)
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

validateStatusCode(200);

// Function as Expression
const validateStatusCodeExp = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

validateStatusCodeExp(299);

// Arrow Function
const validateStatusCodeArrow = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");
    }
}

validateStatusCodeArrow(200);