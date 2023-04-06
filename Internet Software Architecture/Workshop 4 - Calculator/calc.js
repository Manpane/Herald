//Student Name: Manoj Neupane
//Student ID: 2330700

//Accessing the HTML elements
var display = document.getElementById("display"); //display screen

//Globals
var first_operand = "";
var second_operand = "";
var selected_operation = "";
var last_operand = ""; // for multiple equals operation (repeating the previous operation)


/**
 * Sets all the globals to empty string.
 * Resets the calculator to initial state.
 */
function clear(){
    first_operand = "";
    selected_operation = "";
    second_operand = "";
    display.value="";
    last_operand = "";
}

/**
 * Evaluate the expression and give appropriate result.
 * It returns empty string if any error occurs while evalutaing the expression
 * @param  {string} expression mathematical expression of the calculation.
 * @return {number} the result of expression
 */
function evaluate(expression){ 
    if (expression.length==0){
        return expression; // if expression is empty string, return empty string.
    }
    try{
        return eval(expression);
    }catch{
        return "";
    }
}


/**
 * This function is called when any button is clicked. It is the function which defines
 * all the behaviour of the app.
 * 
 *  It detects what kind of button is pressed (number, operator, clear, or equals button).
 *  If clear button is detected, it calls the clear function to reset the calculator.
 *  If equals button is detected, evaluates and displays the result with some error
 *  checking.
 *      If the equal is pressed consecutively, the last operation is repeated.
 *      If empty string is returned from evaluate, the display is set as it is.
 *  
 *  If any operator is detected, multiple conditions are checked.
 * @param {HTMLButtonElement} btn The HTML element that is clicked.
 */
function onClicked(btn){
    if(btn.classList.contains("operator")){
        if (display.value.length>0){
            if(first_operand && selected_operation){
                if (!second_operand){
                    selected_operation = btn.value;
                }else{
                    second_operand = display.value;
                    display.value = evaluate(first_operand+selected_operation+second_operand);
                    second_operand = "";
                    selected_operation = btn.value;
                    first_operand = display.value;
                }

            }else{
                selected_operation = btn.value;
                first_operand = display.value;
                second_operand = ""
            }
        }else{
            if(btn.value=="-" && !first_operand){
                display.value+=btn.value;
            }
        }
    }else if (btn.value==="="){
        var result = evaluate(first_operand+selected_operation+second_operand);
        if (result){
            last_operand = second_operand+"";
            display.value = result;
            second_operand = "";
            first_operand = "";
        }else{
            if(last_operand && display.value && selected_operation){
                var res = evaluate(display.value+selected_operation+last_operand);
                if (res){
                    display.value = res;
                }
            }
        }
    }else if(btn.value==="cls"){
        clear();
    }else{
        if (selected_operation){
            if (!second_operand){
                display.value = btn.value;
                second_operand = btn.value;
            }else{
                display.value+=btn.value;
                second_operand = display.value;
            }
        }else{
            display.value += btn.value;
        }
    }
}

/**
 * Binds the click event of parameter element to onClicked function above
 * @param  {[HTMLElement]} element The element to be binded.
 */
function bindOnClick(element){
    element.addEventListener("click",e=>onClicked(e.target));
}

//Binding all the buttons to onClicked function.
document.querySelectorAll("button").forEach(e=>bindOnClick(e));

//Setting the calculator to initial state.
clear()


