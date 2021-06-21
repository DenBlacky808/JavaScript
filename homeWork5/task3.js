/*
3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
 */
'use strict'

let objCatalog = {
    Product: [
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
        ,
        {
            name: 'CORE i5',
            cnt: 12,
            price: 9000
        },
        {
            name: 'CORE i7',
            cnt: 10,
            price: 19000
        },
        {
            name: 'CORE i9',
            cnt: 6,
            price: 29000
        }
    ],
    containerElement: document.getElementById('catalog'),
    htmlCollection: document.getElementsByClassName('catalogElements'),
    showCatalog() {
        let j = 0
        for (let i = 0; i < this.Product.length; i++) {
            const div = document.createElement('div')
            div.className = 'catalogElements';
            this.containerElement.appendChild(div)
        }
        for (let idiv of this.htmlCollection) {
            idiv.innerText = `${objCatalog.Product[j].name}: ${objCatalog.Product[j].price} р.`
            j++
        }

    }
}

objCatalog.showCatalog()
