/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 */

'use strict';

function drawDeck() {
    let containerElement = document.getElementById('deck')
    let taxiImg = 0
    let colNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    for (let row = 0; row < 9; row++) {
        const trElem = document.createElement('tr')
        containerElement.appendChild(trElem)
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('td')
            if ((row == 0) && col > 0) {
                cell.innerText = colNames[col - 1]
            }
            if ((col == 0) && row > 0) {
                cell.innerText = `${row}`
            }
            if (taxiImg % 2 != 0) {
                cell.style.backgroundColor = '#8B4513'
                if ((row == 0) || (col == 0)) {
                    cell.style.backgroundColor = '#eee'
                }

            }
            trElem.appendChild(cell)
            taxiImg++
        }
    }
}

drawDeck()