import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "ruben",
  authPlugin: {
    name: 'mysql_native_password',
  },
  password: "harmony_password",
  database: "mangaverse",
});

app.get("/", (req, res)=> {
  return res.json("My Mangas Hub API")
})

app.get("/genres", (req, res)=>{
  const my_query = "SELECT * FROM genres";
  db.query(my_query, (err, data)=> {
      if (err) return res.json(err);
      return res.json(data)  
  })
})

app.get("/mangas", (req, res)=>{
  const my_query = "SELECT * FROM mangas";
  db.query(my_query, (err, data)=> {
      if (err) return res.json(err);
      return res.json(data)
  })
})

app.listen(9000, ()=> {
  console.log("API Deployed");
})