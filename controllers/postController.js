import PostsModel from "../models/postModel.js";

const getAllPosts = async (req, res) => {
  await PostsModel.find((err, data) => {
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

const getPostById = async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  await PostsModel.findById(req.params.id)
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

const createPost = async (req, res) => {
  const { title, postImageUrl } = req.body;
  await PostsModel.create({ title, postImageUrl }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({
        status: 201,
        message: "Post create",
        data: data,
      });
    }
  });
};

const deletePost = async (req, res, next) => {
  console.log(req.params.id);
  await PostsModel.findByIdAndRemove(req.params.id)
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

const updateById = async (req, res) => {
  const { title, postImageUrl } = req.body;
  await PostsModel.findByIdAndUpdate(req.params.id, {
    title,
    postImageUrl,
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

export { getAllPosts, createPost, getPostById, deletePost, updateById };
