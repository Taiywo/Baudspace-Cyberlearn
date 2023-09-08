import React from 'react'

import { ReactComponent as CompanyIcon } from '../../assets/logo2.svg'

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';



export const Whatsapp = () => {
    return (

        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="8323260806"  companyName= "Baudspace Cyberlearn"/>

    );

}

