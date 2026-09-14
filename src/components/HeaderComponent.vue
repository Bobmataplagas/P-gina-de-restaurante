<script lang="ts" setup>
const emit = defineEmits<{
  selectSection: [section: 'Desayunos' | 'Bebidas' | 'Postres']
}>()
</script>

<template>
    <header>
        <nav>
            <ul>
              <li><button type="button" @click="emit('selectSection', 'Desayunos')">Desayunos</button></li>
              <li><button type="button" @click="emit('selectSection', 'Bebidas')">Bebidas</button></li>
              <li><button type="button" @click="emit('selectSection', 'Postres')">Postres</button></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
header {
  margin-bottom: 4%;
}

nav ul {
  display: flex;
  gap: 2%;
  justify-content: center;
  flex-wrap: wrap;
}

nav button {
  display: inline-block;
  padding: 10px 10px 10px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 25%;
  background: rgba(161, 161, 161, 0.555);
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

nav button:hover {
  background: rgba(102, 250, 255, 0.692);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.068);
}
</style>