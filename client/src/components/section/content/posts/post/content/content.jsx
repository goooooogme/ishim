import React from 'react'
import c from './content.module.css'

const Content = () => {
    return (
        <div className={c.wrap}>
            <a href="#" className={c.title}>В NASA предположили причину исчезновения атмосферы Марса</a>
            <p className={c.text}>
                Атмосфера Марса разрушилась под влиянием солнечного ветра, предположили в NASA на основе данных, полученных с космического аппарата MAVEN. 
                Миллиарды лет назад, считают учёные, на Марсе была атмосфера достаточно толстая, чтобы удерживать воду на планете в жидком состоянии. Но из-за...
            </p>

        </div>
    )
}

export default Content