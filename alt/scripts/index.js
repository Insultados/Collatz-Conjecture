

$("#linechart_material").hide();
$("#main_info").hide();
$(".header").hide();
$(".footer").hide();
$(".container_main").hide();
$(".container_lab").hide();

let arrChart = [];
window.onload = init;
condition_count = 1;
elseif_count = 1
check_createRule = false;
check_createRule_error = false
lab_user_input = [];

function addButtonClick() {

    let userInput = document.getElementById("key").value;
    document.getElementById("path").innerHTML = "";
    document.getElementById("linechart_material").innerHTML = "";
    document.getElementById("step_len").innerHTML = "";
    document.getElementById("max_step").innerHTML = "";
    document.getElementById("max_num").innerHTML = "";
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
    document.getElementById("menu_item").innerHTML = "3N+1";
}


function showLabNewExperements() {
    $(".container_lab").show();
    $(".container_menu").hide();
    $(".header").show();
    $(".footer").show();
    document.getElementById("menu_item").innerHTML = "Новые эксперименты";
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

    let buttonConditionAdd = document.getElementById("condition_button_add");
    if (condition_count >= 1) {
        buttonConditionAdd.onclick = addCondtion;
    }

    let buttonConditionRemove = document.getElementById("condition_button_remove");
    if (condition_count >= 1) {
        buttonConditionRemove.onclick = removeCondition;
    }




    let buttonElseifAdd = document.getElementById("elseif_button_add00")
    if (elseif_count >= 0) {
        buttonElseifAdd.onclick = addElseif;
    }


    let buttonElseifRemove = document.getElementById("elseif_button_remove00")
    if (elseif_count >= 0) {
        buttonElseifRemove.onclick = removeElseif;
    }

    let buttonCreateRule = document.getElementById("create_rule")
    buttonCreateRule.onclick = createRule;

}




function addElseif() {
    let clonedNode = document.getElementById("items_condition00").cloneNode(false);
    let clonedSelect = document.getElementById("lab_items_selector00").cloneNode(true);


    let clonedButton1 = document.getElementById("condition_button_add").cloneNode(true);
    let clonedButton2 = document.getElementById("condition_button_remove").cloneNode(true);


    let clonedInput = document.createElement("input");
    clonedInput.className = "condition_input";
    clonedInput.id = "condition_input" + elseif_count;
    let clonedText = document.getElementById("condition_text00").cloneNode(true);
    let elemText = document.createElement("pre");
    elemText.textContent = "Иначе если ";
    let elseifblock = document.createElement("div")
    elseifblock.className = "elseifBlock"
    document.querySelector(".list_of_elseif").append(elseifblock);
    elseifblock.id = "elseifBlock" + elseif_count;
    let elemText1 = document.createElement("pre");
    elemText1.textContent = "   То N = N / ";
    let clonedInput1 = document.createElement("input");
    clonedInput1.className = "condition_input";
    clonedInput1.id = "condition_input" + elseif_count;
    let elseifActionDiv = document.createElement("div");
    elseifActionDiv.className = "elseif_action";
    elseifActionDiv.id = "elseif_action" + elseif_count;
    let elseifDiv = document.createElement("div");
    elseifDiv.className = "elseif";
    elseifDiv.id = "elseif" + elseif_count;

    document.querySelector("#elseifBlock" + elseif_count).append(elseifDiv);
    document.querySelector("div#elseif" + elseif_count).append(clonedNode);
    clonedNode.id = "items_condition" + elseif_count;
    document.querySelector("#items_condition" + elseif_count).append(elemText);
    document.querySelector("#items_condition" + elseif_count).append(clonedText);
    clonedText.id = "condition_text" + elseif_count;
    document.querySelector("#items_condition" + elseif_count).append(clonedInput);
    clonedInput.id = "condition_input" + elseif_count;
    document.querySelector("#items_condition" + elseif_count).append(clonedSelect);
    clonedSelect.id = "lab_items_selector" + elseif_count;

    document.querySelector("#elseif" + elseif_count).append(clonedButton1);
    clonedButton1.id = "condition_button_add" + elseif_count;

    document.querySelector("#elseif" + elseif_count).appendChild(clonedButton2);
    clonedButton2.id = "condition_select_button_remove" + elseif_count;

    document.querySelector("#elseifBlock" + elseif_count).append(elseifActionDiv);
    elseifActionDiv.className = "elseif_action";
    elseifActionDiv.id = "elseif_action" + elseif_count;
    document.querySelector("#elseif_action" + elseif_count).append(elemText1);
    document.querySelector("#elseif_action" + elseif_count).append(clonedInput1);
    clonedInput1.id = "action_condition_input" + elseif_count;

    clonedButton1.onclick = addCondtionElseIf;
    clonedButton2.onclick = removeConditionElseif;

    elseif_count++;
}

