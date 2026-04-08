let config1 = { browser: "chrome", timeout: 3000 };
// Modifying properties - ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" }; //
console.log(config1);

console.log("*****************");

const config = { browser: "chrome", timeout: 3000 };
// Modifying properties - ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// config = { browser: "Safari" }; // not allowed in case of const
console.log(config);