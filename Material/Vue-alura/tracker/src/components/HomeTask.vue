<template>
    <MessageBox >
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <HomeCronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </MessageBox>
    <!-- <MessageBox /> -->
</template>

<script lang="ts">
import ITask from '@/interface/ITask';
import HomeCronometro from './HomeCronometro.vue';
import { defineComponent, PropType } from 'vue';
import MessageBox from './HomeMessageBox.vue';

export default defineComponent({
    name: 'HomeTask',
    props: {
        tarefa: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    components: {
        HomeCronometro,
        MessageBox
    }
})

</script>
