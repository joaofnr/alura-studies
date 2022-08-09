import style from './Lista.module.scss';
import Item from './Item';

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