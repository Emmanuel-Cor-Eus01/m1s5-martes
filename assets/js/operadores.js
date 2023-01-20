console.log("Este es el archivo operadores");

let numero1 = 10;
let numero2 = 15;
let suma2 = numero1 + numero2;

console.log(`la suma es: ${numero1 + numero2}`);
console.log(`la resta es: ${numero1 - numero2}`);
console.log(`la multiplicacion es: ${numero1 * numero2}`);
console.log(`la divicion es: ${numero1 / numero2}`);

// alert("Esto es un alert");
// alert(`la divicion es: ${numero1 / numero2}`);

let edad2 = 17;
//quiero mostrar un mensaje si la persona es mayor de edad y otro si la persona no es mayor de edad
if(edad2 > 17){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}


const dia = "Jueves";
switch(dia){
    case "Lunes":
        console.log("Hoy es Lunes");
        break;
        case "Martes":
        console.log("Hoy es Martes");
        break;
        case "Miercoles":
        console.log("Hoy es Miercoles");
        break;
        case "Jueves":
        console.log("Hoy es Jueves");
        break;
        case "Viernes":
        console.log("Hoy es Viernes");
        break;
        case "Sabado":
        console.log("Hoy es Sabado");
        break;
        case "Domingo":
        console.log("Hoy es Domingo");
        break;
        default:
            console.log("Dia invalido");
            break;
}

for (let i = 0; i < 10; i++) {
    console.log(`Èl valor de i es: ${i} x ${i} = ${i*i}`);
}

let n = 0;
while(n < 3){
    n++;
    console.log(`El valor de n es: ${n}`);
}

 let nombre3 = prompt("Ingresa tu nombre");
 console.log(nombre3);