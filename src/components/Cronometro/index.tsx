import Botao from "components/Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "common/utils/time";
import { Itarefa } from "types/Tarefa";
import { useEffect, useState } from "react";

interface Props {
  
    selecionado: Itarefa | undefined
    finalizarTarefa: () => void; // Função para finalizar a tarefa (requerida)
}
export default function Cronometro({ selecionado, finalizarTarefa }: Props){   
  const [tempo, setTempo] = useState<number>()

  useEffect(() =>{
   if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo))    
   }
  },[selecionado])

  function regressiva(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1)
        regressiva(contador - 1)
      }
      else{
        finalizarTarefa()
      }
    }, 1000)
  }

    return(
        <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}
             texto="Começar!"
            />
                
        </div>
        

    )
}