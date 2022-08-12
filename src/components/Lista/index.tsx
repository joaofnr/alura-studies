import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefa';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((i, x) => (
                    <Item
                        key={x}
                        {...i}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;