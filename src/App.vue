<script setup lang="ts">
import { computed, ref } from 'vue';
import order from './assets/orderUp.png';
import akari from './assets/Akari_Minamino.png';
import desayunosComp from './components/desayunosComp.vue';
import bebidasComp from './components/bebidasComp.vue';
import postresComp from './components/postresComp.vue';
import { desayunos, bebidas, postres } from './constants/food';
import { totalOrdenes } from './bases/functions';

const activeCardSection = ref<'Desayunos' | 'Bebidas' | 'Postres'>('Desayunos');

const activeOrders = computed(() => {
  if (activeCardSection.value === 'Bebidas') return bebidas.value;
  if (activeCardSection.value === 'Postres') return postres.value;
  return desayunos.value;
});

const allOrders = computed(() => totalOrdenes([
  ...desayunos.value,
  ...bebidas.value,
  ...postres.value,
]));
</script>

<template>
  <img :src="order" alt="Pedido desayuno" class="img-cornerTopRight" style="width: 10%;" />
  <img :src="akari" alt="Akari Minamino" class="img-cornerBottomLeft" style="width: 22%;" />
  
  <div class="order-summary-corner" aria-live="polite">
    <span>{{ activeCardSection }}</span>
    <strong>{{ totalOrdenes(activeOrders) }} orden(es)</strong>
    <span class="order-summary-total-label">Todas las ordenes</span>
    <strong class="order-summary-total">{{ allOrders }} orden(es)</strong>
  </div>

  <div style="padding-left: 15%;">
  <h3 class="text-left color1 text-subtitle-contorno">
    Restaurante para todos los gustos
  </h3>
  <h1 class="text-left color1 text-title-contorno">
    Sandalia Amarilla
  </h1>
  </div>

  <div class="card-layout">
  <article class="game-card">
    <div class="card-tabs" role="tablist" aria-label="Menu">
      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'Desayunos' }"
        :aria-selected="activeCardSection === 'Desayunos'"
        role="tab"
        @click="activeCardSection = 'Desayunos'"
      >
        Almuerzos
      </button>
    
      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'Bebidas' }"
        :aria-selected="activeCardSection === 'Bebidas'"
        role="tab"
        @click="activeCardSection = 'Bebidas'"
      >
        Bebidas
      </button>

      <button
        type="button"
        class="card-tab"
        :class="{ 'card-tab--active': activeCardSection === 'Postres' }"
        :aria-selected="activeCardSection === 'Postres'"
        role="tab"
        @click="activeCardSection = 'Postres'"
      >
        Postres
      </button>
    </div>

    <div v-if="activeCardSection === 'Desayunos'" class="card-content"            role="tabpanel">
      <desayunosComp />
    </div>

    <div v-if="activeCardSection === 'Bebidas'" class="card-content" role="tabpanel">
      <bebidasComp />
    </div>

    <div v-if="activeCardSection === 'Postres'" class="card-content" role="tabpanel">
      <postresComp />
    </div>

  </article>
</div>

  
  
  
</template>

