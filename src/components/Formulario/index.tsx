import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { Itarefa } from 'types/Tarefa';
import { v4 as uuidv4 } from "uuid"

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

// function Formulario({ setTarefas }: Props) {
//   const [tarefa, setTarefa] = useState("");
//   const [tempo, setTempo] = useState("00:00");
//   function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
//     evento.preventDefault();
//     setTarefas(tarefasAntigas => 
//       [
//         ...tarefasAntigas,
//         {
//           tarefa,
//           tempo,
//           selecionado: false,
//           completado: false,
//           id: uuidv4()
//         }
//       ]
//     )
//     setTarefa("");
//     setTempo("00:00");
//   }

//   return (
//     <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
//       <div className={style.inputContainer}>
//         <label htmlFor="tarefa">
//           Adicione um novo estudo
//         </label>
//         <input
//           type="text"
//           name="tarefa"
//           id="tarefa"
//           value={tarefa}
//           onChange={evento => setTarefa(evento.target.value)}
//           placeholder="O que você quer estudar"
//           required
//         />
//       </div>
//       <div className={style.inputContainer}>
//         <label htmlFor="tempo">
//           Tempo
//         </label>
//         <input
//           type="time"
//           step="1"
//           name="tempo"
//           value={tempo}
//           onChange={evento => setTempo(evento.target.value)}
//           id="tempo"
//           min="00:00:00"
//           max="01:30:00"
//           required
//         />
//       </div>
//       <Botao type="submit">
//         Adicionar
//       </Botao>
//     </form>
//   )
// }

  
    


function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState<string>('00:00:00');

  const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tarefa || !tempo) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    const novaTarefa = {
      tarefa,
      tempo,
      selecionado: false,
      completado: false,
      id: uuidv4(),
    };

    // Agrega la nueva tarea a la lista existente
    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa]);

    setTarefa('');
    setTempo('00:00:00');


  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input 
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input 
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit" texto="Adicionar" />
    </form>
  );
}

export default Formulario;
