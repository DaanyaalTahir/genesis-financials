var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/get_top_three_categories", (req, res) => {
    const cardNo = req.body.cardNo;

    db.query(
        `SELECT T.Category, SUM(Amount) AS Amount
  FROM transaction T
  WHERE T.CardNo=?
  GROUP BY T.Category
  ORDER BY Amount DESC
  LIMIT 3`,
        [cardNo, cardNo],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length != 0) {
                res.json(result);
            } else {
                res.status(401).send({ message: "Failed" });
            }
        }
    );
});

router.post("/highest_transaction", (req, res) => {
    const cardNo = req.body.cardNo;

    db.query(
        `SELECT T.Establishment, T.TransactionTime,T.TransactionNo, MAX(T.Amount) AS maxAmount
    FROM transaction T
    WHERE T.CardNo=?
    GROUP BY T.Establishment, T.TransactionTime,T.TransactionNo
    ORDER BY maxAmount DESC
    LIMIT 1`,
        [cardNo],
        (err, result) => {
            console.log(result);
            if (err) {
                res.send({ err: err });
            }

            if (result.length != 0) {
                res.json(result);
            } else {
                res.status(401).send({ message: "Failed" });
            }
        }
    );
});

router.post("/most_transactions_location", (req, res) => {
    const cardNo = req.body.cardNo;

    db.query(
        `SELECT Establishment, COUNT(Establishment) AS value_occurences
        FROM genesis_financial.transaction
        WHERE CardNo = ?
        GROUP BY Establishment
        ORDER BY value_occurences DESC
        LIMIT 1;`,
        [cardNo],
        (err, result) => {
            console.log(result);
            if (err) {
                res.send({ err: err });
            }

            if (result.length != 0) {
                res.json(result);
            } else {
                res.status(401).send({ message: "Failed" });
            }
        }
    );
});

module.exports = router;