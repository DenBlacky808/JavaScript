/*
2. С этого урока начинаем работать с функционалом интернет-магазина.
 Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
  стоимости корзины в зависимости от находящихся в ней товаров.
 */
'use strict'

const goods = [
    ['geforce 2080', 10, 10000],
    ['radeon 960', 5, 8000],
    ['rtx 3090', 1, 30000]
]

function countBasketPrice(basket) {
    let result = 0
    for (let good of basket) {
        console.log(good)
        result += good[2] * good[1]
    }
    return result
}

console.log(countBasketPrice(goods))
