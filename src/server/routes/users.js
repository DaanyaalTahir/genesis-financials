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
      }
      // TODO: Add proper password decode and compare here
      console.log(result[0].PasswordHash);
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

module.exports = router;
