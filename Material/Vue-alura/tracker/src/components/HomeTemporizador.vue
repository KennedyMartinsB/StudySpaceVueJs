<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <HomeCronometro :timeSeconds="timeSeconds"/>
        <button class="button" @click="startCount" :disabled="timerRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finishCount" :disabled="!timerRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeCronometro from './HomeCronometro.vue';

export default defineComponent({
    name: 'TrackerForm',
    components: {
        HomeCronometro
    },
    data (){
        return{
            timeSeconds: 0,
            cronometro: 0,
            timerRodando: false
        }
    },
    methods: {
        startCount(){
            // Iniciar a contagem
            // 1 segundo no set interval é igual a 1000
            console.log('Iniciando!!!')
            this.timerRodando = true
            this.cronometro = setInterval(()=>{
                // This é usado para refenciar um valor criado anteriormente antes da sua utilização no bloco
                this.timeSeconds+=1
            }, 1000)
        },
        finishCount(){
            // Finalizando contagem
            console.log('Finalizando!!!')
            this.timerRodando = false
            clearInterval(this.cronometro)
        }
    }
})

</script>