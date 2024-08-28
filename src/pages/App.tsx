import { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from 'components/Cronometro';
import { Itarefa } from 'types/Tarefa';

function App() {
  // Inicializa el estado con un array vacío de tareas
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa | undefined>(undefined);

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);

    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id, // Marca la tarea seleccionada
        completado: tarefa.id === tarefaSelecionada.id ? false : tarefa.completado, // Si se selecciona, no está completado
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      {selecionado && <Cronometro selecionado={selecionado} />}
      
    </div>
  );
}

export default App;
