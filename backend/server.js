const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dbConfig = require('./dbConfig');

const app = express()
app.use(cors())
app.use(express.json())
const port = 8081

const db = mysql.createConnection(dbConfig);

app.get('/entries', (req, res) => {
  const sql = "SELECT * FROM entries";
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.post('/add', (req, res) => {
  const sql = "INSERT INTO entries (`Title`, `Date`, `Entry`) VALUES(?)";

  const values = [
    req.body.jTitle,
    req.body.jTime,
    req.body.jEntry,
  ];

  db.query(sql, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.get('/', (req, res) => {
  return res.json("This is a response from backend!");
  //res.send('Hello World!') //this seems to create an HTML webpage at a route (like Flask)
})

app.listen(port, ()=> {
  console.log(`listening at port: ${port}`);
})