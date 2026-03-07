//js is a single threaded language, it means it can execute only one task at a time, but it can handle asynchronous tasks using event loop and callback functions.
//becoz of event loop, the tasks are executed simultaneously
console.log("executed 1");

setTimeout(() => {
    console.log("executed after 2 seconds");
}, 2000);

console.log("executed 2");

console.log("executed 3");

//setTimeout --> used to execute a function after a specified time
//syntax --> setTimeout(() => {}, timeout);

//synchronous --> one by one th code will be executed
//asynchronous --> the code will be executed simultaneously(ex: setTimeout, setInterval, api calling, dom and etc)
