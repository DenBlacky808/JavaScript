/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
 */
'use strict'

const catalog = {
    htmlCatalogElement: document.getElementById('catalog'),
    previewSelector: '.mySuperCatalog',
    cart: null,
    product: [
        {
            id: 0,
            name: 'geforce 2080',
            cnt: 0,
            price: 10000
        },
        {
            id: 1,
            name: 'radeon 960',
            cnt: 0,
            price: 8000
        },
        {
            id: 2,
            name: 'rtx 3090',
            cnt: 0,
            price: 30000
        }
        ,
        {
            id: 3,
            name: 'CORE i5',
            cnt: 0,
            price: 9000
        },
        {
            id: 4,
            name: 'CORE i7',
            cnt: 0,
            price: 19000
        },
        {
            id: 5,
            name: 'CORE i9',
            cnt: 0,
            price: 29000
        }
    ],

    init(cart) {
        this.cart = cart
        this.addEventHandlers()
        this.renderCatalogList()

    },

    addEventHandlers() {
        document.querySelector(this.previewSelector).addEventListener('click', (event) => {
            this.containerClickHandler(event)
        })
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return
        this.addToCart(event)
        this.renderCatalogList()
    },

    renderCatalogList() {
        this.htmlCatalogElement.innerHTML = ''
        if (this.getCatalogListLength() > 0) {
            this.product.forEach(item => {
                this.htmlCatalogElement.insertAdjacentHTML('beforeend', this.renderCatalogItem(item))
            })
        } else {
            this.htmlCatalogElement.textContent = 'Каталог пуст.'
        }
    },

    renderCatalogItem(item) {
        return `<div class="catalog-item">
                ${item.name}
                ${item.price} руб.
                <img class="catalog-items" data-id="${item.id}" src="buy.png">
            </div>`
    },

    getCatalogListLength() {
        return this.product.length
    },

    addToCart(event) {
        const id_product = +event.target.dataset.id
        const productToAdd = this.product.find((product) => product.id === id_product)
        this.cart.addToBasket(productToAdd)
    },
}

let cart = {
    goods: [
        {
            id: 0,
            name: 'geforce 2080',
            cnt: 1,
            price: 10000
        },
        {
            id: 1,
            name: 'radeon 960',
            cnt: 1,
            price: 8000
        },
        {
            id: 2,
            name: 'rtx 3090',
            cnt: 1,
            price: 30000
        }
    ],
    htmlCartElement: document.getElementById('cart'),

    init() {
        this.renderCartList()
    },

    renderCartList() {
        this.htmlCartElement.innerHTML = ''
        if (this.lengthCartGoods() > 0) {
            this.goods.forEach(item => {
                this.htmlCartElement.insertAdjacentHTML('beforeend', this.renderCartItem(item))
            })
            this.htmlCartElement.insertAdjacentHTML('beforeend', `Всего товаров на сумму :${this.countCart()}`)

        } else {
            this.htmlCartElement.textContent = 'Корзина пуста.'
        }

    },

    renderCartItem(item) {
        return `<div>
                ${item.name} - ${item.price} руб.   ${item.cnt} шт.
            </div>`
    },

    lengthCartGoods() {
        return this.goods.length
    },

    addToBasket(product) {
            const findInBasket = this.goods.find((item) => product.id === item.id)
            if (findInBasket) {
                findInBasket.cnt++
            } else {
                this.goods.push({...product, cnt: 1})
            }
            this.renderCartList()
    },

    countCart() {
        let result = 0
        for (const key in this.goods) {
            const tempObj = Object.assign(this.goods[key])
            result += tempObj.cnt * tempObj.price
        }
        return result
    },
}

catalog.init(cart)
cart.init()