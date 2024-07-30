import React from "react"
import Button from "../button/Button.jsx"

export default function Header() {

    return (
        <>
            <header className="bg-gray-900 h-20 flex w-full items-center justify-around">
                <nav className="w-auto h-full flex items-center justify-between">
                    <ul className="w-auto h-full flex items-center justify-between gap-20">
                        <li className="text-2xl text-gray-300 hover:cursor-pointer hover:text-white">Home</li>
                        <li className="text-2xl text-gray-300 hover:cursor-pointer hover:text-white">Project</li>
                        <li className="text-2xl text-gray-300 hover:cursor-pointer hover:text-white">well</li>
                        <li className="text-2xl text-gray-300 hover:cursor-pointer hover:text-white">well</li>
                    </ul>
                </nav>
                <Button text="login" />
            </header>
        </>
    )
}