function removeElseif() {
    elseif_count--;
    $("#elseifBlock" + elseif_count).remove();
}

function removeCondition() {
    if (condition_count != 1) {
        condition_count--;
        $("#items_condition0" + condition_count).remove();
        $("#lab_items_selector0" + condition_count).remove();
    }

}

function addCondtion() {
    let clonedNode = document.getElementById("items_condition00").cloneNode(false);
    let clonedSelect = document.getElementById("lab_items_selector00").cloneNode(true);
    let clonedInput = document.createElement("input");
    clonedInput.className = "condition_input";
    clonedInput.id = "condition_input" + 0 + condition_count;
    let clonedText = document.getElementById("condition_text00").cloneNode(true);

    clonedNode.id = "items_condition" + 0 + condition_count;
    document.querySelector("div.list_of_conditions").append(clonedNode);
    document.querySelector("#items_condition" + 0 + condition_count).append(clonedText);
    clonedText.id = "condition_text" + 0 + condition_count;
    document.querySelector("#items_condition" + 0 + condition_count).append(clonedInput);
    clonedInput.id = "condition_input" + 0 + condition_count;
    document.querySelector("#items_condition" + 0 + condition_count).append(clonedSelect);
    clonedSelect.id = "lab_items_selector" + 0 + condition_count;

    condition_count++;

}

function removeConditionElseif() {
    condition_count--;
    $("#items_condition" + (elseif_count - 1) + condition_count).remove();
    $("#lab_items_selector" + (elseif_count - 1) + condition_count).remove();

}

