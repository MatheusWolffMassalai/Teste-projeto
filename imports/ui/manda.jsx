import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor';
import { Adicionar} from './styles/styleLista.js';





export const Manda = () =>{
    const [texto, setTexto] = useState("");

    
        const handleSubmit = e => {
            e.preventDefault();
        
            if (texto == null || texto =="") return;
            
            Meteor.call('tarefa.adiciona', texto);
            
        
            setTexto("");
          };
    return(
        <>
        <Adicionar> 
        <form onSubmit={handleSubmit}>
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>        
        <button type="submit" >Adicionar</button>
        </form>
        </Adicionar> 
        </>
    )
}