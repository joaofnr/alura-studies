import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from '../Botao';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid'; 

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        curso: '',
        duracao: '01:00:00'
    }

    adicionarCurso(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTarefas(tarefasSalvas => [
            ...tarefasSalvas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ])
        this.setState({
            curso: '',
            duracao: '01:00:00'
        })
    }
    render() {
        return (
            <form
                className={style.novaTarefa}
                onSubmit={
                    this.adicionarCurso.bind(this)
                }>
                <p className={style['inputContainer']}>
                    <label htmlFor="curso">Curso</label>
                    <input
                        required
                        id="curso"
                        name="curso"
                        value={this.state.curso}
                        onChange={
                            evento => this.setState({
                                ...this.state,
                                curso: evento.target.value
                            })
                        }
                        placeholder="Nome do curso"
                        type="text" /></p>

                <p className={style.inputContainer}>
                    <label htmlFor="duracao">Duração</label>
                    <input
                        required
                        id="duracao"
                        name="duracao"
                        value={this.state.duracao}
                        onChange={
                            evento => this.setState({
                                ...this.state,
                                duracao: evento.target.value
                            })
                        }
                        placeholder="Duração" /></p>
                <Botao type={'submit'}>
                    Adicionar
                </Botao>
            </form >
        )
    }
}

export default Form;