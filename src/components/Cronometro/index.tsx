import Botao from "components/Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "common/utils/time";
import { Itarefa } from "types/Tarefa";

interface Props {
  
    selecionado: Itarefa
}
export default function Cronometro({ selecionado }: Props){
    console.log('conversao: ', tempoParaSegundos ('01:01:01'));
    
  
    return(
        <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio />
            </div>
            <Botao
                    texto= "Começar!"                
                />
        </div>
        

    )
}