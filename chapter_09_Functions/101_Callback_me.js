function sumit_doing_work(worker, callback) {
    console.log("Started the PW class")
    let work = worker;
    // some code
    console.log("Finished the PW class")
    callback();
}

function callWife() {
    console.log("Call wife when done");
}

sumit_doing_work('PW class', callWife);