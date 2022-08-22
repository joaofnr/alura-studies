import React from "react";
import style from './botao.module.scss';

class Botao extends React.Component<{
    children?: React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void
}> {
    render() {
        const { type = 'button', onClick } = this.props
        return (
            <button
                onClick={onClick}
                className={style.botao}
                type={type}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;