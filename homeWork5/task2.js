/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
 Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

'use strict'

let objBasket = {
    goods: [
        {
            name: 'geforce 2080',
            cnt: 10,
            price: 10000
        },
        {
            name: 'radeon 960',
            cnt: 5,
            price: 8000
        },
        {
            name: 'rtx 3090',
            cnt: 1,
            price: 30000
        }
    ],
    containerElement: document.getElementById('cart'),
    countBasketPrice() {
        let result = 0
        for (const key in objBasket.goods) {
            const tempObj = Object.assign(objBasket.goods[key])
            result += tempObj.cnt * tempObj.price
        }
        return result
    },
    checkCart() {
        if (objBasket.goods.length > 0) {
            this.containerElement.innerText = `В корзине: ${objBasket.goods.length} товаров на сумму ${objBasket.countBasketPrice()} рублей`
        }
        else {
            this.containerElement.innerText = 'Корзина пуста'
        }
    }
}

objBasket.checkCart()
