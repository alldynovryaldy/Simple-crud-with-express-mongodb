const Post = require('../models/postModel');

const getPost = async (req, res) => {
  try {
    const data = await Post.find();
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const storePost = async (req, res) => {
  const post = new Post(req.body);
  try {
    const data = await post.save();

    res.status(201).json({
      status: true,
      message: 'Data berhasil ditambah',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);

    res.status(200).json({
      status: true,
      message: 'Data ditemukan!',
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: 'Data tidak ditemukan!',
    });
  }
};

const updateProduct = async (req, res) => {
  const checkId = await Post.findById(req.params.id);

  if (!checkId) {
    res.status(404).json({
      status: false,
      message: 'Data tidak ditemukan',
    });
  }

  try {
    const data = await Post.updateOne(
      { _id: req.params.id }, // param id
      { $set: req.body } // data edited
    );

    res.status(200).json({
      status: true,
      message: 'Data berhasil diubah!',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  const checkId = await Post.findById(req.params.id);

  if (!checkId) {
    res.status(404).json({
      status: false,
      message: 'Data tidak ditemukan',
    });
  }

  try {
    await Post.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: true,
      message: 'Data berhasil di hapus!',
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPost,
  storePost,
  updateProduct,
  getPostById,
  deletePost,
};
