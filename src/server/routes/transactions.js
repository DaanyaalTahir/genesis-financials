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
        res.status(401).send({ message: "Failed" });
      }
    }
  );
});

router.post("/cur_month_category_spending", (req, res) => {
  const today = new Date();
  const cardNo = req.body.cardNo;
  // the date has been hard coded for the demo
  db.query(
    `SELECT Category, SUM(Amount) AS TotalAmount
FROM transaction T
WHERE MONTH(TransactionTime)=? AND YEAR(TransactionTime)=? AND CardNo=?
GROUP BY Category`,
    [11, 2022, cardNo],
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

router.post("/spending_past_twelve_months", (req, res) => {
  const cardNo = req.body.cardNo;
  db.query(
    `SELECT MONTH(TransactionTime) AS Month, YEAR(TransactionTime) AS Year, SUM(Amount) AS Amount
FROM transaction
WHERE TransactionTime> now() - INTERVAL 12 MONTH AND CardNo=?
GROUP BY MONTH(TransactionTime), YEAR(TransactionTime)
ORDER BY YEAR(TransactionTime), MONTH(TransactionTime)`,
    [cardNo],
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

module.exports = router;
