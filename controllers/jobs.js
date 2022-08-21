const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');


const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');

    // res.send('Get All Jobs');
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = async (req, res) => {
    res.send('Get Single Job');
};
const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);

    // res.send('Create Job');
    // res.json(req.user);
    // res.json(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
    res.send('Update Job');
};
const deleteJob = async (req, res) => {
    res.send('Delete Job');
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};