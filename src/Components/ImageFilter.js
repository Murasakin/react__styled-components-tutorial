import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import transporte from '../assets/images/transporte.svg'
import saude from '../assets/images/saude.svg'
import utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from '../Components/ui'
 
export default ({ type }) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        default: <IconeTema src={outros} alt="Outros" />
    }

    return Images[type] || Images.default
}