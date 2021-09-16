import React from 'react'

export const Deleta  = ({task, handleClick, text }) =>{

    return <button onClick={() => handleClick(task)}>{text}</button>
    }
    
