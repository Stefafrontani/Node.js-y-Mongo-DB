function QueHacemosHoy() {
    return "Conquistar el mundo"
}
console.log(QueHacemosHoy());

let respuesta = () => "No quiero hacer nada";
console.log(respuesta());

let suma = (a,b) => a + b;
console.log(suma(10,5));

let cuadrado = a => a * a;
console.log(cuadrado(5));

let saludar = (saludo, nombre) => {
    let mensaje = `${saludo} ${nombre}`;
    return mensaje;
}
console.log(saludar('Holiis', 'Giaco'))