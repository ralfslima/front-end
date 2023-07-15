// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Botao extends React.Component{

  // Função de clique do botão
  mensagem(){
    alert('Hello World!');
  }

  mensagem2(nome){
    alert('O nome é ' + nome);
  }

  // Render
  render(){
    // return <button onClick={this.mensagem}>Clique aqui</button>
    //return <button onClick={this.mensagem2.bind(this, 'Ralf')}>Clique aqui</button>
    return <button onClick={() => {this.mensagem2('Ralf')}}>Clique aqui</button>
  }

}

// Exportar
ReactDOM.render(<Botao />, document.getElementById('root'));