<template>
        <section>
            <strong>
                {{ tempoDecorrido }}
            </strong>
        </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeCronometro',
    props:{
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },
    computed: {
        // Esta function vai retornar uma string
        tempoDecorrido () : string{
            // O new Date().toISOString() pega a data atual 
            // Que vem neste formato '2025-04-17T04:15:30.515Z'
            // .substring(11, 8) pega os valores a partir do 11 digito que é  04:17
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
        }
        
    },
})

</script>