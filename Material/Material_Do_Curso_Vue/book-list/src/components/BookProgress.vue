<script setup>
import { computed } from "vue"


    const props = defineProps(['books'])

    const booksRead = computed(() => {
        return props.books.filter(book => book.isRead);
    })

    const booksReadMessage = computed(() => {
        return booksRead.value >= props.book.length ? 'Parabens você leu todos os livros' : `${booksRead.value} de ${books.length} livros lidos`;
    })

</script>

<template>
    <div class="books-read">
        <label for="progress">Seu Progresso</label>
        <br>
        <progress :value="booksRead" :max="books.length"></progress>
        <p>{{booksReadMessage}}</p>
    </div>
</template>