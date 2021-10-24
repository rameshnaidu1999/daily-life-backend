import TodosModel from "../models/todosModel.js";

const getAllTodos = async (req, res) => {
  await TodosModel.find((err, data) => {
    if (err) {
      res.status(500).json({
        msg: "failed",
        status: 500,
        error: err.message,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Posts",
        data: data,
      });
    }
  });
};

const getTodosByEmail = async (req, res) => {
  const email = req.query.email;
  console.log("eamil", req.query.email);
  await TodosModel.find({ email: email })
    .then((result) => {
      res.status(200).json({
        status: 200,
        msg: "fetched",
        post: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "failed",
        status: 500,
        error: err.message,
      });
    });
};

const getTodoById = async (req, res) => {
  await TodosModel.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        status: 200,
        msg: "fetched",
        post: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "failed",
        status: 500,
        error: err.message,
      });
    });
};

const createTodo = async (req, res) => {
  const { title, completed, email } = req.body;
  await TodosModel.create({ title, completed, email }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({
        status: 201,
        message: "Todo created",
        data: data,
      });
    }
  });
};

const deleteTodo = async (req, res) => {
  await TodosModel.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).json({
        data: result,
        msg: "deleted",
        status: 200,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "failed",
        status: 500,
        error: err.message,
      });
    });
};

const updateTodoById = async (req, res) => {
  const { title, completed, email } = req.body;
  await TodosModel.findByIdAndUpdate(req.params.id, {
    title,
    completed,
    email,
  })
    .then((result) => {
      res.status(200).json({
        data: result,
        msg: "updated",
        status: 200,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "failed",
        status: 500,
        error: err.message,
      });
    });
};

export {
  createTodo,
  getAllTodos,
  getTodosByEmail,
  deleteTodo,
  getTodoById,
  updateTodoById,
};
