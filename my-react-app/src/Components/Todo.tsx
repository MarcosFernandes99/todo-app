import React from 'react'
import "./todoStyle.scss"
import FundoThemeDark from "../images/bg-desktop-dark.jpg"


export const Todo = () => {
    return (

        <main className='container'>
            <nav className='containerNav'>
                <div className='nav'>
                    <span className='title'>T O D O</span>
                    <img src={FundoThemeDark} alt='ImageDeFundo' />
                </div>
            </nav>
        </main>
    )
}