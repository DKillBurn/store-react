import { Component } from "react";
import BannerMain from "../../Components/Banner/BannerMain/BannerMain";
import Crater from "../../Components/Crater/Crater"
import Aux from "../../Components/HOC/Aux/Auxil";

import styles from './MainPage.module.styl'

class MainPage extends Component
{
    render()
    {
        return(
            <Aux className={styles.body}>
                <BannerMain />
                <Aux className={styles.craterContainer}>
                    <Crater size='1' label="Promociones del dia de hoy">
                        <img alt='1' src='https://dummyimage.com/220x220/333333/FFFFFF.png' />    
                    </Crater>
                    <Crater size='1' label="Descuentos en cupones">
                        <img alt='2' src='https://dummyimage.com/220x220/333333/FFFFFF.png' />  
                    </Crater>
                    <Crater size='1' label="Descrubre la tienda de Samsung">
                        <img alt='3' src='https://dummyimage.com/220x220/333333/FFFFFF.png' />  
                    </Crater>
                    <Crater size='1' label="Promociones en Electronica">
                        <img alt='4' src='https://dummyimage.com/220x220/333333/FFFFFF.png' />
                    </Crater>
                </Aux>
                <Aux className={styles.craterContainer2}>
                    <Crater size='2' label="Top 5 categorias">
                        <img alt='5' src='https://dummyimage.com/490x250/333333/FFFFFF.png' /> 
                    </Crater>
                    <Crater size='2' label="Descuentos exclusivos">
                        <img alt='6' src='https://dummyimage.com/490x250/333333/FFFFFF.png' />
                    </Crater>
                </Aux>
                <Aux className={styles.craterContainer2}>
                    <Crater size='3' label="Lo mas vendido en tecnologia">
                        <img alt='7' src='https://dummyimage.com/320x240/333333/FFFFFF.png' />
                    </Crater>
                    <Crater size='3' label="Productos en tendencia">
                        <img alt='8' src='https://dummyimage.com/320x240/333333/FFFFFF.png' />
                    </Crater>
                    <Crater size='3' label="Recomendaciones para ti">
                        <img alt='9' src='https://dummyimage.com/320x240/333333/FFFFFF.png' />
                    </Crater>
                </Aux>
                <Aux className={styles.craterContainer2}>
                    <Crater size='2' label="Top 5 categorias">
                        <img alt='10' src='https://dummyimage.com/490x250/333333/FFFFFF.png' /> 
                    </Crater>
                    <Crater size='2' label="Descuentos exclusivos">
                    <img alt='11' src='https://dummyimage.com/490x250/333333/FFFFFF.png' /> 
                    </Crater>
                </Aux>
            </Aux>
        )
    }
}
export default MainPage
