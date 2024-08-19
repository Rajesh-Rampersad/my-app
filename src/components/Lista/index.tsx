import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';
import { Itarefa } from 'types/Tarefa';

function Lista({ tarefas }: { tarefas: Itarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} item={item} index={index} />                
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
