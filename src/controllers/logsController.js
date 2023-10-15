const axios = require("axios");
const config = require('config');
const logsServices = require("../services/logsServices");

const getLogsController = async(req, res, next) => {
    try {
        const log = await logsServices.getLogs();
        res.json(log);
    } catch (error) {
        next(error)
    }    
}

const postLogsController = async(req, res, next) => {
    const data = req.body
    try {
        const log = await logsServices.postLogs(data)
        res.json(log)
    } catch (error) {
        next(error);
    }
}

const deleteLogController = async(req, res, next) => {
    const {id} = req.body;
    try {
        const log = await logsServices.deleteLog(id)
        res.json(log)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getLogsController,
    postLogsController,
    deleteLogController
}
