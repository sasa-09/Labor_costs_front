import React from "react"
// import Button from "../../button/Button.jsx"

export default function Login() {

    return (
        <>
            <form action="" className="w-1/2 bg-black mx-auto mt-40 border-">
                <div className="flex flex-col items-center py-40">
                    
                    <label className="text-white " htmlFor="username" >Username:</label>
                    <input className="text-white w-1/3 block px-3 py-2 bg-gray-700 border-2 rounded-md text-sm shadow-sm placeholder-slate-400
                    border-transparent duration-500 transparent-colors ease-linear
                    focus:outline-none focus:border-sky-500 hover:border-purple-500"
                    id="username" type="text" placeholder="username"/> 
                    <label className="text-white" htmlFor="password">Password:</label>
                    <input className="text-white w-1/3 block px-3 py-2 bg-gray-700 border-2 rounded-md text-sm placeholder-slate-400
                    border-transparent duration-500 transparent-colors ease-linear
                    focus:outline-none focus:border-sky-500 hover:border-purple-500" 
                    id="password" type="password" placeholder="password"/>
                </div>

                    {/* <Button text="login" /> */}
            </form>
        </>
    )
}