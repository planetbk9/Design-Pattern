
const TaskView = function(model) {
  this.model = model;
  this.addTaskEvent = new Event(this);
  this.init();
}

TaskView.prototype = {
  getElement: function() {
    this.addButton = $('.js-add-task-button');
    this.tasksContainer = $('.js-tasks-container');
    return this;
  },
  addEvent: function() {
    this.addButton.click(this.addButtonHandler.bind(this));
    this.model.addTaskEvent.attach(this.show.bind(this));
  },
  init: function() {
    this.getElement()
        .addEvent();
  },
  addButtonHandler: function() {
    this.addTaskEvent.notify($('.js-task-textbox').val());
  },
  show: function() {
    const tasks = this.model.getTasks();
    this.tasksContainer.html('');
    let html = '';
    tasks.forEach(task => {
      html += "<div>" + task + "</div>";
    });
    this.tasksContainer.append(html);
  }
};