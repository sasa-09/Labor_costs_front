import React from "react"
import Button from "../button/Button.jsx"

export default function Header() {

    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__nav__menu">
                        <li className="header__nav__menu__item">Home</li>
                        <li className="header__nav__menu__item">Project</li>
                        <li className="header__nav__menu__item">well</li>
                        <li className="header__nav__menu__item">well</li>
                    </ul>
                </nav>
                
                <div className="header__buttons">
                    <Button text="login" />
                    <Button text="register" />
                </div>
            </header>
        </>
    )
}