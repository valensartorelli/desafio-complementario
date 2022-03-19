/* Consigna: Crear un algoritmo utilizando un ciclo */


let listaProductos = "";

for (let i = 1; i < 11; i++) {
    producto = prompt("Ingrese el producto " + i + " que necesita comprar");
    listaProductos = listaProductos + "\n" + producto;
}


alert("Lista del supermercado" + "\n" + listaProductos)