import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasSalvas => tarefasSalvas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Cronometro selecionado={selecionado} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
