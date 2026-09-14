export type productoCantidad = {
    cantidad: number
}

export function totalOrdenes<T extends productoCantidad>(productos: T[]) {
    return productos.reduce((total, producto) => total + producto.cantidad, 0)
}

export function pedirProducto(producto: productoCantidad) {
    producto.cantidad += 1
}

export function quitarProducto(producto: productoCantidad) {
    producto.cantidad = Math.max(0, producto.cantidad - 1)
}