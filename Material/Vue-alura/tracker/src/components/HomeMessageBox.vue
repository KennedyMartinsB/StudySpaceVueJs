<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageBox'
})
</script>


<style scoped>
.box{
    background-color: #FAF0CA;
    color: rgba(0, 0, 0, 0.822);
    width: 98%;
    margin: auto;
}
</style>