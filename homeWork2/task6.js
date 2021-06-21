/*
6. Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов,
operation – строка с названием операции.
В зависимости от переданного значения операции
выполнить одну из арифметических операций
(использовать функции из пункта 5)
и вернуть полученное значение (использовать switch).
 */

function sumFunc(a, b) {
    return a + b
}

function diffFunc(a, b) {
    return a - b
}

function multFunc(a, b) {
    return a * b
}

function divFunc(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sumFunc':
            return sumFunc(arg1, arg2)
        case 'diffFunc':
            return diffFunc(arg1, arg2)
        case 'multFunc':
            return multFunc(arg1, arg2)
        case 'divFunc':
            return divFunc(arg1, arg2)
    }
}

console.log(mathOperation(5, 2, 'sumFunc'))