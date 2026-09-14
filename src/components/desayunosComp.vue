<script setup lang="ts">
import ListaComida from './ListaComida.vue';
import { pedirProducto, quitarProducto} from '../bases/functions';
import { desayunos } from '../constants/food';

</script>

<template>
    <div class="comida-menu">
        <div class="comida-lista">
            <ListaComida
                v-for="desayuno in desayunos"
                :key="desayuno.id"
                v-bind="desayuno"
                @pedir="pedirProducto(desayuno)"
                @quitar="quitarProducto(desayuno)"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
