function isNumber(userInput) {
    let nums = '0123456789';
    let flag = true;
    for (i = 0; i < userInput.length; i += 1) {
        if (nums.includes(userInput[i]) == false) {
            document.getElementById("key").value = "";
            flag = false
        }
    }
    if (Number.isInteger(parseInt(userInput[0])) && (parseInt(userInput[0]) != 0) && flag) {
        userInput = Array.from(userInput);
        for (i = 0; i < userInput.length; i += 1) {
            userInput[i] = parseInt(userInput[i]);
        }
        return userInput;
    }
    else {
        alert("Введите корректное число!");
        document.getElementById("key").value = "";
        clearButtonClick();
    }
}



function checkInput(input) {
    let zeroToNine = '0123456789';
    let oneToNine = '123456789';
    if (input.length == 0) {
        return -1;
    }

    if (input.length == 1 && zeroToNine.includes(input[0])) {
        input = Array.from(input);
        for (i = 0; i < input.length; i += 1) {
            input[i] = parseInt(input[i]);
        }
        input.unshift(0);
        return input;
    }

    if (input[0] == "-" && oneToNine.includes(input[1])) {
        for (i = 2; i < input.length; i += 1) {
            if (zeroToNine.includes(input[i]) == false) {
                return -1;
            }
        }
        input = Array.from(input);
        input.shift();
        for (i = 0; i < input.length; i += 1) {
            input[i] = parseInt(input[i]);
        }
        input.unshift(1);
        return input;
    }

    if (oneToNine.includes(input[0])) {
        for (i = 1; i < input.length; i += 1) {
            if (zeroToNine.includes(input[i]) == false) {
                return -1;
            }
        }
        input = Array.from(input);
        for (i = 0; i < input.length; i += 1) {
            input[i] = parseInt(input[i]);
        }
        input.unshift(0);
        return input;
    }
    return -1;
}



function divisionTwo(userInput) {
    let length = userInput.length;
    let result = new Array;
    let remainder;
    let i;
    if (userInput[0] == 1) {
        remainder = 1;
        i = 1;
    }
    else {
        remainder = 0;
        i = 0;
    }
    while (i < length) {
        let quotient = Math.trunc((remainder * 10 + userInput[i]) / 2);
        remainder = (remainder * 10 + userInput[i]) % 2;
        i += 1;
        result.push(quotient);
    }
    return result;
}


function multiplyThree(userInput) {
    let result = new Array;
    let tmp;
    let prev = 0;
    let i = userInput.length - 1;

    while (i >= 0) {
        tmp = userInput[i] * 3 + prev;
        result.unshift(tmp % 10);
        prev = Math.trunc(tmp / 10);
        i -= 1;
    }

    if (prev != 0) {
        result.unshift(prev);
    }

    return result;
}

function plusOne(userInput) {
    let i = userInput.length - 1;

    while (i >= 0 && userInput[i] == 9) {
        userInput[i] = 0;
        i -= 1;
    }

    if (i == -1) {
        userInput.unshift(1);
    }
    else {
        userInput[i] += 1;
    }

    return userInput;
}


function longSum(a, b) {
    let tmp1;
    if (numCompare(a, b) == true) {
        tmp1 = a;
        a = b;
        b = tmp1;
    }
    let tmp;
    let aLen = a.length;
    let bLen = b.length;
    let prev = 0;
    let result = [];
    let i1 = aLen - 1;



    for (i2 = bLen - 1; i2 > -1; i2 -= 1) {
        tmp = a[i1] + b[i2] + prev;
        result.unshift(tmp % 10);
        prev = Math.trunc(tmp / 10);
        i1 -= 1;
    }

    while (i1 != -1 && prev != -1) {
        tmp = a[i1] + prev;
        result.unshift(tmp % 10);
        prev = Math.trunc(tmp / 10);
        i1 -= 1;
    }

    if (prev == 0 && i1 != -1) {
        result = a.slice(0, i1 + 1);
    }
    else if (prev != 0) {
        result.unshift(prev);
    }

    return result
}


function longSubtraction(a, b) {
    let result = [];
    let j = a.length - 1;

    for (i = b.length - 1; i > -1; i -= 1) {
        if (a[j] >= b[i]) {
            result.unshift(a[j] - b[i]);
        }
        else {
            result.unshift(a[j] + 10 - b[i]);
            a[j - 1] -= 1;
        }
        j -= 1;
    }
    if (a[j] >= 0) {
        result = a.slice(0, j + 1).concat(result);
    }
    else {
        while (a[j] < 0) {
            result.unshift(a[j] + 10)
            j -= 1;
            a[j] -= 1
        }
        if (j != 0 || a[j] != 0) {
            result = a.slice(0, j + 1).concat(result);
        }
    }

    while (result[0] == 0) {
        result.shift();
    }

    return result;
}


function numCompare(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return false;
    }
    else if (arr1.length < arr2.length) {
        return true;
    }
    else {
        for (i = 0; i < arr1.length; i += 1) {
            if (arr1[i] > arr2[i]) {
                return false;
            }
            else if (arr1[i] < arr2[i]) {
                return true;
            }
        }
        return false;
    }
}


function numEquality(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return false;
    }
    else if (arr1.length < arr2.length) {
        return false;
    }
    else {
        for (i = 0; i < arr1.length; i += 1) {
            if (arr1[i] > arr2[i]) {
                return false;
            }
            else if (arr1[i] < arr2[i]) {
                return false;
            }
        }
        return true;
    }
}


function sum(a, b) {
    let result = [];
    x = a.slice(1, a.length)
    y = b.slice(1, b.length)

    if (a[0] == b[0]) {
        result.push(a[0]);
        return result.concat(longSum(x, y));
    }

    if (numEquality(x, y) == true) {
        return [0, 0];
    }

    if (numCompare(x, y) == false) {
        result.push(a[0]);
        return result.concat(longSubtraction(x, y));
    }

    result.push(b[0]);
    return result.concat(longSubtraction(y, x))
}


function sub(a, b) {
    if (b[1] == 0) {
        return a;
    }
    b[0] = Number(!b[0]);
    return sum(a, b);
}


function shortMultiplication(a, b) {
    let result = [];
    let prev = 0;
    let tmp;
    for (i = (a).length - 1; i > -1; i -= 1) {
        tmp = a[i] * b + prev;
        result.unshift(tmp % 10);
        prev = Math.trunc(tmp / 10);
    }
    if (prev != 0) {
        result.unshift(prev);
    }

    return result;
}


function multiplication(a, b) {
    let result = [0];
    let add_zeros = b.length - 1;
    let d = new Set();
    let tmp = [0];
    if (numEquality(a, [0]) || numEquality(b, [0])) {
        return [0];
    }
    d[1] = a;
    for (let i = 0; i < b.length; i++) {
        if (b[i] == 0) {
            add_zeros -= 1;
        } else {
            if (d.has(b[i]) == true) {
                tmp = d[d.indexOf(b[i])];
            } else {
                tmp = shortMultiplication(a, b[i]);
                d[b[i]] = tmp;
            }


            for (let j = 0; j < add_zeros; j++) {
                tmp.push(0);
            }
            result = longSum(result, tmp);
            add_zeros -= 1;
        }
    }
    return result;
}


function multiply(a,b) {
    const x = a.slice(1,a.length);
    const y = b.slice(1, b.length);
    let result = [a[0]^b[0]];
    result = result.concat(multiplication(x,y));
    return result;
}