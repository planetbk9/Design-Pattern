
const TaskController = function(model, view) {
  this.model = model;
  this.view = view;

  this.init();
}

TaskController.prototype = {
  init: function() {
    this.view.addTaskEvent.attach(this.addTask.bind(this));
  },
  addTask: function(sender, task) {
    this.model.addTask(task);
  }
};