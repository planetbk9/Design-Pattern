$(function() {
  const model = new TaskModel();
  const view = new TaskView(model);
  const controller = new TaskController(model, view);
});