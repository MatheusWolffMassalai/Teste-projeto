import { Meteor } from 'meteor/meteor';
import { Manda } from '../imports/ui/manda';
import { Tarefa } from '../imports/api/connection';
//import {Accounts} from 'meteor/accounts-password';
import {Accounts} from 'meteor/accounts-base';

import '/imports/api/metodos'
import '/imports/api/mostra'
Meteor.startup(()=>{ process.env.MONGO_URL = Meteor.settings.MONGO_URL  ;})
/*const SEED_USERNAME = 'meteorit';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
/*const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

const insertTask = taskText => Tarefa.insert({ name: taskText });
Meteor.startup(() => {
 
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  
});


/*
const insertTask = taskText => Tarefa.insert({ text: taskText });
 


const adiona = a => {
  Tarefa.insert({ name: a, createdAt: new Date() });
}

export const Lista = () => {
  listas = useTracker(() => Tarefa.find({}).fetch());
  const adiona = a => {
    Tarefa.insert({ name: a, createdAt: new Date() });
  }
  return JSON.parse(listas)}
  //return({ listas.map(task => <li key={ task._id }>{listas.name}</li>)}
//)
//
      //}*/