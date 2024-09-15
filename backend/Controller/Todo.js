const Todos = require("../Model/Todo");
const getTodos = async (req, res) => {
  try {
    const todos = await Todos.find();
    return res.status(200).json({
      todos: todos,
      msg: "all todos are here",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const createTodo = async (req, res) => {
  try {
    const newTodo = new Todos(req.body);
    const todo = await newTodo.save();
    return res.status(200).json({ todo: todo, msg: "New ToDo created " });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findById(id);
    if (!todo) return res.status(400).json({ msg: "Todo doesnt exist" });
    const updatedtodo = await Todos.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ msg: "Updated successfully", todo: updatedtodo });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findById(id);
    if (!todo) return res.status(400).json({ msg: "Todo doesnt exist" });
    await Todos.findByIdAndDelete(id, req.body);
    
    return res.status(200).json({ msg: "Deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const TodoController = {
  deleteTodo,
  updateTodo,
  createTodo,
  getTodos,
};
module.exports = TodoController;
