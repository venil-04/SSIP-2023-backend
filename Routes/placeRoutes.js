const express = require("express");
const { addPlace, updatePlace, deletePlace } = require("../Controller/placeCotroller");
const router = express.Router();

router.route("/addplace").post(addPlace);
router.route("/updateplace/:Id").put(updatePlace);
router.route("/deleteplace/:Id").delete(deletePlace);

module.exports = router

