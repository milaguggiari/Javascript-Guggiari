function activarPedido () {

    function producto (titulo, precio, descripcion) {
        this.titulo = titulo;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    let listaPedidos =[];

    function tomarPedidos () {       
        let entrada = {
            nombre: prompt("Ingresá tu nombre"),
            direccion: prompt("Ingresá dirección de entrega"),
            };
        console.log (entrada);
        alert("Muchas gracias por elegir, pronto enviaremos tu pedido");
        return;
    } 

    function pedir (pedido) {
        let mensaje = "";
        switch (pedido) {
            case "1":
                let gustosT;
                do { 
                    gustosT = prompt(`Elija un sabor:
                    1.Chocolate
                    2.Vainilla y coco
                    `);
                    if (gustosT === "1") {
                        const producto1 = new producto ("Torta de chocolate", 5000, "Húmedo bizcocho de chocolate. Se vende por unidad");
                        console.log (producto1);
                        listaPedidos.push (producto1);
                        mensaje = "Tu pedido es: Torta de chocolate";
                        
                    } else if (gustosT === "2") {
                        const producto2 = new producto ("Torta de vainilla", 5000, "Esponjosa torta de vainilla. Se vende por unidad");
                        console.log (producto2);
                        listaPedidos.push (producto2);
                        mensaje = "Tu pedido es: Torta de vainilla";

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
                        const producto3 = new producto ("Galleta de limón", 5000, "Suave galleta de limón. Se vende por unidad");
                        console.log (producto3);
                        listaPedidos.push (producto3);
                        mensaje = "Tu pedido es: Galleta de limón";

                    } else if (gustosG === "2") {
                        const producto4 = new producto ("Pepas", 5000, "Masa fina rellena con dulce de membrillo. Se vende por unidad");
                        console.log (producto4);
                        listaPedidos.push (producto4);
                        mensaje = "Tu pedido es: Pepas";

                    } else {
                        alert ("Elección inválida")
                    } 
                } while (gustosG !== "1" && gustosG !== "2");
                    break;
                
            case "3":
                let gustosP;
                do {
                    gustosP = prompt(`Elija un sabor:
                    1.Tiramisú
                    2.Flan
                    `);
                    if (gustosP === "1") {
                        const producto5 = new producto ("Tiramisú", 5000, "Cremoso postre elaborado con materias primas de excelente calidad. Se vende por unidad");
                        console.log (producto5);
                        listaPedidos.push (producto5);
                        mensaje = "Tu pedido es: Tiramisú";

                    } else if (gustosP === "2") {
                        const producto6 = new producto ("Flan", 5000, "Dulce y artesanal postre. Se vende por unidad");
                        console.log (producto6);
                        listaPedidos.push (producto6);
                        mensaje = "Tu pedido es: Flan";
                        
                    } else {
                        alert ("Elección inválida")
                    }
                } while (gustosP !== "1" && gustosP !== "2");
                    break;

            default:
                alert ("Operación inválida")
        }
    }

    function volverApedir() {
        let volver;
        do {
            volver = prompt ("¿Querés volver a pedir? (si/no)");
        if (volver.toLowerCase() === "si") {
                activarPedido(pedido);
            } else if ( listaPedidos.length > 0) {
                tomarPedidos();
                return;
            } else {
                alert ("Muchas gracias por su respuesta");
                return;
            }
        } while (volver.toLowerCase() === "no");
    }

    let pedido;

    do {
        pedido = prompt(`
            ¿Querés hacer un pedido? (si/no)
        `);
        if (pedido.toLowerCase() === "si") {
            let seleccion = prompt (`
                Seleccione una opción:
                1.Tortas
                2.Galletas
                3.Postres
                `);
            pedir(seleccion);
            } else {
                alert ("Gracias por su respuesta");
            }
        } while(pedido.toLowerCase() !== "no" && volverApedir());
        
}

activarPedido(); 