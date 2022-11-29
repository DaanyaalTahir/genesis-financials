var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/get_statementInfo", (req, res) => {
    const cardNo = req.body.cardNo;

    db.query(
        `SELECT *
  FROM transaction T
  WHERE T.CardNo=?`,
        [cardNo],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length != 0) {
                res.json(result);
                console.log("Working");
            } else {
                console.log("Failed");
                res.status(401).send({message: "Failed"});
            }
        }
    );
});

module.exports = router;
