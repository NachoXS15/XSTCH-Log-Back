const express = require("express")
const router = express.Router();

const { getLogsController,
        postLogsController } = require("../controllers/logsController")

router.get('/', getLogsController)
router.get('/', postLogsController)

module.exports = router