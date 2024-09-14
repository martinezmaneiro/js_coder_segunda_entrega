function registrarCompras() {

    const productos = {
        'manzanas': 70,
        'bananas': 120,
        'naranjas': 30,
        'peras': 50,
        'frutillas': 250
    };

    let compras = [];
    let continuar = true;

    while (continuar) {

        let producto = prompt("Ingrese el producto (manzanas, bananas, naranjas, peras, frutillas):");


        if (producto in productos) {
    
            let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} en kilos:`));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Cantidad no válida, debe ser un número positivo.");
                continue;
            }

            let compra = {
                producto: producto,
                cantidad: cantidad,
                precioTotal: productos[producto] * cantidad
            };

            compras.push(compra);
        } else {
            alert("Producto no encontrado.");
        }

        continuar = confirm("¿Quiere seguir comprando?");
    }

    function calcularTotalCompras(array) {
        return array.reduce((total, compra) => total + compra.precioTotal, 0);
    }

    let totalCompras = calcularTotalCompras(compras);

    console.log("Compras registradas:");
    compras.forEach(compra => {
        console.log(`${compra.cantidad} ${compra.producto} a $${productos[compra.producto]} cada uno - Total: $${compra.precioTotal.toFixed(2)}`);
    });
    console.log(`Total de compras: $${totalCompras.toFixed(2)}`);
}

registrarCompras();