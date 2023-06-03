"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    // Construtor
    function Pessoa(nome, idade, trabalho) {
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
        this.mensagem();
    }
    // Método
    Pessoa.prototype.mensagem = function () {
        console.log('O nome informado é ' + this.nome);
        console.log('A idade informada é ' + this.idade);
        console.log(this.trabalho == true ? 'Está trabalhando' : 'Não está trabalhando');
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
