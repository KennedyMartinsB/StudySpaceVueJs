
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
    // Oq difere este metodo do updated é que ele não é executado a cada atualização 
    storeTodos(){
        localStorage.setItem("todos", JSON.stringify(this.todos));
        console.log("LocalStorage Updated!!!")
    },
    // Lifecycle Hooks, dentro do vue existem o before create, created e beforeUpdate
    created() {
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
        console.log("Created!!!")
    },
    // Update é utilizado para pegarmos o estado na hora da atualização
    // É Possivel utilizar o beforeUpdate tbm porem ele pega o estado do localStorage antes da atualização
    updated() {
        // Após atuazar os Todos enviamos novamente esta lista para o localStorage
        // Dentro deste metodo não importa se o todos já existe pois a lista vai ser substituida
        localStorage.setItem("todos", JSON.stringify(this.todos));
        console.log("LocalStorage Updated!!!")
    }
};

Vue.createApp(todosApp).mount('#app')