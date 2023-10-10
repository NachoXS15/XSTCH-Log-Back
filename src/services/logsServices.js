const {Log} = require("../models/logsModel")

const getLogs = async() => {
    try {
        const log = await Log.find();
        return log
    } catch (error) {
        throw error;
    }
}

const postLogs = async(data) => {
    try {
        const log = new Log(data);
        await log.save()
    } catch (error) {
        throw error
    }
}


module.exports = {
    getLogs,
    postLogs
}
