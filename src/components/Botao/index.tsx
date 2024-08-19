import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps{
    texto: string; // Texto que será mostrado no botão
    onClick?: () => void; // Função de callback para o evento onClick (opcional)
}

// Crie um componente Botão com o texto passado como props
const Botao = React.memo<BotaoProps>(({ texto, onClick }) => {
    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <button className={style.botao} onClick={handleClick}>
            {texto}
        </button>
    );
});

export default Botao; // Exporte o componente para ser usado em outros arquivos