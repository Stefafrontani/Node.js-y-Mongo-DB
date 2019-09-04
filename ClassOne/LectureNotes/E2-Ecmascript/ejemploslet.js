var peterParker  = "Peter Parker";

if (true) {
    var peterParker = "SpiderMan";
    console.log(peterParker);
}
console.log(peterParker);


let peterParker  = "Peter Parker";

if (true) {
    let peterParker = "SpiderMan";
    console.log(peterParker);
}
console.log(peterParker);

function hacerAlgo() {
    console.log(variableUno); // undefined
    console.log(variableDos); // ERROR!

    var variableUno = 10;
    let variableDos = 20;
}
hacerAlgo();
// las variables var son hoisteadas y las let no


let x = 10;
switch(x) {
    case 1:
        let foo;
        break;
    case 2:
        let foo;
        break;
    default:
        break;
} // ERROR, - foo has already been declared - Con var no pasa
// Todas sone valuadas en el mismo contexto al mismo tiempo

