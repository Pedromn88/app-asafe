import React from 'react'

export default function LoaderSpinners() {
    return (

        <div className="loader bg-white  p-3 pl-2 pr-2 rounded-full flex space-x-3 items-center justify-center" style={{ animationDuration: "0.5s" }}>
            <div className="w-5 h-5 bg-asafe rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-5 h-5 bg-asafe rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
            <div className="w-5 h-5 bg-asafe rounded-full animate-bounce" style={{ animationDelay: "0.6s" }}></div>
        </div>

    )
}
