import React from 'react'

export default function Button({ children, type, color, className }) {
    const colorClass = () => {
        switch (color) {
            case 'primary':
                return 'bg-indigo-500 text-white'
            case 'secondary':
                return 'bg-amber-500 text-white'
            case 'transparent':
                return 'bg-transparent text-black-500 hover:bg-black-100'
            case 'border':
                return 'bg-transparent border-2 border-indigo-500 text-indigo-500 transition duration-200 colors hover:bg-indigo-500 hover:text-white'
            case 'white':
                return 'bg-white text-black-500'
        }
    }

    return (
        <button
            type={type}
            className={`rounded-full py-3 px-8 ${colorClass()} ${className}`}>
            {children}
        </button>
    )
}
