import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "../Relogio";
import style from './Cronometro.module.scss';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if (selecionado?.duracao) {
            setTempo(tempoParaSegundos(selecionado.duracao))
        }
    }, [selecionado])

    function contagemRegressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return contagemRegressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um curso e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao onClick={() => contagemRegressiva(tempo)}>COMEÇAR!</Botao>
        </div>
    );
}

export default Cronometro;