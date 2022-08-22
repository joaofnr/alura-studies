import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({
    curso,
    duracao,
    selecionado,
    completado,
    id,
    selecionaTarefa
}: Props) {
    return (
        <li
            className={`
                ${style.item} 
                ${selecionado ? style.itemSelecionado : ''} 
                ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa({
                curso,
                duracao,
                selecionado,
                completado,
                id
            })}>
            <h3>{curso}</h3>
            <span>{duracao}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li >
    )
}