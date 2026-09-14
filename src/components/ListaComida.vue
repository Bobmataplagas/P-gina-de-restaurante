<script setup lang="ts">
const emit=defineEmits<{
    (x: 'pedir'): void
    (x: 'quitar'): void
}>()

defineProps<{
    nombre: string
    descripcion: string
    precio: number
    cantidad: number
    imagen: string
}>()
</script>


<template>
    <article class="comida-card">
        <img class="comida-imagen" :src="imagen" :alt="`Imagen de ${nombre}`" />
        <div>
            <h3>{{ nombre }}</h3>
            <p>{{ descripcion }}</p>
            <strong>${{ precio }}</strong>
        </div>
        <div class="comida-actions">
            <button type="button" :disabled="cantidad === 0" @click="emit('quitar')">−</button>
            <span aria-live="polite">{{ cantidad }}</span>
            <button type="button" @click="emit('pedir')">+</button>
        </div>
    </article>
</template>


<style scoped>

.comida-card {
    display: grid;
    grid-template-columns: 96px 1fr auto;
    align-items: center;
    gap: 1rem;
}

.comida-imagen {
    width: 96px;
    height: 96px;
    border-radius: 10px;
    object-fit: cover;
}

@media (max-width: 560px) {
    .comida-card {
        grid-template-columns: 72px 1fr;
    }

    .comida-imagen {
        width: 72px;
        height: 72px;
    }

    .comida-actions {
        grid-column: 2;
    }
}

</style>