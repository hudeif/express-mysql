const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.route("/").get((req, res) => {
  let query = `select * from contacts;`;
  db.query(query, (err, result) => {
    res.send(result);
  });
});

router.route("/").post((req, res) => {
  const { id, name, email, phone } = req.body;
  let contactInfo = {
    id,
    name,
    email,
    phone,
  };

  let query = `insert into contacts(id,name,phone) values(${id},'${name}','${phone}')`;
  db.query(query, (err, result) => {
    res.send("Created successfully.");
  });

  // let query = "insert into contacts set ?";
  // db.query(query, contactInfo, (err, result) => {
  //   res.send("Created successfully.");
  // });
});

router.route("/update/:id").put((req, res) => {
  const { name, email, phone } = req.body;
  let query = `
    update
        contacts
    set
        name='${name}',email='${email}',phone='${phone}'
    where
        id = ${req.params.id}
    `;
  db.query(query, (err, result) => {
    res.send("updated successfully.");
  });
});

router.route("/delete/:id").delete((req, res) => {
  let query = `
      delete from
          contacts
      where
          id = ${req.params.id}
      `;
  db.query(query, (err, result) => {
    res.send("Deleted successfully.");
  });
});

module.exports = router;
