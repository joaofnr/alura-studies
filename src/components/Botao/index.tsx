import React from "react";
import style from './botao.module.scss';

class Botao extends React.Component<{
    children?: React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined
}> {
    render() {
        return (
            <button className={style.botao} type={this.props.type}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;