function addCondtionElseIf() {
    let clonedNode = document.getElementById("items_condition00").cloneNode(false);
    let clonedSelect = document.getElementById("lab_items_selector00").cloneNode(true);
    let clonedInput = document.createElement("input");
    clonedInput.className = "condition_input";
    clonedInput.id = "condition_input" + (elseif_count - 1) + condition_count;
    let clonedText = document.getElementById("condition_text00").cloneNode(true);


    clonedNode.id = "items_condition" + (elseif_count - 1) + condition_count;
    document.querySelector("#items_condition" + (elseif_count-1)).append(clonedNode);
    document.querySelector("#items_condition" + (elseif_count - 1) + condition_count).append(clonedText);
    clonedText.id = "condition_text" + (elseif_count - 1) + condition_count;
    document.querySelector("#items_condition" + (elseif_count - 1) + condition_count).append(clonedInput);
    clonedInput.id = "condition_input" + (elseif_count - 1) + condition_count;
    document.querySelector("#items_condition" + (elseif_count - 1) + condition_count).append(clonedSelect);
    clonedSelect.id = "lab_items_selector" + (elseif_count - 1) + condition_count;
    condition_count++;
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
    path.innerHTML += (count + 1) + ") " + userInput.join('') + "</br>";

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


        path.innerHTML += (count + 1) + ") " + userInput.join('') + "</br>";
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

function reading_data() {

    let i = 0;
    let mas_if = [], mas_elseif = [], mas_result = [], mas_action = [], mas_andor = [];
    while (i < condition_count) {
        let data = document.getElementById("condition_input0" + i).value;
        mas_if.push(checkInput(data));
        i++;
    }

    i = 1
    while (i < elseif_count) {
        data = document.getElementById("condition_input" + i).value;
        mas_elseif.push(checkInput(data));
        i++;
    }

    i = 0;
    while (i < elseif_count) {
        data = document.getElementById("action_condition_input" + i).value;
        mas_action.push(checkInput(data));
        i++;
    }

    i = 0;
    while (i < condition_count - 1) {
        let data = document.getElementById("lab_items_selector0" + i).value;
        mas_andor.push(data);
        i++;
    }
    mas_action.push(checkInput(document.getElementById("action_condition_input_else0").value));
    mas_result.push(mas_if);
    mas_result.push(mas_elseif);
    mas_result.push(mas_action);
    mas_result.push(mas_andor);

    return mas_result;

}


function createRule() {
    lab_user_input = reading_data();
    let userIf = lab_user_input[0];
    let userElseif = lab_user_input[1];
    let userAction = lab_user_input[2];
    let userNumberButton = document.createElement("button");
    userNumberButton.className = "condition_select_button";
    userNumberButton.id = "user_number_button";
    userNumberButton.textContent = "Добавить"
    let userNumberInput = document.createElement("input");
    userNumberInput.className = "condition_input";
    userNumberInput.id = "userNumberInput";
    let timerInput = document.createElement("input");
    timerInput.className = "condition_input";
    timerInput.id = "userTimerInput";

    let labDiv = document.createElement("div");
    labDiv.id = "lab_div1";
    let timerDiv = document.createElement("div");
    timerDiv.id = "timer_div1";

    let userNumberDiv = document.createElement("div");
    userNumberDiv.id = "user_number_div1";

    let userTimerDiv = document.createElement("div");
    userTimerDiv.id = "user_timer_div1";



    let rulecreatedText = document.createElement("pre");
    rulecreatedText.id = "rule_text";
    rulecreatedText.textContent = 'Ваше правило создано! Введите число: ';

    let rulecreatedText1 = document.createElement("pre");
    rulecreatedText1.id = "rule_text";
    rulecreatedText1.textContent = "Введите максимальное время работы программы(в секундах): ";

    if (array_includes(userIf, [0, 0]) == false && array_includes(userElseif, [0, 0]) == false && userIf.includes(-1) == false && userElseif.includes(-1) == false && userAction.includes(-1) == false) {
        if (check_createRule == false) {
            $("#rule_text").remove();
            document.querySelector("#new_lab").append(labDiv);
            document.querySelector("#new_lab").append(timerDiv);

            document.querySelector("#lab_div1").append(rulecreatedText);
            document.querySelector("#timer_div1").append(rulecreatedText1);

            document.querySelector("#lab_div1").append(userNumberDiv);


            document.querySelector("#user_number_div1").append(userNumberInput);
            document.querySelector("#user_number_div1").append(userNumberButton);

            document.querySelector("#timer_div1").append(userTimerDiv);
            document.querySelector("#user_timer_div1").append(timerInput);

            let buttonAddRule = document.getElementById("user_number_button");
            buttonAddRule.onclick = addRule;
            $("#create_rule").hide();
            check_createRule = true;
        }
    }
    else {
        if (check_createRule_error == false) {
            rulecreatedText.textContent = 'Введены некорректные данные при создании правила! Попробуйте заново';
            document.querySelector("#new_lab").append(rulecreatedText);
            check_createRule_error = true;
        }
    }
}


function array_includes(x, y) {

    for (let i = 0; i < x.length; i++) {
        if (numEquality(x[i], y)) {
            return true;
        }
    }

    return false;
}




function addRule() {
    let user_input = checkInput(document.getElementById("userNumberInput").value);
    let user_conditions = lab_user_input;
    let path = [];
    let div_path = document.createElement("div");
    div_path.id = "lab_path";
    let condition_flag = false
    $("#new_lab_path").show();
    let end = 0;
    let start = new Date().getTime();

    let len_step = document.createElement("pre");
    len_step.id = "len_step1";

    let max_step = user_input;
    let max_step_text = document.createElement("pre");
    max_step_text.id = "max_step1";

    let cycling_text = document.createElement("pre");
    let cycling_text_block = document.createElement("div");
    cycling_text.id = "cycling_text";
    cycling_text_block.id = "cycling_text_block";
    let count = 1;

    $("#lab_path").remove();
    $("#cycling_text_block").remove();





    div_path.innerHTML += (user_input[0] == 0) ? count + ") " + user_input.slice(1, user_input.length).join("") + "</br>" : count + ") " + "-" + user_input.slice(1, user_input.length).join("") + "</br>";
    while (array_includes(path, user_input) == false && ((end - start) < parseInt(document.getElementById("userTimerInput").value) * 1000)) {
        let mas = [];
        let array = [];

        path.push(user_input);
        count++;

        for (let i = 0; i < user_conditions[0].length; i++) {
            mas.push(numEquality(division(user_input, user_conditions[0][i])[1], [0, 0]));
        }

        for (let i = 0; i < user_conditions[0].length; i++) {
            array.push(mas[i]);
            array.push(user_conditions[3][i]);
        }
        array.pop()

        for (let i = 0; i < array.length; i++) {
            if (array[i] == "and") {
                let condition = array[i - 1] * array[i + 1];
                array.splice(i - 1, 3, condition);

            }
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] == "and") {
                let condition = array[i - 1] * array[i + 1];
                array.splice(i - 1, 3, condition);

            }
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] == "or") {
                array.splice(i, 1);

            }
            if (array[i] == true) {
                array[i] = 1;
            }
        }



        res = array.includes(1);

        if (res) {
            user_input = division(user_input, checkInput(document.getElementById("action_condition_input0").value))[0];
        }
        else {

            for (let i = 0; i < user_conditions[1].length; i++) {
                if (numEquality(division(user_input, user_conditions[1][i])[1], [0, 0])) {
                    user_input = division(user_input, user_conditions[1][i])[0];
                    condition_flag = true;
                    break;
                }
            }
            if (condition_flag == false) {
                user_input = sum(multiply(user_input, checkInput(document.getElementById("action_condition_input_else0").value)), checkInput(document.getElementById("action_condition_input_else1").value));
            }
            else {
                condition_flag = false;
            }
        }

        if (numCompare(max_step, user_input) == true) {
            max_step = user_input;

        }

        div_path.innerHTML += (user_input[0] == 0) ? count + ") " + user_input.slice(1, user_input.length).join("") + "</br>" : count + ") " + "-" + user_input.slice(1, user_input.length).join("") + "</br>";
        end = new Date().getTime();

    }

    if (array_includes(path, user_input)) {
        cycling_text.textContent = 'Программа зациклилась на числе: ' + user_input.slice(1, user_input.length).join("");
        len_step.textContent = 'Кол-во шагов: ' + count;
        max_step_text.textContent = 'Максимальное число: ' + max_step.slice(1, max_step.length).join("");

    }
    else {
        cycling_text.textContent = 'За отведенное время зацикленности не обнаружнено :(';
        len_step.textContent = 'Кол-во шагов за отведенное время: ' + count;


    }


    document.querySelector("#new_lab_path").append(div_path);
    document.querySelector("#new_lab_path").append(cycling_text_block);
    document.querySelector("#cycling_text_block").append(cycling_text);
    document.querySelector("#cycling_text_block").append(len_step);
    document.querySelector("#cycling_text_block").append(max_step_text);




}
