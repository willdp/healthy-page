import React from 'react';
import './register.css';
import search from '../../../assets/imgs/search.svg';
import Illustration from '../../../assets/imgs/Illustration.svg';

const inputList = ['Nome', 'Nascimento', 'CPF', 'CEP', 'Endereço', 'Número', 'Cidade', 'UF'];

var inputValues = [];

var userInfos = {
    name: '',
    birth: '',
    cpf: '',
    CEP: '',
    adress: '',
    number: '',
    city: '',
    state: ''
}

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: []
        };
      }

      mailAPIService() {
          const CEP = document.querySelector('.CEP').value;
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
          .then(res => res.json())
          .then(
            (result) => {
            document.querySelector('.Endereço').value = result.logradouro;
            document.querySelector('.Cidade').value = result.localidade;
            document.querySelector('.UF').value = result.uf;
            }
          )
      }

    getValues() {
         inputList.map((input) => {
            inputValues.push(document.querySelector(`.${input}`).value);
         });
            if(inputValues.indexOf('') === -1) {
                userInfos.name = inputValues[0];
                userInfos.birth = inputValues[1];
                userInfos.cpf = inputValues[2];
                userInfos.CEP = inputValues[3];
                userInfos.adress = inputValues[4];
                userInfos.number = inputValues[5];
                userInfos.city = inputValues[6];
                userInfos.state = inputValues[7];
                localStorage.setItem('userInfos', JSON.stringify(userInfos));
                inputList.map((input) => {
                    document.querySelector(`.${input}`).value = '';
                 });
                 alert('Registrado com sucesso.');
                } else {
                    inputValues = [];
                    alert('Por favor preencha todos os campos.');
            }
    }  

    render () {
        return (
            <div className="register">
                <div className="register-page">
                    <h1>Register Now</h1>
                    <div className="register-container">
                        {
                        inputList.map(
                            (input) => {
                                return(
                                    input === 'CEP' ? 
                                        <div className="input-container">
                                            <p>{input}</p>
                                            <div className="input-button">
                                                <input
                                                type="text"
                                                className={"form-control " + input}
                                                placeholder={input}
                                                />
                                                <button className="btn" onClick={this.mailAPIService}>
                                                    <img src={search} alt= {search}></img>
                                                </button>
                                            </div>
                                        </div> :
                                        <div className="input-container">
                                            <p>{input}</p>
                                            <input
                                            type="text"
                                            className={"form-control " + input}
                                            placeholder={input}
                                            name={input}
                                            />
                                        </div>
                                )
                            }
                        )}
                    </div>
                    <button className="btn btn-register" onClick={this.getValues}>Register</button>
                </div>
                <img className="register-img" src={Illustration} alt = {Illustration}/>
            </div>
        )
    }
}