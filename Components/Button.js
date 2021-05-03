import React from 'react'

export default function Button({ children, type, border }) {
    return (
        <button
            type={type}
            className={`rounded-full ${
                !border ? 'bg-indigo-500 text-white' : ''
            } rounded-full py-3 px-8 text-white py-3 px-8 ${
                border ? 'border-2 border-indigo-500 text-indigo-500' : ''
            } `}>
            {children}
        </button>
    )
}
