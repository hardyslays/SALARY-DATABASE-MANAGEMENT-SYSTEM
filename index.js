const express = require("express");
const path = require("path");
const db = require("mysql");
const con = require("./src/db");
const BodyParser = require("body-parser");
const { json } = require("express");
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded());
app.use(express.json());

app.post("/add_employee", (req, res) => {
  console.log("ADDING EMPLOYEE");

  console.log(req.body);

  con.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("DATABASE CONNECTED!!!");

    // console.log(req.body);

    var empId = req.body["empId"];
    var empName = req.body["empName"];
    var desg = req.body["desg"];
    var age = Number(req.body["age"]);
    var resident = req.body["resident"].toLowerCase() == "yes" ? true : false;

    var sql = `INSERT INTO Employees (empId, empName, desg, age, resident) VALUES ( "${empId}", "${empName}", "${desg}", ${age}, ${resident});`;

    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log("ADDED EMPLOYEE ENTRY!!!");
      res.redirect("/src/add_employee/success.html");
    });
  });
  //   con.close();
});

app.post("/rem_emp", (req, res) => {
  con.connect((err) => {
    if (err) {
      console.log(err);
    }

    console.log(req.body);

    var sql1 = `DELETE FROM Employees WHERE empId = "${req.body.id}";`;
    var sql2 = `DELETE FROM SalarySlip WHERE empId = "${req.body.id}";`;
    con.query(sql1, (err, result) => {
      if (err) console.log(err);

      con.query(sql2, (err, res) => {
        if (err) console.log(err);
      });

      console.log("success!!!");
      res.redirect("/src/remove_emp/success.html");
    });
  });
});

app.post("/emp_list", (req, res) => {
  console.log("DISPLAYING EMPLOYEE LIST");

  con.connect((err) => {
    if (err) {
      console.log(err);
    }

    con.query("SELECT * FROM Employees;", (err, result) => {
      if (err) throw err;

      console.log(Object.values(JSON.parse(JSON.stringify(result))));
      res.json(Object.values(JSON.parse(JSON.stringify(result))));
    });
  });

  //   con.close();
});

app.post("/search_emp", (req, res) => {
  con.connect((err) => {
    if (err) {
      console.log(err);
    }

    var id = req.body["id"];
    console.log(id);

    con.query(
      `SELECT * FROM Employees WHERE empId = "${id}"`,
      (err, result) => {
        if (err) {
          console.log("err!!!");
        } else {
          console.log("OK!!!");
          if (Object.values(JSON.parse(JSON.stringify(result))) == {}) {
            var rsponse = { result: "null" };
            res.json(JSON.stringify(response));
          } else {
            console.log(Object.values(JSON.parse(JSON.stringify(result))));
            var response = JSON.stringify({
              result: "ok",
              data: Object.values(JSON.parse(JSON.stringify(result))),
            });
          }

          console.log(response);
          res.json(response);
        }
      }
    );

    // con.query(
    //   `SELECT * FROM Employees WHERE empId = '${id};`,
    //   (err, result) => {
    //     if (err) {
    //       console.log("e rr");
    //       // var rseponse = { result: "null" };
    //       // res.json(response);
    //     } else {
    //       console.log("OK");
    //     }
    //   }
    // );
  });
});

app.post("/update_ss", (req, res) => {
  con.connect((err) => {
    console.log(req.body);
    var EmpID = req.body["empID"];
    var basic = req.body["basic"];
    var da = req.body["da"];
    var hra = req.body["hra"];
    var ta = req.body["ta"];
    var Commision = req.body["Commision"];
    var Allowances = req.body["Allowances"];
    var perq = req.body["perq"];
    var retire = req.body["retire"];
    var net = req.body["net"];
    var gross = req.body["gross"];

    console.log(EmpID);
    console.log("***********************");
    console.log(basic);
    console.log(da);
    console.log(hra);
    console.log(ta);
    console.log(Commision);
    console.log(Allowances);
    console.log(perq);
    console.log(retire);
    console.log(net);
    console.log(gross);

    var sql1 = `DELETE FROM SalarySlip WHERE EmpID = ${EmpID};`;
    var sql2 = `INSERT INTO SalarySlip (EmpID, basic, da, hra, ta, Commision, 
      Allowances, perq, retire, gross, net) VALUES ( ${EmpID}, ${basic}, ${da}, ${hra}, ${ta},
         ${Commision}, ${Allowances}, ${perq}, ${retire}, ${gross}, ${net});`;

    con.query(sql1, (err, result) => {
      if (err) {
        console.log("sql1 error");
        // console.log(err.sqlMessage);
      }
      console.log("sql1 done");
    });

    con.query(sql2, (err, result) => {
      if (err) console.log("sql2 error");
      // console.log(result);
      console.log("sql2 done");
    });
    res.json(
      JSON.stringify({
        result: "OK",
      })
    );
  });
});

app.post("/check_ss", (req, res) => {
  con.connect((err) => {
    console.log(req.body);
    var id = req.body["id"];

    var sql = `SELECT * FROM SalarySlip WHERE EmpID = ${id};`;
    con.query(sql, (err, result) => {
      if (err) {
        res.json(JSON.stringify({ result: "null" }));
        console.log("error occured in query");
      }
      res.json(Object.values(JSON.parse(JSON.stringify(result))));
    });
  });
});

app.listen(PORT, () => {
  console.log(`CONNECTION OPENED AT PORT ${PORT}`);
});

