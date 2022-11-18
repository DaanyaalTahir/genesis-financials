var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/get_last_transaction", (req, res) => {
  const cardNo = req.body.cardNo;

  db.query(
    `SELECT *
FROM transaction T
WHERE T.TransactionTime = (SElECT MAX(TransactionTime) FROM transaction T1 WHERE T1.CardNo=?) AND T.CardNo=?`,
    [cardNo, cardNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length != 0) {
        res.json(result);
      } else {
        res.status(401).send({ message: "User doesn't exist!" });
      }
    }
  );
});

router.post("/cur_month_category_spending", (req, res) => {
  const today = new Date();
  const cardNo = req.body.cardNo;

  db.query(
    `SELECT Category, SUM(Amount) AS TotalAmount
FROM transaction T
WHERE MONTH(TransactionTime)=? AND YEAR(TransactionTime)=? AND CardNo=?
GROUP BY Category`,
    [today.getMonth() + 1, today.getFullYear(), cardNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length != 0) {
        res.json(result);
      } else {
        res.status(401).send({ message: "User doesn't exist!" });
      }
    }
  );
});

module.exports = router;
