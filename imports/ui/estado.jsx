import React from 'react'



export const Estado  = ({estado, task,mudaEstado}) =>{

    return (<>  
   
    <input
    className="vai"
    type="checkbox"
    checked={estado}
    onChange={() => mudaEstado(task)}/>
    </>)
  
}
    
