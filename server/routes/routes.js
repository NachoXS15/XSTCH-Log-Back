const express = require("express")
const router = express.Router();
const { logSchema } = require("../schemas/logSchema")
const { validatorSchema } = require("../middlewares/validatorSchema.js")
const { getLogsController,
        postLogsController,
        deleteLogController } = require("../controllers/logsController")

router.get('/logs', getLogsController)
router.post('/logs', validatorSchema(logSchema), postLogsController)
router.delete('/logs/:id', deleteLogController)

module.exports = router