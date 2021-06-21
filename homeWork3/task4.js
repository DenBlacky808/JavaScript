/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
 только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */
'use strict'

for (let i = 1; i < 21; i++) {
    let pyramid = ''
    for (let b = 1; b <= i; ++b) {
        pyramid += '*'
    }
    console.log(pyramid)
}
