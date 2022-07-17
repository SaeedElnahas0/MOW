const Blog = require('../models/Blogs');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createBlog= async (req, res) => {
    const blog = await Blog.create(req.body)
    res.status(StatusCodes.CREATED).json({ blog })
}

const getAllBlogs = async (req, res) => {
    const blog = await Blog.find({});
    res.status(StatusCodes.OK).json({ count: blog.length, blog });
};

const getSingleBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
        throw new CustomError.NotFoundError('No Blog with this id');
    }
    res.status(StatusCodes.OK).json({ blog });
};

const updateBlog = async (req, res) => {
    const blog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!blog) {
        throw new CustomError.NotFoundError(`No Blog with id : ${blogId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Blog updated.', blog });
};

const deleteBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
        throw new CustomError.NotFoundError(`No Blog with id : ${blogId}`);
    }
    await blog.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Blog removed.' });
};

module.exports = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
}