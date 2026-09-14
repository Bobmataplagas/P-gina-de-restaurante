export type Desayuno = {
        id: number
        nombre: string
        descripcion: string
        precio: number
        cantidad: number
        imagen: string
    }

export type Bebida = {
        id: number
        nombre: string
        descripcion: string
        precio: number
        cantidad: number
        imagen: string
    }

export type Postre = {
        id: number
        nombre: string
        descripcion: string
        precio: number
        cantidad: number
        imagen: string
    }

import { ref } from 'vue'

export const desayunos = ref<Desayuno[]>([
    { id: 1, nombre: 'Bowl de oden', descripcion: 'Caldo caliente con tofu, huevo y vegetales', precio: 95, cantidad: 0, imagen: 'https://img.game8.co/3405458/cf1f450c9e36ca7194ce95b76b6a2f97.png/show' },
    { id: 2, nombre: 'Sandwich BLT', descripcion: 'Pan tostado con tocino, lechuga y tomate', precio: 85, cantidad: 0, imagen: 'https://img.game8.co/3394184/6affc3cdfb6f8dc05e47db75770af91c.png/show' },
    { id: 3, nombre: 'Hamburguesa de héroe', descripcion: 'Hamburguesa casera con queso, vegetales y papas', precio: 120, cantidad: 0, imagen: 'https://img.game8.co/3394190/21f7d8b81c8fed556be9542726d3928e.png/show' },
    { id: 4, nombre: 'Curry de pescado', descripcion: 'Pescado suave en salsa de curry con arroz', precio: 110, cantidad: 0, imagen: 'https://img.game8.co/3406056/504ac8ec171fa008db83ca83d8770a5d.png/show' },
])

export const bebidas = ref<Bebida[]>([
    { id: 5, nombre: 'Refresco', descripcion: 'Refresco frio servido con hielo', precio: 28, cantidad: 0, imagen: 'https://img.game8.co/3393880/6b8fd5fb60ac746c45a103b7e88ed854.png/show' },
    { id: 6, nombre: 'Smoothie verde', descripcion: 'Mezcla fresca de frutas, espinaca y yogur', precio: 55, cantidad: 0, imagen: 'https://img.game8.co/3394708/829be9ff860fa952bfe969551b94be77.png/show' },
    { id: 7, nombre: 'Ice Cream Float', descripcion: 'Refresco con una bola de helado cremoso', precio: 60, cantidad: 0, imagen: 'https://img.game8.co/3394182/ca1b42f97075063fe8cfbc35f774cc02.png/show' },
    { id: 8, nombre: 'Té de naranja', descripcion: 'Té cítrico con naranja y un toque de miel', precio: 40, cantidad: 0, imagen: 'https://img.game8.co/3401699/8c88defedf1575f113b6bdf7e877960e.png/show' },
])

export const postres = ref<Postre[]>([
    { id: 9, nombre: 'Crepa de futos rojos', descripcion: 'Crepa tibia rellena de frutos rojos y crema', precio: 75, cantidad: 0, imagen: 'https://img.game8.co/3403617/4540a5e55a5d1d5ce7edb49bd14ffac9.png/show' },
    { id: 10, nombre: 'Helado de mango', descripcion: 'Helado suave de mango con fruta fresca', precio: 58, cantidad: 0, imagen: 'https://img.game8.co/3406054/78ec44a733f2036fb6270de253f2d255.png/show' },
    { id: 11, nombre: 'Coctel de frutas', descripcion: 'Selección de frutas de temporada con miel', precio: 65, cantidad: 0, imagen: 'https://img.game8.co/3400777/ddf4d6728cb949424dd00c1a6c8e6f0a.png/show' },
    { id: 12, nombre: 'Helado de chocolate ruby', descripcion: 'Helado de chocolate ruby con toppings crujientes', precio: 62, cantidad: 0, imagen: 'https://img.game8.co/3400772/4a35e444d15af8a2cc07fcda79ceffdc.png/show' },
])