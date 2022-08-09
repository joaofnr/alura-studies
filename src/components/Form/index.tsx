import React from "react";
import Botao from '../Botao';
import style from './Form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa} action="">
                <p className={style['inputContainer']}><label
                    htmlFor="curso">Curso
                </label>
                    <input
                        required
                        id="curso"
                        name="curso"
                        placeholder="Nome do curso"
                        type="text" /></p>

                <p className={style.inputContainer}><label htmlFor="duracao">Duração
                </label>
                    <input
                        required
                        id="duracao"
                        name="duracao"
                        placeholder="Duração"
                        type="time"
                        step="1" /></p>
                <Botao>
                    Adicionar
                </Botao>
            </form >
        )
    }
}

export default Form;