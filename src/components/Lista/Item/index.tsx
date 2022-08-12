import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

export default function Item({ curso, duracao, selecionado, completado, id }: ITarefa) {
    console.log('Item adicionado: ', { curso, duracao, selecionado, completado, id })
    return (
        <li className={style.item} >
            <h3>{curso}</h3>
            <span>{duracao}</span>
        </li >
    )
}