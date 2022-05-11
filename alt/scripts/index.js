
$("#linechart_material").hide();
$("#main_info").hide();
$(".header").hide();
$(".footer").hide();
$(".container_main").hide();
$(".container_lab").hide();
let arrChart = [];
window.onload = init;



function addButtonClick() {

    let userInput = document.getElementById("key").value;
    document.getElementById("path").innerHTML = "";
    document.getElementById("linechart_material").innerHTML = "";
    document.getElementById("step_len").innerHTML = ""
    document.getElementById("max_step").innerHTML = ""
    document.getElementById("max_num").innerHTML = ""
    algorithmCollatz(userInput);
    $("#main_info").show();
    $("#linechart_material").show();
}

function clearButtonClick() {
    arrChart = [];
    document.getElementById("path").innerHTML = "";
    document.getElementById("linechart_material").innerHTML = "";
    document.getElementById("step_len").innerHTML = ""
    document.getElementById("max_step").innerHTML = ""
    document.getElementById("max_num").innerHTML = ""
    document.getElementById("key").value = "";
    $("#main_info").hide();
    $("#linechart_material").hide();

}

function addButtonClickLab() {
    let userInput2 = document.getElementById("key1").value;
    alert(checkInput(userInput2));

}

function showCollatz() {
    $(".container_main").show();
    $(".container_menu").hide();
    $(".header").show();
    $(".footer").show();
    document.getElementById("menu_item").innerHTML = "Лаборатория 3N+1";
}


function showLabNewExperements() {
    $(".container_lab").show();
    $(".container_menu").hide();
    $(".header").show();
    $(".footer").show();
    document.getElementById("menu_item").innerHTML = "Лаборатория новых эксперементов";
}



function init() {
    let button1 = document.getElementById("add_num")
    button1.onclick = addButtonClick;
    let button2 = document.getElementById("clear_all")
    button2.onclick = clearButtonClick;
    let button3 = document.getElementById("btn_Collatz")
    button3.onclick = showCollatz;
    let button4 = document.getElementById("btn_LabNewExperements")
    button4.onclick = showLabNewExperements;
    let buttonLab1 = document.getElementById("add_num1")
    buttonLab1.onclick = addButtonClickLab;
    let buttonLab2 = document.getElementById("clear_all1")
    buttonLab2.onclick = clearButtonClick;

}

function algorithmCollatz(userInput) {
    let index;
    let num;
    let count = 0;
    let len = userInput.length;;
    let curr = [];
    let number = count;
    let path = document.getElementById("path");
    userInput = isNumber(userInput);
    path.innerHTML += userInput.join('') + "</br>"; 

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

        if (numCompare(curr, userInput)) {
            curr = userInput;
            number = count;
        }


        arrChart[count][index] = num;
        len = userInput.length;


        path.innerHTML += userInput.join('') + "</br>";
    }
    for (i = count + 1; i < arrChart.length; i += 1) {
        arrChart[i][index] = null;
    }

    document.getElementById("step_len").innerHTML += "Кол-во шагов: " + count;
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
