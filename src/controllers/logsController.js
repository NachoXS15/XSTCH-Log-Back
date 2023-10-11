const axios = require("axios");
const config = require('config');
const logsServices = require("../services/logsServices");
const { log } = require("util");

const getLogsController = async(req, res, next) => {
    try {
        const log = await logsServices.getLogs();
        res.json(log);
    } catch (error) {
        next(error)
    }    
}

const postLogsController = async(req, res, next) => {
    try {
        const {data} = req.body
        const log = await logsServices.postLogs(data)
        res.json(log)
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getLogsController,
    postLogsController
}
