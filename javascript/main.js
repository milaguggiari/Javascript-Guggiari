/* function activarCalcu () {

    let num1;
    do { 
        num1 = parseInt(prompt ("Ingresá el primer número"));

        if (isNaN(num1)) {
            alert("Número inválido");
        }
    } while(isNaN(num1));

    let num2 = parseInt(prompt("Ingresá el segundo número"));

    let operacion;
    do {
        operacion = prompt(`
        Seleccione una operación:
        1.Suma
        2.Resta
        3.Multiplicación
        4.División
        `);
        } while(operacion !== "1" && operacion !== "2" && operacion !== "3" && operacion !== "4");

    function calcular (numero1, numero2, operacion) {
        switch (operacion) {
            case "1":
                return numero1 + numero2;
            case "2":
                return numero1 - numero2;
            case "3":
                return numero1 * numero2;
            case "4":
                if (numero2 !== 0){
                    return numero1 / numero2;
                } else {
                    return "No se puede dividir por 0"
                }
            default:
                return "Operación inválida"
        }
    }

    let resultado = calcular(num1, num2, operacion);
    alert("El resultado es:" + num1 + operacion + num2 + "=" + resultado);

    let volverAcalcular = prompt ("¿Querés volver a calcular?");
    if (volverAcalcular.toLowerCase() === "si") {
        activarCalcu();
    }
}

activarCalcu(); */


/*let num1;
    do { 
        num1 = parseInt(prompt ("Ingresá el primer número"));

        if (isNaN(num1)) {
            alert("Número inválido");
        }
    } while(isNaN(num1));

    let num2 = parseInt(prompt("Ingresá el segundo número")); */

function activarPedido () {

let pedido;
do {
    pedido = prompt(`
    Seleccione una opción:
    1.Tortas
    2.Galletas
    3.Postres
    `);
    } while(pedido !== "1" && pedido !== "2" && pedido !== "3");

function pedir () {
    switch (pedido) {
        case "1":
            let gustosT;
            do { 
                gustosT = prompt(`Elija un sabor:
                1.Chocolate
                2.Vainilla y coco
            `);
                if (gustosT === "1") {
                     alert ("Elegiste una rica torta de choco!")
                } else if (gustosT === "2") {
                    alert ("Elegiste una esponjosa torta de vainilla")
                } else {
                    alert ("Elección inválida"); 
                }                   
            } while (gustosT !== "1" && gustosT !== "2");
                    break;

        case "2":
            let gustosG;
            do {
                gustosG = prompt(`Elija un sabor:
                1.Limón
                2.Pepas
                `); 
                if (gustosG === "1") {
                    alert ("Elegiste una suave galleta de limón!")
                } else if (gustosG === "2") {
                    alert ("Elegiste unas ricas pepas")
                } else {
                    alert ("Elección inválida")
                } 
            } while (gustosG !== "1" && gustoG !== "2");
                break;
            
        case "3":
            let gustosP;
            do {
                gustosP = prompt(`Elija un sabor:
                1.Tiramisú
                2.Flan
                `);
                if (gustosP === "1") {
                    alert ("Elegiste un cremoso postre Tiramisú")
                } else if (gustosP === "2") {
                    alert ("Elegiste un dulce Flan")
                } else {
                    alert ("Elección inválida")
                }
            } while (gustosP !== "1" && gustosP !== "2");
                break;

        default:
            return "Operación inválida"
    }
}

pedir();

let volverApedir = prompt ("¿Querés volver a pedir?");
    if (volverApedir.toLowerCase() === "si") {
        activarPedido();
    } else {
        alert("Muchas gracias por elegir")
    }
}

activarPedido();