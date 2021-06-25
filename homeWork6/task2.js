/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
 */
'use strict'
const catalog = {
    containerElement: document.getElementById('catalog'),
    htmlCollection: document.getElementsByClassName('catalogElements'),
    previewSelector: '.mySuperCatalog',
    catalogWrapperClass: 'catalogWrapper',
    catalogElementClass: 'catalogWrapper__element',
    imageBtnClass: 'addToCart__btn',
    imageBtnSrc: 'buy.png',
    Product: [
        {
            id: '0',
            name: 'geforce 2080',
            cnt: 0,
            price: 10000
        },
        {
            id: '1',
            name: 'radeon 960',
            cnt: 0,
            price: 8000
        },
        {
            id: '2',
            name: 'rtx 3090',
            cnt: 0,
            price: 30000
        }
        ,
        {
            id: '3',
            name: 'CORE i5',
            cnt: 0,
            price: 9000
        },
        {
            id: '4',
            name: 'CORE i7',
            cnt: 0,
            price: 19000
        },
        {
            id: '5',
            name: 'CORE i9',
            cnt: 0,
            price: 29000
        }
    ],
    showCatalog() {

        let j = 0
        for (let i = 0; i < this.Product.length; i++) {
            const div = document.createElement('div')
            div.className = 'catalogElements'

            this.containerElement.appendChild(div)

            const buyBtnElement = new Image()
            buyBtnElement.classList.add(this.imageBtnClass)
            buyBtnElement.src = this.imageBtnSrc
            buyBtnElement.setAttribute('data-id_cat', this.Product[i].id)
            this.containerElement.appendChild(buyBtnElement)

        }
        for (let idiv of this.htmlCollection) {
            idiv.innerText = `${this.Product[j].name}: ${this.Product[j].price} р.`
            j++
        }

    },
    init() {
        // Object.assign(this.settings, userSettings);
        document.querySelector(this.previewSelector).addEventListener('click', (event) => {
            this.containerClickHandler(event)
        })
    },
    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        newCart.addToCart(event.target.dataset.id_cat)
        // console.log(event.target.dataset.id_cat)
        // console.log(this.goods)

        newCart.showCart()
    },
}
let cart = {
    goods: [
        {
            id: '0',
            name: 'geforce 2080',
            cnt: 1,
            price: 10000
        },
        {
            id: '1',
            name: 'radeon 960',
            cnt: 1,
            price: 8000
        },
        {
            id: '2',
            name: 'rtx 3090',
            cnt: 1,
            price: 30000
        }
    ],
}
let newCart = {
    containerElement: document.getElementById('cart'),
    htmlCartCollection: document.getElementsByClassName('cartElements'),
    goods: [],
    countBasketPrice() {
        let result = 0
        for (const key in this.goods) {
            const tempObj = Object.assign(this.goods[key])
            result += tempObj.cnt * tempObj.price
        }
        return result
    },
    createView() {
        this.containerElement.innerHTML = '';
        let goodsIds = []
        for (let tempArr of this.goods) {
            goodsIds.push(tempArr.id)
        }

        for (let i of goodsIds) {
            const div = document.createElement('div')
            div.className = 'cartElements'
            div.setAttribute('data-id', this.goods[i].id)
            this.containerElement.appendChild(div)
        }
    },
    showCart() {
        this.containerElement.innerHTML = ''
        this.createView()
        for (let idiv of this.htmlCartCollection) {
            let index = [].slice.call(this.htmlCartCollection).indexOf(idiv)
            idiv.innerText = `${newCart.goods[index].name}: ${newCart.goods[index].cnt} шт.`
        }
        const divCheckCart = document.createElement('div')
        divCheckCart.className = 'CheckCartElements'
        this.containerElement.appendChild(divCheckCart)
        divCheckCart.innerText = this.checkCart()


    },
    lengthArr(array) {
        return array.filter(Boolean).length
    },
    checkCart() {
        if (this.goods.length > 0) {
            return `В корзине: ${this.lengthArr(this.goods)} товаров на сумму ${this.countBasketPrice()} рублей`
        } else {
            return 'Корзина пуста'
        }

    },
    addToCart(id) {
        if (this.isGoodsInCart(id)) {
            this.goods[id].cnt++
        } else {
            this.goods[id] = catalog.Product[id]
            Object.assign(newCart, this.goods)
            this.goods[id].cnt++
        }
    },
    isGoodsInCart(id) {
        // if (this.goods.indexOf(id) == -1) {
        //     return true
        // }
        // else {
        //     return false
        // }

        for (let tempArr of this.goods) {
            console.log(tempArr)
            if (tempArr.id === id) {
                return true
            } else {
                return false
            }
        }
        // for (let i = 0; i < this.goods.length; i++) {  //0-5
        //     console.log(this.goods)
        // if (this.goods[ids].id == ids) return true
        // else if (i < this.goods.length) {
        //     continue
        // }
        // else {
        //     return false
        // }

        // }
    },
}

Object.assign(newCart.goods, cart.goods)


catalog.init()
catalog.showCatalog()
newCart.showCart()
