import { Component } from "react";
import { NavLink } from "react-router-dom";
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
                    <Crater size='1' label="Promociones del dia de hoy" />
                    <Crater size='1' label="Descuentos en cupones" />
                    <Crater size='1' label="Descrubre la tienda de Samsung"/>
                    <Crater size='1' label="Promociones en Electronica"/>
                </Aux>
                <Aux className={styles.craterContainer2}>
                    <Crater size='2' label="Top 5 categorias" />
                    <Crater size='2' label="Descuentos exclusivos" />
                </Aux>
                <Aux className={styles.craterContainer2}>
                    <Crater size='3' label="Lo mas vendido en tecnologia" />
                    <Crater size='3' label="Productos en tendencia" />
                    <Crater size='3' label="Recomendaciones para ti" />
                </Aux>
                <Aux className={styles.craterContainer2}>
                    <Crater size='2' label="Top 5 categorias" />
                    <Crater size='2' label="Descuentos exclusivos" />
                </Aux>
            </Aux>
        )
    }
}
export default MainPage
