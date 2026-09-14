<script setup lang="ts">
import ListaComida from './ListaComida.vue';
import { pedirProducto, quitarProducto} from '../bases/functions';
import { postres } from '../constants/food';

</script>

<template>
    <div class="comida-menu">
        <div class="comida-lista">
            <ListaComida
                v-for="postre in postres"
                :key="postre.id"
                v-bind="postre"
                @pedir="pedirProducto(postre)"
                @quitar="quitarProducto(postre)"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
