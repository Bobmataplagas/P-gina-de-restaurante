<script setup lang="ts">
    import ListaComida from './ListaComida.vue';
    import { pedirProducto, quitarProducto} from '../bases/functions';
    import { bebidas } from '../constants/food';

</script>

<template>
    <div class="comida-menu">
        <div class="comida-lista">
            <ListaComida
                v-for="bebida in bebidas"
                :key="bebida.id"
                v-bind="bebida"
                @pedir="pedirProducto(bebida)"
                @quitar="quitarProducto(bebida)"
            />
        </div>
    </div>
</template>


<style scoped>


</style>