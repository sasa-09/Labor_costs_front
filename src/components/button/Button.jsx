import React from "react"

export default function Button(props) {
    return(
        <button className="px-7 py-2 bg-green-600 hover:bg-green-700 border-solid border-black border-2 rounded-2xl">{ props.text }</button>
    )
}