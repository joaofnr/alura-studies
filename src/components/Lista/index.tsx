import React from "react";
import style from './Lista.module.scss';

function Lista() {
    const items = [
        {
            nome: 'React',
            duracao: '01:20'
        },
        {
            nome: 'TypeScript',
            duracao: '01:20'
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {items.map((i, x) => (
                    <li key={x} className={style.item}>
                        <h3>{i.nome}</h3>
                        <span>{i.duracao}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;