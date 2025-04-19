<template>
  <!-- Estas classes do bulma indicam que dentro da main haverá varias colunas, não há espaçamento 
   entre as colunas e permite varias linhas -->
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <Sidebar/>
    </div>
    <div class="column is-three-quarter">
      <TrackerForm @aoSalvarTarefas="salvarTarefas"/>
      <div class="list">
        <!-- Como não há banco de dados não recebemos uma chave de cada item -->
         <!-- Então para solucionar isso utilizamos o index de cada item da tarefa como key -->
        <HomeTask v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/HomeSidebar.vue'
import TrackerForm from './components/HomeForm.vue'
import HomeTask from './components/HomeTask.vue';
import ITask from './interface/ITask';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    TrackerForm,
    HomeTask
  },
  data(){
    return{
      tarefas: [] as ITask[]
    }
  },
  methods: {
    salvarTarefas(tarefa: ITask){
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0000 !important;
  font-weight: bold;
} */
.list{
  /* width: 99%; */
  padding: 1.25rem;
}
</style>
