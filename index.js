let num1 = prompt('enter the first number'),
num2 = prompt('enter the second number'),
ops = prompt('enter operation')

let val1 = parseInt(num1)
let val2 = parseInt(num2)
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong input, key in numbers')
} 
else{
let ans = eval(`${num1}${ops}${num2}`)
alert(ans)
}