let express = require("express");
let router = express.Router();
let db = require("../database");

router.post("/get_loans", (req, res) => {
  const SIN = req.body.SIN;
  db.query(
    `SELECT * FROM loan L WHERE L.CustomerSIN=?`,
    [SIN],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length != 0) {
        res.json(result);
        console.log("good");
      } else {
        console.log("bad");
        res.status(401).send({ message: "fail" });
      }
    }
  );
});

router.post("/new_loan", (req, res) => {
  const SIN = req.body.SIN;
  const Type = req.body.Type;
  const Amount = parseFloat(req.body.Amount).toFixed(2);
  const InterestRate = (1 + Math.random() * 0.5).toFixed(2);
  const DueDate = req.body.DueDate;

  db.query(
    `INSERT INTO loan (CustomerSIN, Type, Amount, InterestRate, Compounded, DueDate)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [SIN, Type, Amount, InterestRate, Amount, DueDate],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length != 0) {
        res.json({ message: "Success" });
        console.log("good");
      } else {
        console.log("bad");
        res.status(401).send({ message: "fail" });
      }
    }
  );
});

module.exports = router;
