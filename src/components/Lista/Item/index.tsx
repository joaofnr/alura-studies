import style from '../Lista.module.scss';

export default function Item({ nome, duracao }: { nome: string, duracao: string }) {
    return (
        <li className={style.item} >
            <h3>{nome}</h3>
            <span>{duracao}</span>
        </li >
    )
}