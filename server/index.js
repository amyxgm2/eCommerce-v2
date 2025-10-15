import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

// http://localhost:5000/api/products

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// creating the database connection with workbench 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// testing connection 
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

app.get('/', (res, req)=>{
    req.send('hello')
})

// getting all the products 
app.get("/api/products", (req,res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results)
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));