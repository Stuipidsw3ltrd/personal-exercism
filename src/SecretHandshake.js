const ACTIONS = ["wink", "double blink", "close your eyes", "jump"];
function getBinary(n) {
    if (n <= 1) {
        return `${n}`;
    }
    return getBinary(Math.floor(n / 2)) + `${n % 2}`;
}
function commands(code) {
    let binaryString = getBinary(code);
    let binList = binaryString.split("").reverse();
    let actionResult = [];
    for (let i = 0; i < binList.length; i++) {
        if (binList[i] === "1") {
            if (i === 4) {
                actionResult.reverse();
                continue;
            }
            actionResult.push(ACTIONS[i]);
        }
    }
    return actionResult;
}
console.log(commands(31));
