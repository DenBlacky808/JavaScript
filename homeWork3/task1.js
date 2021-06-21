/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

'use strict'
let a = 2

function isPrime(number) {
    let d = 2
    while (number % d != 0) {
        ++d
    }
    return d == number
}

while (a <= 100) {
    if (isPrime(a)) console.log(a)
    ++a
}
