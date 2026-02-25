//You are working with API Validation
//response code  - 200, 404, 403, 500...

let responsecode = 404;

switch (responsecode) {

    case 200:
        console.log("200,ok");
        break;

    case 404:
        console.log("404, Page not found");
        break;

    case 500:
        console.log("500, Server Error");
        break;

    default:
        console.log("Invalid response code");
}