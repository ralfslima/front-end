"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    // Construtor
    function Aluno(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.mensagem();
    }
    // Método de média
    Aluno.prototype.media = function () {
        return (this.nota1 + this.nota2) / 2;
    };
    // Método de situação
    Aluno.prototype.situacao = function () {
        return this.media() >= 7 ? 'Aprovado' : 'Reprovado';
    };
    // Método de mensagem
    Aluno.prototype.mensagem = function () {
        // Realizar a média
        var media = this.media();
        // Realizar a situação
        var situacao = this.situacao();
        // Exibir mensagem
        console.log(situacao + ' com média ' + media);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
