(function main() {
    test1();
})()

function test1() {
    console.log(add(0.56, 0.2));
    console.log(substract(7, 6.99));
}

function add(x, y) {
    if (isNaN(x) || isNaN(y)) return;

    let [xInteger, xFloat] = splitNumber(x);
    let [yInteger, yFloat] = splitNumber(y);

    const xFloatLen = xFloat.length;
    const yFloatLen = yFloat.length;
    let maxLen;

    if (xFloatLen > yFloatLen) {
        yFloat = yFloat * Math.pow(10, xFloatLen - yFloatLen);
        maxLen = xFloatLen;
    } else if (xFloatLen < yFloatLen){
        xFloat = xFloat * Math.pow(10, yFloatLen - xFloatLen);
        maxLen = yFloatLen;
    } else {
        maxLen = xFloatLen;
    }

    const integerOperation = Operation(xInteger * Math.pow(10, maxLen), yInteger * Math.pow(10, maxLen), "+");
    const floatOperation = Operation(xFloat, yFloat, "+");

    return (integerOperation + floatOperation) / Math.pow(10, maxLen);
}

function substract(x, y) {
    if (isNaN(x) || isNaN(y)) return;

    let [xInteger, xFloat] = splitNumber(x);
    let [yInteger, yFloat] = splitNumber(y);

    const xFloatLen = xFloat.length;
    const yFloatLen = yFloat.length;
    let maxLen;

    if (xFloatLen > yFloatLen) {
        yFloat = yFloat * Math.pow(10, xFloatLen - yFloatLen);
        maxLen = xFloatLen;
    } else if (xFloatLen < yFloatLen){
        xFloat = xFloat * Math.pow(10, yFloatLen - xFloatLen);
        maxLen = yFloatLen;
    } else {
        maxLen = xFloatLen;
    }

    const integerOperation = Operation(xInteger * Math.pow(10, maxLen), yInteger * Math.pow(10, maxLen), "-");
    const floatOperation = Operation(xFloat, yFloat, "-");

    return (integerOperation + floatOperation) / Math.pow(10, maxLen);
}

function multiply(x, y) {
    if (isNaN(x) || isNaN(y)) return;
}

function splitNumber(number) {
    if (Number.isInteger(number)) return [number.toString(), "0"];

    return number.toString().split('.');
}

function Operation(x, y, operater) {
    let result;
    x = Number(x);
    y = Number(y);
    switch(operater) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
    }

    return result;
}