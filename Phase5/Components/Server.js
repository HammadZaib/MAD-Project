const express = require("express");
const sql = require("mssql/msnodesqlv8");
const cors = require("cors");
const app = express();
const port = 5000;

// Configure the database connection
const config = {
  server: "DESKTOP-88C9AAR\\SQLEXPRESS",
  database: "Database_Project",
  options: {
    trustedConnection: true,
  },
  driver: "msnodesqlv8",
};

// Create a pool of connections
const pool = new sql.ConnectionPool(config);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Route to handle user registration
app.post("/api/signup", (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Perform validation checks
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ error: "Please fill in all the required fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Password does not match" });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Save user's information to the database
    const query = `
      INSERT INTO Users (FirstName, LastName, Email, Password)
      VALUES (@firstName, @lastName, @email, @password);
    `;

    const request = new sql.Request(connection);
    request.input("FirstName", sql.VarChar, firstName);
    request.input("LastName", sql.VarChar, lastName);
    request.input("Email", sql.VarChar, email);
    request.input("Password", sql.VarChar, password);

    request.query(query, (err) => {
      connection.close(); // Close the connection

      if (err) {
        console.error("Error saving user:", err.message);
        return res.status(500).json({ error: "Internal server error" });
      }

      console.log("User registered successfully");
      return res.status(200).json({ message: "User registered successfully" });
    });
  });
});

// ...

// ...

// Route to handle user login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Perform validation checks
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please fill in all the required fields" });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Check if the user exists and the password is correct
    const query = `
      SELECT * FROM Users
      WHERE Email = @email
        AND Password = @password;
    `;

    const request = new sql.Request(connection);
    request.input("Email", sql.VarChar, email);
    request.input("Password", sql.VarChar, password);

    request.query(query, (err, result) => {
      connection.close(); // Close the connection

      if (err) {
        console.error("Error fetching user:", err.message);
        return res.status(500).json({ error: "Internal server error" });
      }

      if (result.recordset.length === 0) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      console.log("User logged in successfully");
      return res.status(200).json({ message: "User logged in successfully" });
    });
  });
});

// Route to fetch all products
app.get("/api/products", (req, res) => {
  pool.connect((err, connection) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    const query = "SELECT * FROM Product;";

    const request = new sql.Request(connection);

    request.query(query, (err, result) => {
      connection.close();

      if (err) {
        console.error("Error fetching products:", err.message);
        return res.status(500).json({ error: "Internal server error" });
      }

      return res.status(200).json(result.recordset);
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
