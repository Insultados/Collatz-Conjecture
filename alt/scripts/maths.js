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
        return false
    }
}