/*
3.* Подумать над глобальными сущностями. К примеру, сущность
«Продукт» в интернет-магазине актуальна не только для корзины,
но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт»
имел единую структуру для различных модулей сайта, но в разных
местах давал возможность вызывать разные методы.
 */
'use strict'

let objCatalog = {
    graphics: [
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
    cpus: [
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
    ]
}