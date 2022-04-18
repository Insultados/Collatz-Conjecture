function isNumber(userInput) {
    if (Number.isInteger(parseInt(userInput[0])) && (parseInt(userInput[0])) != 0) {
        userInput = Array.from(userInput);
        for (i = 0; i < userInput.length; i += 1) {
            try {
                userInput[i] = parseInt(userInput[i]);
            }
            catch (error) {
                break;
            }
        }
        return userInput;
    }
    else {
        alert("Введите корректное число!");
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
    let prev = 0;
    let i = userInput.length - 1;
    let tmp;

    while (i != -1) {
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


function longSum(n1, n2) {
    let tmp;
    let l1 = n1.length;
    let l2 = n2.length;
    let prev = 0;
    let result = [];
    let i1 = l1 - 1;

    for (i2 = l2 - 1; i2 > -1; i2 -= 1) {
        tmp = n1[i1] + n2[i2] + prev;
        result.unshift(tmp % 10);
        prev = Math.trunc(tmp / 10);
        i1 -= 1;
    }

    while (i1 != -1 && prev != -1) {
        tmp = n1[i1] + prev;
        result.unshift(tmp % 10);
        prev = Math.trunc(tmp / 10);
        i1 -= 1;
    }

    if (prev == 0 && i1 != -1) {
        result = n1.slice(0, i1 + 1);
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

    return result;
}

function arrayCompare(arr1, arr2) {
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

function addButtonClick() {

    let userInput = document.getElementById("key").value;
    document.getElementById("path").innerHTML = "";
    document.getElementById("linechart_material").innerHTML = "";
    document.getElementById("linechart_material").style.background = "#fff";
    document.getElementById("stepLen").innerHTML = ""
    document.getElementById("max_step").innerHTML = ""
    document.getElementById("max_num").innerHTML = ""
    algorithmCollatz(userInput);


}

function clearButtonClick() {
    arrChart = [];
    document.getElementById("path").innerHTML = "";
    document.getElementById("linechart_material").innerHTML = "";
    document.getElementById("linechart_material").style.background = "#95c0eb";
    document.getElementById("linechart_material").style.background = "#95c0eb";
    document.getElementById("stepLen").innerHTML = ""
    document.getElementById("max_step").innerHTML = ""
    document.getElementById("max_num").innerHTML = ""
}

function showMenu() {
    $(".container_main").show();
    $(".container_menu").hide();
    $(".header").show();
    $(".footer").show();
}

function init() {
    let button1 = document.getElementById("addEl")
    button1.onclick = addButtonClick;
    let button2 = document.getElementById("clearEl")
    button2.onclick = clearButtonClick;
    let button3 = document.getElementById("btn_menu1")
    button3.onclick = showMenu;
}

$(".header").hide();
$(".footer").hide();
$(".container_main").hide();
let arrChart = [];
window.onload = init;


function algorithmCollatz(userInput) {
    let num;
    let count = 0;
    let len;
    let curr = [];
    let number;
    let index;
    userInput = isNumber(userInput);
    let element = document.getElementById("path");
    element.innerHTML += userInput.join('') + "</br>";
    len = userInput.length;
    number = count;
    curr = userInput;
    num = parseInt(userInput.join(''));
    if (count >= arrChart.length) {
        arrChart.push([]);
        arrChart[count][0] = count + 1;
    }
    index = arrChart[count].length;
    arrChart[count][index] = num;

    while (len != 1 || userInput[0] != 1) {
        if (userInput[len - 1] % 2 == 0) {
            userInput = divisionTwo(userInput);
        }
        else {
            userInput = multiplyThree(userInput);
            userInput = plusOne(userInput);
        }
        num = parseInt(userInput.join(''));

        count += 1;
        if (count >= arrChart.length) {
            arrChart.push([]);
            arrChart[count][0] = count + 1;
        }

        if (arrayCompare(curr, userInput)) {
            curr = userInput;
            number = count;
        }


        arrChart[count][index] = num;
        len = userInput.length;


        element.innerHTML += userInput.join('') + "</br>";
    }
    for (i = count + 1; i < arrChart.length; i += 1) {
        arrChart[i][index] = null;
    }

    document.getElementById("stepLen").innerHTML += "Кол-во шагов: " + count;
    document.getElementById("max_num").innerHTML += "Максимальное число: " + curr.join('');
    document.getElementById("max_step").innerHTML += "Кол-во шагов до максимального числа: " + number;
    google.charts.load('current', { 'packages': ['line'] });
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {

    let data = new google.visualization.DataTable();
    data.addColumn('number', 'Steps');

    for (i = 1; i < arrChart[0].length; i += 1) {
        data.addColumn('number', arrChart[0][i]);
    }
    data.addRows(arrChart);

    let options = {
        chart: {
            title: 'График пути чисел: '
        },
        width: 900,
        height: 500
    };

    let chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

