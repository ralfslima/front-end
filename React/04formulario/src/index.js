// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    // Construtor -> Primeiro método a ser executado
    constructor(props){
        super(props);
        
        // States -> Variáveis
        this.state = {
            nome : props.nome,
            idade : '',
            email: '',
            tudoPreenhido : false
        }
    }

    teclado = (obj) => {
        this.setState({[obj.target.name]:obj.target.value});

        setTimeout(() => {
            if(this.state.nome !== '' && this.state.idade !== '' && this.state.email !== ''){
                this.setState({tudoPreenhido:true});
            }else{
                this.setState({tudoPreenhido:false});
            }
        }, 10);
    }

    render(){
        return(
            <div>
                {
                    this.state.tudoPreenhido === false 
                    ?
                    <h1>Favor preencher todos os campos</h1>
                    :
                    <div>
                        <h1>Nome: {this.state.nome}!</h1>
                        <h1>Idade: {this.state.idade}</h1>
                        <h1>E-mail: {this.state.email}</h1>
                    </div>
                }

                <input type='text' value={this.state.nome}  name='nome'  onChange={this.teclado} />
                <input type='text' value={this.state.idade} name='idade' onChange={this.teclado} />
                <input type='text' value={this.state.email} name='email' onChange={this.teclado} />
            </div>
        )
    }

}

// Exportar
ReactDOM.render(<Componente nome='Ralf' />, document.getElementById('root'));