import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Update with your frontend URL
  })
);
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "portfolio",
  waitForConnections: true,
  connectionLimit: 10,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Error:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received contact form submission:", { name, email, message }); // Add this line

  if (!name || !email || !message) {
    console.log("Validation failed: Missing fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database Error:", err.stack); // More detailed error logging
      return res.status(500).json({
        error: "Failed to save contact message",
        details: err.message,
      });
    }
    console.log("Message saved successfully:", result);
    res.status(201).json({ id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
