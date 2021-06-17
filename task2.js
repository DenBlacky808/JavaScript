/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов.
Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */
'use strict'

let objBasket = {
    goods: [
        {
            name:'geforce 2080',
            cnt: 10,
            price:  10000
        },
        {
            name: 'radeon 960',
            cnt: 5,
            price:  8000
        },
        {
            name: 'rtx 3090',
            cnt: 1,
            price:  30000
        }
    ],
    countBasketPrice() {
        let result = 0
        for (const key in objBasket.goods) {
            const tempObj = Object.assign(objBasket.goods[key])
            result += tempObj.cnt * tempObj.price
        }
        return result
    }
}
console.log(objBasket.countBasketPrice())
