let worker = new Worker("./6.11.worker.js");

worker.postMessage({
    status: 0
});

worker.onmessage = function (event) {
    console.log("event", event);
    document.querySelector(".calc").innerHTML = event.data;
    worker.terminate();
}