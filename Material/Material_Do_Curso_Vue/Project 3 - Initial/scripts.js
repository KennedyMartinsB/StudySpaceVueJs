
var todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
        // A variável done representa o estado da tarefa 
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: false
    },
    {
        text: 'Completar o desafio de Vue JS com excelência',
        done: false
    }
];

const todosApp = {
    data() {
        return {
            // Puxando os valores do array de dados criado acima
            todos: window.todos,
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addToDo: function(){
            this.todos.push(this.newTodo);
            this.newTodo = {
                done: false
            };
        }
    },
};

Vue.createApp(todosApp).mount('#app')