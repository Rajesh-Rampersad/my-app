import { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from 'components/Cronometro';
import { Itarefa } from 'types/Tarefa';

function App() {
      // Adicione os estudos do dia aqui, como:
      const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
