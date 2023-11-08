
// var todos = [
//     {
//         text: 'Aprender HTML, CSS e Javascript',
//         done: true
//         // A variável done representa o estado da tarefa 
//     },
//     {
//         text: 'Aprender o básico de Vue JS',
//         done: false
//     },
//     {
//         text: 'Completar o desafio de Vue JS com excelência',
//         done: false
//     }
// ];

const todosApp = {
    data() {
        return {
            // Puxando os valores do array de dados criado acima
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addToDo: function(){
            if(this.newTodo.text){                
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("Tasks", JSON.stringify(this.todos))
            }
            else{
                alert("A tarefa não pode estar vazia!!!")
            }
        }
    },
    // Lifecycle Hooks
    beforeCreate() {
        console.log("Before create", this.todos)
    },
    created() {
        console.log("Created", this.todos)
    },
    beforeUpdate() {
        console.log("Before update", this.todos)
    },
};

Vue.createApp(todosApp).mount('#app')