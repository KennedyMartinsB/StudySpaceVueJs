<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao}}
            </div>
            <div class="column">
                <HomeCronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ITask from '@/interface/ITask';
import HomeCronometro from './HomeCronometro.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'HomeTask',
    props: {
        tarefa: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    components: {
        HomeCronometro
    }
})

</script>