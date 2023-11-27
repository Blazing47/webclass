let x=6
let y=50
console.log(x)
console.log("Hello world")

let a = 50+90
let b = 45-7
let c = 34/4
let d = 30%5
let e = 45**2
let f = (45%2)**4

console. log(a)
console. log(b)
console. log(c)
console. log(d)
console. log(e)
console. log(f)

//This does not change the value of acc
// let acc = 400
// acc - 50
// console.log(acc)

//this is how to change the value using let
let acc = 400
acc = acc-50 
acc = acc+50000
acc = acc-20000 
acc -= 20000
//the two codes above are the same 
console.log(acc)

const temp = 200
console.log(temp)


//classwork
let g = 32928%2
let h = 299876%2
let i = 28565%2

console.log(g)
console.log(h)
console.log(i)

let rice = 55000
rice = 55000 - (0.15 * 55000)
let milk = 30000
milk = 30000 - (0.15 * 30000)
let shoe = 12000
shoe = 12000 - (0.15 * 12000)
let total = (rice + milk + shoe)
console.log(total)


let minutes = 34892
let hours = 34892/60
console.log(hours)

account = 700000
accountbalance = 700000 - 82450
console.log(accountbalance)

SimpleIntrest = (5000*5*4)/100
console.log(SimpleIntrest)

volume=(22/7)*300*300*100
console.log(volume)

//How do you know data types
let num = 100
console.log(typeof(num))
//Whatever you put 'typeof' will show what type of character whether number or string or boolean etc

//Strings; strings are always indexed. the characters of strings start from 0
let username = "zara"
console.log(username[0])   //z
console.log(username.indexOf(a))    //-1
 
let rr = username.toUpperCase()  //this is to change a string from a lowercase to uppercase
let rs = username.toLowerCase()  // to change a string fromer uppercase to lower

console.log(rr)
console.log(rs)


// let username = 'Solensky'
// let desc


// let firstname = 'joseph'
// let initial = firstname[0].toUpperCase()
// console.log(initial)

// let lastname = '  Nonye  '
// console.log(lastname.trim())
// console.log(lastname)

//prompt
// let username = prompt('Enter your username')
// console.log(username.trim())

// //index of
// // if the value is not found in the string it is -1
// let email = 'gddhkkshdjhgmail.com'
// console.log(email.indexOf('@'))

// //slice
let fullname = 'nancy oloma'
let firstname = fullname.slice(0, fullname.indexOf(" "))
let lastname = fullname.slice(fullname.lastIndexOf(" ")+1)

console.log(fullname.slice(0,7))
console.log(fullname.slice(0,4))

console.log(firstname)
console.log(lastname)

let newuser = "Miss Bells"
let nextuser = newuser.replace("Bells", "Springs")
console.log(nextuser)

console.log("I am \n a girl")

console.log(`I counted ${3+4} girls`)

let item = `dress`
let quantity = 5
let price = 30 
console.log(`You bought ${quantity} ${item}, total price: ${quantity*price}`)

//Math objects 
console.log(Math.round(6.8)) // for rounding up numbers
console.log(Math.PI)
console.log(Math.pow(2,5))
console.log(Math.abs(-456))
console.log(Math.floor(3.99))
console.log(Math.random())