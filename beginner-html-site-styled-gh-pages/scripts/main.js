// 아래 코드 왼쪽에 있는것은 변수를 만드는것
let myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello world!';

// 변수 선언
let myVariable
// 값 할당
myVariable = 'hello'

console.log(myVariable)

let myVariable2 = 'world'

console.log(myVariable2)

var a = 1
var b = 2
const c = 3

console.log(a,b,c,)

a = 10
b = 20
// const 로 선언된 변수는 재할당 불가능
// c = 30

// var a = 100
// // let, const로 선언된 변수는 재선언 불가능.
// let b = 200
// const c = 300

let stringVar = 'hello'
let numberVar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}

console.log(stringVar, numberVar, boolVar, arrayVar, objectVar)

arrayVar.push('hello')
console.log(arrayVar)

objectVar.name = 'kim'
objectVar.location = 'seoul'
console.log(objectVar)

// my_dict = Dict()
let myObject = new Object()
myObject.name = 'park'

console.log(myObject)

// 연산자
let myVarA = 10
let myVarB = '10'

console.log(myVarA == myVarB)
console.log(myVarA === myVarB)

// 조건문

// let iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//     alert('choco')
// } else{
//     alert('no choco')
// }

// 반복문
let i = 0
while (i<5) {
    console.log(i)
    i++
    // python => i += 1
}

console.log('for1')
for (let i = 0 ; i<5 ; i++){
    console.log(i)
}

console.log('for2')
let myArray = [1,2,3,4,5]
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

console.log('for in')
// for item in myArray:
for (let item in myArray) {
    console.log(item)
}

console.log('for of')
for (let item of myArray) {
    console.log(item)
}

console.log('for each')
myArray.forEach( function(item, index, array){
    console.log(item,index,array)
} )

// 함수

// def multi():

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply(3,4))

// 함수 표현식
let multiply2 = function (num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply2(3,4))

// 화살표 함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}

console.log(multiply3(3,4))

// 화살표 함수 생략 1
// {}안의 코드가 return 하는 문장 하나만 있을때 {}와 return을 생략가능
// let multiply4 = (num1,num2) => {
//     return num1 * num2
// }
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3,4))

// 화살표 함수 생략 2
let multiply5 = (num1) => num1 * 2
console.log(multiply5(10))

// onclick 이벤트
document.querySelector('html').onclick = function() {
    alert('hihi')
}

// 이벤트 리스너
let myH1 = document.querySelector('hi')
// addEventListener(무슨 일이 일어 났을때, 무든 행동을 할지)
// event 대신 e라고 써도 된다
myH1/addEventListener('click', function(e){
    //alert('hello')
    console.log('hihi')
    console.log(e)
})

let myImage = document.querySelector('img')
console.log(myImage)

myImage.addEventListener('click', function(){
    let src = myImage.getAttribute('src')

    if (src === 'images/firefo-icon.png'){
        myImage.setAttribute('src', 'images/123.jpg')
    } else {
        myImage.setAttribute('src', 'images/1234.png')
    }
})

// 비동기
console.log('hi')
// setTimeout(실행시킬 함수, 시간)
setTimeout(function(){console.log('??')}, 1000)

console.log('bye)')

// 어떤 버튼을 눌렀을때

// google 서버에서 사진을 한장 다운 받아서

// 화면에 출력

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

// let response = fetch(URL)
// let result = response.json()
// console.log(response)
// console.log(result)

fetch(URL)
    // .then( function(response){return response.json()})
    .then(Response => Response.json())
    .then(json => console.log(json))

async function fetchAndPrint() {
    let response = await fetch(URL)
    let result = await response.json()

    console.log(result)
}

fetchAndPrint()


const liElements = document.querySelector('li')
console.log(liElements)

// for (const li of liElements) {
//     console.log(li)
// }

// liElements.forEach(function(li){
//     console.log(li)
// })

// liElements.forEach(function(li){
//     li.style.color = 'red'
//     li.style.backgroundColor = 'blue'
// })

liElements.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.target)
        console.log(e.target.textContent)

        if (e.target.textContent === 'thinkers'){
            e.target.style.color = 'black'
        }
    })
})