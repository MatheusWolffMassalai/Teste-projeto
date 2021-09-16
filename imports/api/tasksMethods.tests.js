import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Tarefa } from './connection';
import { mockMethodCall } from 'meteor/quave:testing';
import { assert } from 'chai';
import './metodos'


if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      console.log(userId)
      let taskId
       // Tarefa.remove({})
        taskId = Tarefa.insert({
          name:   "New Task",
          criado: new Date(),
          sabor: new Date(),
          completo: false,
          deleta: false,
          prioridade: 0,
          userId,})
        console.log(taskId)
      

  
      
      it('can delete owned task', () => {
        mockMethodCall('tarefa.deleta', taskId, { context: { userId } });

        assert.equal(Tarefa.find().count(), 0);
      });
      it(`can't delete task without an user authenticated`, () => {
        const fn = () => mockMethodCall('tarefa.deleta', taskId);
        assert.throw(fn, /Not authorized/);
        assert.equal(Tarefa.find().count(), 1);
      });

      it(`can't delete task from another owner`, () => {
        const fn = () =>
          mockMethodCall('tarefa.deleta', taskId, {
            context: { userId: 'somebody-else-id' },
          });
        assert.throw(fn, /Access denied/);
        assert.equal(Tarefa.find().count(), 1);
      });

      it('can change the status of a task', () => {
        const originalTask = Tarefa.findOne(taskId);
        mockMethodCall('tarefa.checado', taskId, !originalTask.completo, {
          context: { userId },
        });

        const updatedTask = Tarefa.findOne(taskId);
        assert.notEqual(1,2 ) ;
      });

      it('can insert new tasks', () => {
        const text = 'New Task';
        mockMethodCall('tarefa.adiciona', text, {
          context: { userId },
        });

        const tasks = Tarefa.find({}).fetch();
        assert.equal(tasks.length, 2);
        assert.isTrue(tasks.some(task => task.name === text));
      });
    });
  });
}
  