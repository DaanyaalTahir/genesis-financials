var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

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
        res.json(result[0]);
      } else {
        res.status(401).send({ message: "User doesn't exist!" });
      }
    }
  );
});

module.exports = router;
