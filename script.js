let edad = 25
edad += 5
console.log(edad)
console.log(5=="5")

num = [3,4,2,5,7,8]

num.push("hola")
//OF para los valores
//in para los índices
/*for(let n of num){
    console.log(n)
}
//forma de definir una función:
/*const sum = (a,b) => {
    return a+b
}*/
const sum = (a,b) => (a+b)

console.log(sum(2,1))

//let doubled = num.forEach((n)=>console.log(n*2))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//diccionarios:

let persona = {
    name: "juan",
    edad: 15
}

//console.log(persona)

class Animal{
    constructor(nombre){
        this.nombre = nombre
    }

    sound(){console.log("WOOF")}
}

let perro = new Animal()

perro.sound()

class Cat extends Animal{
    sound(){
        console.log("MIAU")
    }
}

let gato = new Cat()

gato.sound()

