var express = require("express");
var router = express.Router();
var db = require("../database");

router.post("/branch_contact_info", (req, res) => {
  const branchNo = req.body.branchNo;

  db.query(
    `SELECT *
FROM branch B
    INNER  JOIN address A
    ON A.Id=B.AddressID
WHERE B.BranchNo=?`,
    [branchNo],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length != 0) {
        res.json(result);
      } else {
        console.log("Failed");
        res.status(401).send({ message: "Failed" });
      }
    }
  );
});

module.exports = router;
