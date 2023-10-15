const express = require("express")
const router = express.Router();

const { getLogsController,
        postLogsController,
        deleteLogController } = require("../controllers/logsController")

router.get('/', getLogsController)
router.post('/', postLogsController)
router.delete('/:id', deleteLogController)

module.exports = router