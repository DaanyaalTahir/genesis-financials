var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let userData = {};

  db.query(
    "SELECT * FROM customer WHERE Username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err);
      }
      // TODO: Add proper password decode and compare here
      console.log(password);

      if (result.length == 1 && result[0].PasswordHash == password) {
        console.log(result);
        userData.user = result[0];

        db.query(
          `SELECT C.CardNo, C.Type, C.ExpiryDate, C.AccountNo, A.Type, A.Amount
    FROM card C, account A, customer Cus
    WHERE Cus.SIN=A.CustomerSIN AND A.AccountNo=C.AccountNo AND Cus.SIN=?;`,
          result[0].SIN,
          (err, result) => {
            if (err) {
              res.json({ err: err });
            }

            if (result.length != 0) {
              userData.accounts = result;
              res.json(userData);
            } else {
              res.status(401).json({ message: "No results retrieved." });
            }
          }
        );
      } else {
        res.status(401).send({ message: "User doesn't exist!" });
      }
    }
  );
});

router.post("/etransfer", (req, res) => {
  const cardNo = req.body.cardNo;
  const amount = req.body.amount;

  db.query(
    `UPDATE account A
    SET A.Amount = A.Amount-?
    WHERE A.AccountNo = (
                        SELECT C.AccountNo
                            FROM card C
                            WHERE C.CardNo = ?
        );`,
    [amount, cardNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length != 0) {
        res.json({ message: "Success" });
      } else {
        res.status(401).send({ message: "Failed" });
      }
    }
  );
});

router.post("/account_balance", (req, res) => {
  const cardNo = req.body.cardNo;

  db.query(
    `SELECT A.Amount, A.Type, C.ExpiryDate, A.AccountNo
FROM card C, account A
WHERE C.AccountNo=A.AccountNo AND C.CardNo=?`,
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

router.post("/contact", (req, res) => {
  const AddressID = req.body.AddressID;

  db.query(
    `SELECT A.Street, A.City, A.Province, A.Country, A.PostalCode, B.ManagerName
    FROM address A, branch B
WHERE B.BranchNo= (
                    SELECT C.HomeBranch
                        FROM customer C
                        WHERE C.AddressID=A.?)`,
    [AddressID],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length != 0) {
        res.json({ message: "Success" });
      } else {
        res.status(401).send({ message: "Failed" });
      }
    }
  );
});

module.exports = router;
