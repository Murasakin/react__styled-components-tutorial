import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import transporte from '../assets/images/transporte.svg'
import saude from '../assets/images/saude.svg'
import utilidades from '../assets/images/utilidades.svg'
import { Icone } from '../Components/ui'
 
export default ({ type }) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
        Transporte: <Icone src={transporte} alt="Transporte" />,
        Saude: <Icone src={saude} alt="Saude" />,
        Utilidades: <Icone src={utilidades} alt="Utilidades" />,
        default: <Icone src={outros} alt="Outros" />
    }

    return Images[type] || Images.default
}