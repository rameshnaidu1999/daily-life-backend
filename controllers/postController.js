import PostsModel from "../models/postModel.js";

const getAllPosts = async (req, res) => {
  await PostsModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({
        status: 200,
        message: "Posts",
        data: data,
      });
    }
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

export { getAllPosts, createPost };
