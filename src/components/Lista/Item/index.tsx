import style from '../Lista.module.scss';

interface ItemProps{
    item: {
        tarefa: string,
        tempo: string
    },
    index: number,
}
export default function Item({ item, index }: ItemProps){
    return (
        <li key={index} className={style.item}>
            <h3>
                {item.tarefa}
            </h3>
            <span>
                Tempo: {item.tempo}
            </span>
        </li>
    )
}