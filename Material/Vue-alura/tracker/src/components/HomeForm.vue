<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulario para criação de tarefa">
                <input type="text" class="input" placeholder="Digite a tarefa que deseja iniciar">

            </div>
            <div class="column">
               <HomeTemporizador/>
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
    components: {
        HomeTemporizador
    }
})

</script>