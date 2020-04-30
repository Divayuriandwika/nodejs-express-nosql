const express = require ("express");
const router = express.Router();

const { getAll, create } = require ( "./controller");

router.get("/", getAll);
router.post("/", create);
// router.delete("/:id", deleteByID)

module.exports = router;