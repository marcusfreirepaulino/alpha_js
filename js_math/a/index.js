
function summation(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
            throw new Error(`Impossible to sum ${num1} + ${num2}`);
        }
    }
    catch (e) {
        return e;
    }
    return (parseInt(num1, 10) + parseInt(num2, 10));
}



let x = 0;

function subtract(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0 || num1 < num2) {
            throw new Error(`Impossible to subtract ${num1} - ${num2}`);
        }
    }
    catch (e) {
        return e;
    }

    if (num1 === num2) {
        return x;
    }
    else{
    x = summation(x, 1);

    return subtract(summation(x,1),1);
    }
}