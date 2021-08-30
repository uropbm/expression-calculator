function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let bracketsOpen = 0
    let bracketsClose = 0

    expr = expr.replace(/\s/g, '')

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {
            bracketsOpen++
        }
        if (expr[i] == ')') {
            bracketsClose++
        }
    }

    if (bracketsOpen != bracketsClose) {
        throw "ExpressionError: Brackets must be paired"
    }

    const signs = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => {
            if (b == 0) {
                throw "TypeError: Division by zero."
            } else return a / b
        },
    }

    let arr = []
    let s = ''
    let result
    let j = 0
    let iStart, iFinish, count = 0

    // for (let i = 0; i < expr.length; i++) {
    while (j < expr.length) {
        // console.log(i)
        // console.log(!Number.isNaN(Number(expr[i])))
        if (!Number.isNaN(Number(expr[j]))) {
            while (!Number.isNaN(Number(expr[j]))) {
                s = s + expr[j]
                j++
            }
        } else {
            arr.push(expr[j])
            j++
        }
        // console.log(s)
        arr.push(s)
        s = ''
    }

    arr.find((elem, index) => {
        if (elem === '') {
            arr.splice(index, 1)
        } })


    dualBrackets(arr)

    for (let z = 0; z < 10;  z++) {
        // console.log(count)
        
            for (let i = iStart; i < iFinish; i++) {
                // console.log(iStart)
                // console.log(iFinish)
                // console.log(i)
                // console.log(arr)
                switch (arr[i]) {
                    case '*' : { 
                        calculateWithoutBrackets('*', i)
                    }
                    i = i - 2
                    iFinish = iFinish - 2
                    break
                    case '/' : {
                        calculateWithoutBrackets('/', i)
                    }
                    i = i - 2
                    iFinish = iFinish - 2
                    break
                }
            }

            for (let i = iStart; i < iFinish; i++) {
                // console.log(iStart)
                // console.log(iFinish)
                // console.log(i)
                // console.log(arr)
                switch (arr[i]) {
                    case '+' : { 
                        calculateWithoutBrackets('+', i)
                    }
                    i = i - 2
                    iFinish = iFinish - 2
                    break
                    case '-' : {
                        calculateWithoutBrackets('-', i)
                    }
                    i = i - 2
                    iFinish = iFinish - 2
                    break
                }
            }
            if (count > 0) {
                count = 0
                dualBrackets(arr) 
            }
    }
    
    for (let z = 0; z < 10;  z++) {
        for (let i = 0; i < arr.length; i++) {
            // console.log(i)
                // console.log(arr)
            switch (arr[i]) {
                case '*' : { 
                    calculateWithoutBrackets('*', i)
                }
                i = i - 2
                break
                case '/' : {
                    calculateWithoutBrackets('/', i)
                }
                i = i - 2
                break
            }
        }

        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '+' : { 
                    calculateWithoutBrackets('+', i)
                }
                i = i - 2
                break
                case '-' : {
                    calculateWithoutBrackets('-', i)
                }
                i = i - 2
                break
            }
        }
    }

    function calculateWithoutBrackets(sign, i) {
        result = signs[sign](Number(arr[i - 1]), Number(arr[i + 1]))
        arr.splice(i - 1, 3, result)
        // console.log(result)
    }

    // function calculateWithBrackets(sign, i) {
    //     result = signs[sign](Number(arr[i - 1]), Number(arr[i + 1]))
    //     arr.splice(i - 1, 3, result)
    // }

    function searchBrackets(a) {

        for (let i = 0; i < a.length; i++) {
            if (a[i] === '(') {
                iStart = i
                count++
            }
            if (a[i] === ')') {
                iFinish = i - 2
            }
        }

        arr.find((elem, index) => {
            if (elem === '(') {
                arr.splice(index, 1)
            } 
            if (elem === ')') {
                arr.splice(index, 1)
            } 
        })
    }

    function dualBrackets(a) {

        for (let i = 0; i < a.length; i++) {
            if (a[i] === '(') {
                // ind1++
                iStart = i
                count++
            }
        }
        for (let i = iStart; i < a.length; i++) {
            if (a[i] === ')') {
                iFinish = i - 2
                break
            }
        }
        if (count > 0) {
            arr.splice(iFinish + 2, 1)
            arr.splice(iStart, 1)
        }
    }

    // console.log(arr)

    return Math.floor(Number(arr) * 100000) / 100000


















    // let check = 0

    // let count = 0, iStart, iFinish

    // searchBrackets(expr)

    // if (count === 1) {
    //     for (let z = 0; z < 5; z++) {
    //         // console.log(expr)
            
    //         for (let i = iStart; i < iFinish - 1; i++) {
    //             searchBrackets(expr)
    //             // console.log(i)
    //             // console.log(iFinish)
    //             switch (expr[i]) {
    //                 case '*' : { 
    //                     calculateWithoutBrackets('*', i)
    //                 }
    //                 if (check === 1) {
    //                     i = iStart
    //                 }
    //                 break
    //                 case '/' : {
    //                     calculateWithoutBrackets('/', i)
    //                 }
    //                 if (check === 1) {
    //                     i = iStart
    //                 }
    //                 break
    //             }
    //         }

    //         for (let i = iStart; i < iFinish - 1; i++) {
    //             searchBrackets(expr)
    //             // console.log(i)
    //             switch (expr[i]) {
    //                 case '+' : { 
    //                     calculateWithoutBrackets('+', i)
    //                 }
    //                 if (check === 1) {
    //                     i = iStart
    //                 }
    //                 break
    //                 case '-' : {
    //                     calculateWithoutBrackets('-', i)
    //                 }
    //                 if (check === 1) {
    //                     i = iStart
    //                 }
    //                 break
    //             }
    //         }
    //     }
    // }
    // // console.log(expr)
    // expr = expr.replace(/\(/g, '').replace(/\)/g, '')
    // // console.log(expr)

    // for (let z = 0; z < 5; z++) {
    //     for (let i = 0; i < expr.length; i++) {
    //         // console.log(i)
    //         switch (expr[i]) {
    //             case '*' : { 
    //                 calculateWithoutBrackets('*', i)
    //             }
    //             if (check === 1) {
    //                 i = i - 2
    //             }
    //             break
    //             case '/' : {
    //                 calculateWithoutBrackets('/', i)
    //             }
    //             if (check === 1) {
    //                 i = i - 2
    //             }
    //             break
    //         }
    //     }

    //     for (let i = 0; i < expr.length; i++) {
    //         // console.log(i)
    //         switch (expr[i]) {
    //             case '+' : { 
    //                 calculateWithoutBrackets('+', i)
    //             }
    //             if (check === 1) {
    //                 i = i - 2
    //             }
    //             break
    //             case '-' : {
    //                 calculateWithoutBrackets('-', i)
    //             }
    //             if (check === 1) {
    //                 i = i - 2
    //             }
    //             break
    //         }
    //     }
    // }

    // function calculateWithoutBrackets(sign, i) {

    //     let coint, n, m, result, zaq
    //     let expr1 = '', expr2 = ''

    //     searchBrackets(expr)

    //         n = i - 1
    //         m = i + 1

    //     while (!Number.isNaN(Number(expr[n])) || expr[n] === '.') {
    //         // console.log(expr[n])
    //         // console.log(n)
    //         n--
    //     }

    //     while (!Number.isNaN(Number(expr[m])) || expr[m] === '.') {
    //         // console.log(expr[m])
    //         m++
    //     }

    //     if (expr[n] === '-') {
    //         expr1 = '-' + expr1
    //     }

    //     if ((expr[n] === '+') && (expr[n - 1] === ')')) {
    //         expr1 = '+' + expr1
    //     }

    //     for (let j = n + 1; j < i; j++) {
    //         expr1 = expr1 + expr[j]
    //     }
    //     console.log(expr1)

    //     if (expr[i] === '-') {
    //         expr2 = '-' + expr2
    //         expr[i] = "+"
    //         zaq = true
    //         console.log(expr2)
    //     }

    //     for (let j = i + 1; j <= m - 1; j++) {
    //         expr2 = expr2 + expr[j]
    //     }
    //     console.log(expr2)

    //     result = signs[sign](Number(expr1), Number(expr2))
    //     // console.log(result)

    //     if (zaq) {
    //         coint = expr1 + expr2
    //     } else coint = expr1 + expr[i] + expr2
    //     // console.log(coint)

    //     expr = expr.replace(coint, String(result))
    //     console.log(expr)

    //     if ((Math.floor(result / 10) === 0) || (Math.floor(result / 10) === -1))
    //         if (expr.length > 1)
    //             return check = 1
    //         else return check = 0

    //     expr1 = ''
    //     expr2 = ''
    // }

    // function searchBrackets(a) {

    //     for (let i = 0; i < a.length; i++) {
    //         if (a[i] === '(') {
    //             count++
    //             iStart = i
    //         }
    //         if (a[i] === ')') {
    //             iFinish = i
    //         }
    //     }
    // }

    // return Math.floor(Number(expr) * 100000) / 100000

}

module.exports = {
    expressionCalculator
}