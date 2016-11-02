import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },
  
  actions: {
    editTask(task) {
      task.set('isEditing', true);
    },
  
    cancelTaskEdit(task) {
      task.set('isEditing', false);
      task.rollbackAttributes();
    },
  
    saveTask(task) {
      if (task.get('isNotValid')) {
        return;
      }
  
      task.set('isEditing', false);
      task.save();
    }
  }
});
