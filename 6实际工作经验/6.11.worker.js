onmessage = function (event) {
    console.log(event);
    let status = event.data.status;
    if (status === 0) {
        startToCalc();
    }
}


function startToCalc() {
    let tStart = null, tEnd = null, total= null;
    let arr = [];
    for (let i = 1; i <= 1000; i++) {
        arr.push(i);
    }
    tStart = new Date().getTime();
    console.log(`tStart: ${tStart}`);
    
    total = arr.reduce((sum, item) => sum + item);
    tEnd = new Date().getTime();
    
    console.log(`tEnd: ${tEnd}`);
    
    const t = tEnd - tStart;
    postMessage(`succeed, time: ${t} ms, total: ${total}`);
    self.close();
}

