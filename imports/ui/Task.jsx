import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Tarefa } from '../api/connection';
import { Deleta } from './delete';
import { Estado } from './estado';
import { Meteor } from 'meteor/meteor';
import { PrioridadeSelect } from './Prioridade';
import { TarefaStyle} from './styles/styleLista.js';

export const Task = () => {
  const [estado, setEstado] = useState(false);
  const [mostra, setMostra] = useState(true)
 

  const user = useTracker(() => Meteor.user())

  const alter = ({ completo: estado, userId: user._id})
 
  const tarefas = useTracker(() => {Meteor.subscribe('tarefa') 
  const tarefas = (mostra ?  Tarefa.find({ userId: user._id}, {sort: { prioridade: 1, sabor: -1 }}).fetch() : Tarefa.find({ completo: estado, userId: user._id}, {sort: { prioridade: 1, sabor: -1}  }).fetch() )
  
  return  tarefas
})

const tarefas2 = useTracker(() => {
  Meteor.subscribe('tarefa') 
  const tarefas2 = Tarefa.find({deleta: true}).fetch()
  return  tarefas2
})


const changeStatus = ({_id, completo}) =>Meteor.call('tarefa.checado', _id, !completo);

const mudaDeleta = ({_id, deleta}) =>Meteor.call('tarefa.checado2', _id, !deleta);

const deleta= ({_id}) =>Meteor.call('tarefa.deleta', _id)

const showAll= () =>{setMostra(true)}

const showComplete = () =>{ setEstado(true), setMostra(false)}

const showIncomplete = () =>{ setEstado(false), setMostra(false)}

const deletaVarios = () =>{
  let ids = []

 
  tarefas2.forEach(e =>{ ids.push(e._id) })

 
 
  Meteor.call('tarefa.deleta2', ids)}
  const selectPrioridade = (_id,uid) => {
    
    
	  var select = document.getElementById(uid);
    var prioridade = select.options[select.selectedIndex].value
    
      
  
    Meteor.call('tarefa.checado3',_id, prioridade)
    
    }
    
    
    
    
  

  return  (
  
  <>
   <TarefaStyle>
    <div className="muda">
      <Deleta handleClick={showAll} text={"Mostrar todos"} />
      <Deleta handleClick={showIncomplete} text={"Mostrar incompletas"}/> 
      <Deleta handleClick={showComplete} text={"Mostrar completas"}/>
      <Deleta  text={"Deletar várias"} handleClick={deletaVarios} />
      </div>
    <table className="tabela">
      
      <tr>
        <th>Status</th>
        <th>Tarefa</th>
        <th>Criada</th>
        <th>Prioridade</th>
        <th></th>
        <th>Deletar várias</th>
        </tr>
      
      {tarefas.map(task =>   < tr key={ task._id }> 
      <td>
        <label className="container">
      <Estado  estado={task.completo} task={task} mudaEstado={changeStatus}/> 
      <span className="b">{task.completo ? "Completo" : "Pendente"}</span>
      </label>
      </td>
      <td>
       {task.name  }
      </td>
      <td>
        {JSON.stringify(task.criado)}
        </td>
        <td>
          <PrioridadeSelect  prioridade={task.prioridade} task={task._id} changePrioridade={selectPrioridade}/>
          <span className="a"></span>
        </td>
      <td>
        <Deleta text={"Deletar"}task={task}handleClick={deleta}/> 
      </td>
      <td>
        <Estado estado={task.deleta} task={task} mudaEstado={mudaDeleta}/> 
      </td> </tr>)}
      
      
      </table>
      </TarefaStyle>
  </>)
};