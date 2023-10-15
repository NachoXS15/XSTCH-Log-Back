const {Log} = require("../models/logsModel")

const getLogs = async() => {
    try {
        const log = await Log.find();
        return log;
    } catch (error) {
        throw error;
    }
}

const postLogs = async(data) => {
    try {
        const log = new Log(data);
        await log.save()
        return{
            operation: 'ok'
        }
    } catch (error) {
        throw error
    }
}

const deleteLog = async(id) => {
    try {
        const log = await Log.deleteOne(id)
        return {
            operation: 'ok'
        }
    } catch (error) {
        throw error
    }
}


module.exports = {
    getLogs,
    postLogs,
    deleteLog
}
