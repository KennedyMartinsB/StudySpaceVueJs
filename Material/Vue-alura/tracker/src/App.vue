<template>
  <!-- Estas classes do bulma indicam que dentro da main haverá varias colunas, não há espaçamento 
   entre as colunas e permite varias linhas -->
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Sidebar/>
    </div>
    <div class="column is-three-quarter">
      <TrackerForm/>
    </div>

  </main>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/HomeSidebar.vue'
import TrackerForm from './components/HomeForm.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    TrackerForm
  }
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
