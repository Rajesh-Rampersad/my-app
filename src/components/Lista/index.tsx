import React from "react";
import style from './Lista.module.scss';

function Lista(){
    // Adicione os estudos do dia aqui, como:
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    },
    {
        tarefa: "Javascript",
        tempo: "01:30:00"
    },
    {
        tarefa: "TypeScript",
        tempo: "03:45:00"
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {/* Renderiza cada estudo */}
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            Tempo: {item.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;