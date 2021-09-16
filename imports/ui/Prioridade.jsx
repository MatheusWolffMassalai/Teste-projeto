import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid'

export const PrioridadeSelect= ({task,changePrioridade,prioridade}) =>{
        const[val1, Setval1] = useState(false)
        const[val2, Setval2] = useState(false)
        const[val3, Setval3] = useState(false)
        const[val4, Setval4] = useState(false)
     
        const id = uniqid()
        useEffect(() => {
           
            if(prioridade == 0){
                Setval1(true)
                Setval2(false)
                Setval3(false)
                Setval4(false)
            }
            if(prioridade == 1){
                Setval2(true)
                Setval1(false)
                Setval3(false)
                Setval4(false)
            }
            if(prioridade == 2){
                Setval3(true)
                Setval1(false)
                Setval2(false)
                Setval4(false)
            }
            if(prioridade == 3){
                Setval4(true)
                Setval1(false)
                Setval2(false)
                Setval3(false)
            }
        })
            
            
        
        
    return(
        <select id={id}   onChange={() => changePrioridade(task,id)} name="select" >
          <option value="0"selected={val1}>Selecione a prioridade</option>
          <option value="1" selected={val2}>Alto</option>
          <option value="2"selected={val3}>Médio</option>
          <option value="3"selected={val4}>Baixo</option>
        </select>

    )
}