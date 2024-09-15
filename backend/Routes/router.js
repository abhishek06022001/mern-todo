const router = require("express").Router();
const TodoController = require("../Controller/Todo");
router
  .route("/todo")
  .get(TodoController.getTodos)
  .post(TodoController.createTodo);
router
  .route("/todo/:id")
  .put(TodoController.updateTodo)
  .delete(TodoController.deleteTodo);

module.exports = router;
