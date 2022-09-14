const ACTIONS = ["wink", "double blink", "close your eyes", "jump"]

function getBinary(n: number):string{
    if (n <= 1){
        return `${n}`
    }
    return getBinary(Math.floor(n / 2)) + `${n % 2}`
}

function commands(code: number): string[] {
    let binaryString:string = getBinary(code)
    let binList: string[] = binaryString.split("").reverse()
    let actionResult: string[] = []
    for (let i = 0; i < binList.length; i++){
        if (binList[i] === "1"){
            if (i === 4){
                actionResult.reverse()
                continue
            }
            actionResult.push(ACTIONS[i])
        }
    }
    return actionResult
  }

console.log(commands(31))