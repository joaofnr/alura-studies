import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "../Relogio";
import style from './Cronometro.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

function Cronometro({ selecionado }: Props) {

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um curso e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Botao>COMEÇAR!</Botao>
        </div>
    );
}

export default Cronometro;