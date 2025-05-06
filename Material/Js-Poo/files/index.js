// Criação de classe
class Cliente{
    nome;
    cpf;
    // agencia;
    // saldo;
}

// Abstraindo saldo e agencia do cliente pois uma conta corrente que possui estes atributos

class ContaCorrente{
    agencia;
    // Sinal de # indica que o atributo é privado da classe porem esta convenção não foi implementada na linguagem
    // O Correto é adicionar um "_" na frente da propriedade para indicar que ela é ou deveria ser privada
    _saldo = 0;

    sacar(valor){
        // Saque
        // let valor = 200;
        // This indica que estamos alterando o valor DESTA conta corrente atual
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log("Saldo pós saque: "+this._saldo)
            // console.log(`Saque no valor de R$ ${valor} realizado!!!`)
            // console.log(`Valor da conta R$ ${this.saldo}`)
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            // console.log(`Depósito de R$ ${valor} realizado com sucesso`);
            // console.log(`Saldo atual de R$ ${this.saldo}`)
            console.log("Saldo pós deposito: "+this._saldo)
        }else{
            console.log(`O valor R$ ${valor} é inválido, insira um valor maior que R$ 0`)
        }
    }
}

// Criando o cliente no 
const cliente1 = new Cliente();

// setando valores do cliente 1
cliente1.nome = "Kennedy";
cliente1.cpf = 11122233308;
// cliente1.agencia = 1002;
// cliente1.saldo = 0;

const cliente2 = new Cliente();

cliente2.nome = "Ana";
cliente2.cpf = 11122233344;
// cliente2.agencia = 1002;
// cliente2.saldo = 0;

const contaCorrenteKnd = new ContaCorrente();
// contaCorrenteKnd.#saldo = 0;
contaCorrenteKnd.agencia = 1001;

// deposito e saque
// console.log(contaCorrenteKnd.saldo);
contaCorrenteKnd.depositar(200);
contaCorrenteKnd.sacar(50);
console.log(contaCorrenteKnd);



// console.log(cliente1)
// console.log(cliente2)