<template>
    <div class="box">
      <div class="columns">
        <div
          class="column is-8"
          role="form"
          aria-label="Formulário para criação de uma nova tarefa"
        >
          <input
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="descricao"
          />
        </div>
        <div class="column">
          <HomeTemporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
      </div>
    </div>
  </template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeTemporizador from './HomeTemporizador.vue';

export default defineComponent({
    name: 'TrackerForm',
    emits: ['aoSalvarTarefas'],
    components: {
        HomeTemporizador
    },
    data (){
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            // console.log('tempo da tarefa', tempoDecorrido)
            // console.log('descrição da tarefa', this.descricao)
            this.$emit('aoSalvarTarefas', {
              duracaoEmSegundos: tempoDecorrido,
              descricao: this.descricao
            })
            this.descricao = ''
            console.log('Caiu no finish')
        }
    }
})

</script>