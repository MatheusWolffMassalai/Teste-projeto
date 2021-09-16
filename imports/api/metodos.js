import { check } from 'meteor/check';
import { Tarefa } from './connection';
import {Accounts} from 'meteor/accounts-base';
Meteor.methods({
    'user.adiciona'(user,senha){
      
      check(user, String);
      check(senha, String)
   
      if (!Accounts.findUserByUsername(senha)) {
        
        Accounts.createUser({
          username: user,
          password: senha
        });
      }
      
    
    },
    'tarefa.adiciona'(text) {
      check(text, String);
      
      const data = new Date()
      if (!this.userId) {
        throw new Meteor.Error('Não autorizado.');
      }
   
      Tarefa.insert({
        name:   text,
        criado: (data.getDate() + '/' + parseInt(data.getMonth()+1) + "/" +data.getFullYear()),
        sabor: new Date(),
        completo: false,
        deleta: false,
        prioridade: 0,
        userId: this.userId,
      })
    },
   
    'tarefa.deleta'(tarefaId) {
      check(tarefaId, String);
   
      if (!this.userId) {
        throw new Meteor.Error('Não autorizado.');
      }
      const task = Tarefa.findOne({ _id: tarefaId, userId: this.userId });
      if (!task) {
        throw new Meteor.Error('Acesso Negado');
      }
      Tarefa.remove(tarefaId);
    },
    'tarefa.deleta2'(ids) {
      check(ids, Array);
      const query = { _id: { $in: ids} }
      if (!this.userId) {
        throw new Meteor.Error('Não autorizado.');
      }
      const task = Tarefa.find(query, {userId: this.userId });
      if (!task) {
        throw new Meteor.Error('Acesso Negado');
      }
     
      
      Tarefa.remove(query);
    },
   
    'tarefa.checado'(tarefaId, completo) {
      check(tarefaId, String);
      check(completo, Boolean);
   
      if (!this.userId) {
        throw new Meteor.Error('Não autorizado.');
      }
   
      Tarefa.update(tarefaId, {
        $set: {
           completo
        }
      });
    },
    'tarefa.checado3'(tarefaId, prioridade) {
      check(tarefaId, String);
      check(prioridade, String);
   
      if (!this.userId) {
        throw new Meteor.Error('Não autorizado.');
      }
   
      Tarefa.update(tarefaId, {
        $set: {
          prioridade
        }
      });
    },
    'tarefa.checado2'(tarefaId, deleta) {
      check(tarefaId, String);
      check(deleta, Boolean);
   
      if (!this.userId) {
        throw new Meteor.Error('Não autorizado.');
      }
   
      Tarefa.update(tarefaId, {
        $set: {
          deleta
        }
      });
    }
  });
