import { Meteor } from "meteor/meteor";
import { Tarefa } from "./connection";

Meteor.publish('tarefa', function mostraTarefas(){ return Tarefa.find({ userId: this.userId },{sort:{prioridade:1}})})

 