import { Itarefa } from 'types/Tarefa';
import style from '../Lista.module.scss';


export default function Item({ tarefa, tempo, selecionado, completado, id}: Itarefa){
    console.log();
    
    return (
        <li className={style.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                Tempo: {tempo}
            </span>
        </li>
    )
}