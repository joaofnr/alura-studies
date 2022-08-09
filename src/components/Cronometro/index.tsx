import Botao from "../Botao";
import Relogio from "../Relogio";
import style from './Cronometro.module.scss';

function Cronometro() {
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