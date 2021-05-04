import React from 'react'

export default function Button({ children, type, color }) {
    const colorClass = () => {
        switch (color) {
            case 'primary':
                return 'bg-indigo-500 text-white'
            case 'secondary':
                return 'bg-amber-500 text-white'
            case 'transparent':
                return 'bg-transparent text-black-500 hover:bg-black-100'
        }
    }

    return (
        <button
            type={type}
            className={`rounded-full rounded-full py-3 px-8 text-white py-3 px-8 ${colorClass()}`}>
            {children}
        </button>
    )
}
