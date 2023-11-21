<template>
  <div>

    <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount"/>

    <template v-if="this.question">
      <h1 v-html="this.question">
      </h1>

      <template v-for="(answer, index) in this.answers" v-bind:key="index">
        <input 
          :disabled="this.answerSubmitted"
          type="radio" 
          name="options" 
          :value="answer" 
          v-model="this.chosenAnswer"
          >        
        <label v-html="answer"></label><br>

      </template>
      <button class="send" v-if="!this.answerSubmitted" type="button" @click="submitAnswer()">Confirmar</button>
    </template>

      <section v-if="this.answerSubmitted" class="result">
        <template v-if="this.chosenAnswer == this.correctAnswer">
          <h4>&#9989; Parabéns, a resposta "{{this.correctAnswer}}" está correta.</h4>
        </template>
        <template v-else>
          <h4>&#10060;  Que pena, a resposta está errada. A resposta correta é "{{this.correctAnswer}}".</h4>
        </template>
        <button class="send" @click="this.getNewQuestion()"  type="button">Próxima pergunta</button>
      </section>
  </div>
</template>

<script>
// URL da API multipla escolha: https://opentdb.com/api.php?amount=1&category=12&difficulty=easy
// URL API true or false: https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean
import ScoreBoard from '@/components/ScoreBoard.vue'

export default {

  name: 'App',
  components: {
    ScoreBoard
  },
    data() {
      return {
        question: undefined,
        incorrectAnswers: undefined,
        correctAnswer: undefined,
        chosenAnswer: undefined,
        answerSubmitted: false,
        winCount: 0,
        loseCount: 0
      }
    },
    computed: {
      answers() {
        // As respostas incorretas fazem parte de um array
        var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
        // Metodo splice adiciona um elemento dentro do array e quantos elementos desejamos remover
        // O primeiro valor do splice corresponde a qual posição iremos adicionar o elemento
        // O segundo valor corresponde a quantidade de elementos que queremos remover nesse caso é 0
        // Nesta linha estamos adicionando a resposta correta em uma posição aleatória dentro do array
        // Math.random()*4 Significa que os valores sorteados vão de 0 até o tamanho do array
        answers.splice( Math.round(Math.random() * answers.length), 0, this.correctAnswer);
        return answers
      }
    },
    methods: {
      // Metodo de envio de resposta, valida se ela está correta ou não
      submitAnswer(){
        if(!this.chosenAnswer){
          alert("Selecione uma alternativa")
        } else{
          // Troca de estado do input
          this.answerSubmitted = true
          if(this.chosenAnswer == this.correctAnswer){
            console.log("Resposta correta "+ this.chosenAnswer)
            this.winCount++;
            console.log(this.winCount)
          } else{
            console.log("Você errou")
            this.loseCount++;
          }
        }
      },
      // Metodo de get na API
      getNewQuestion(){

        // Reiniciando as variáveis para ser possivel selecionar outro radio na proxima pergunta
        // Resetar a mensagem de acerto ou erro a pergunta
        this.chosen_answer = undefined;
        this.answerSubmitted = false;
        this.question = undefined;

        const api = 'https://opentdb.com/api.php?amount=1&category=12&difficulty=easy'
        this.axios.get(api).then((response)=> {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
        // console.log(response.data.results[0])
    })
      }
    },
    created() {
      this.getNewQuestion();
    }
}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;
}

h1 {
  margin-top: 40px;
}

input[type='radio']{
  margin: 12px 4px;
}

button.send {
  margin-top: 12px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  color: #fff;
  background-color: #1867c0;
  border: 1px solid #1867c0;
  cursor: pointer;
}

section.score {
  border-bottom: 1px solid black;
  padding: 24px;
  font-size: 18px;

  span {
    padding: 8px;
    font-weight: bold;
    border: 1px solid black;
  }
}
</style>
