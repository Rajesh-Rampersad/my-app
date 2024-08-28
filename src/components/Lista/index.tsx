import Item from "./Item";
import { Itarefa } from 'types/Tarefa';
import style from './Lista.module.scss';

interface Props {
    tarefas: Itarefa[];  // Array de objetos do tipo Itarefa (definido no types/Tarefa.ts)
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void;  // Função
}
function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item}/>                
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
