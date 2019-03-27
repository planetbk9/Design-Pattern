
const TaskModel = function() {
  this.tasks = [];
  this.addTaskEvent = new Event(this);
}

TaskModel.prototype = {
  addTask: function(task) {
    this.tasks.push(task);
    this.addTaskEvent.notify();
  },
  getTasks: function() {
    return this.tasks;
  }
};