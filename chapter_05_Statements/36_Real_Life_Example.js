let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("editor can view and edit");
    } else if (userRole === "viewer") {
        console.log("viewer has rea-only access only")
    }
    else {
        console.log("We are not user which role you have")
    }

}
else {
    console.log("You are not logged in!!")
}