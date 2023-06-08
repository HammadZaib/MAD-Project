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

// Route to handle user registration
app.post('/api/signup', (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Perform validation checks
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Please fill in all the required fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Password does not match' });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Save user's information to the database
    const query = `
      INSERT INTO Users (FirstName, LastName, Email, Password)
      VALUES (@firstName, @lastName, @email, @password);
    `;

    const request = new sql.Request(connection);
    request.input('FirstName', sql.VarChar, firstName);
    request.input('LastName', sql.VarChar, lastName);
    request.input('Email', sql.VarChar, email);
    request.input('Password', sql.VarChar, password);

    request.query(query, (err) => {
      connection.close(); // Close the connection

      if (err) {
        console.error('Error saving user:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      console.log('User registered successfully');
      return res.status(200).json({ message: 'User registered successfully' });
    });
  });
});

// Route to handle user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Perform validation checks
  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill in all the required fields' });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Check if the user exists and the password is correct
    const query = `
      SELECT * FROM Users
      WHERE Email = @email
        AND Password = @password;
    `;

    const request = new sql.Request(connection);
    request.input('Email', sql.VarChar, email);
    request.input('Password', sql.VarChar, password);

    request.query(query, (err, result) => {
      connection.close(); // Close the connection

      if (err) {
        console.error('Error fetching user:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.recordset.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      console.log('User logged in successfully');
      return res.status(200).json({ message: 'User logged in successfully' });
    });
  });
});

app.post('/api/billing', (req, res) => {
  const { firstName, lastName, email, address, phoneNo, city, country, postalcode } = req.body;

  // Perform validation checks
  if (!firstName || !lastName || !email || !address || !phoneNo || !city || !country || !postalcode) {
    return res.status(400).json({ error: 'Please fill in all the required fields' });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Save user's information to the database
    const query = `
      INSERT INTO BillingDetails (FirstName, LastName, Email, Address, PhoneNO, City, Country, PostalCode )
      VALUES (@firstName, @lastName, @email, @address, @phoneNo, @city, @country, @postalcode);
    `;

    const request = new sql.Request(connection);
    request.input('FirstName', sql.VarChar, firstName);
    request.input('LastName', sql.VarChar, lastName);
    request.input('Email', sql.VarChar, email);
    request.input('Address', sql.VarChar, address);
    request.input('PhoneNo', sql.VarChar, phoneNo);
    request.input('City', sql.VarChar, city);
    request.input('Country', sql.VarChar, country);
    request.input('PostalCode', sql.VarChar, postalcode);

    request.query(query, (err) => {
      connection.close(); // Close the connection

      if (err) {
        console.error('Error saving billing:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      console.log('Bill registered successfully');
      return res.status(200).json({ message: 'User registered successfully' });
    });
  });
});

app.post('/api/payment', (req, res) => {
  const { cardholdername, cardnumber, expiry, cvc } = req.body;

  // Perform validation checks
  if (!cardholdername || !cardnumber || !expiry || !cvc) {
    return res.status(400).json({ error: 'Please fill in all the required fields' });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Save user's information to the database
    const query = `
      INSERT INTO Payment (CardHolderName, CardNo, Expiry, CVC)
      VALUES (@cardholdername, @cardnumber, @expiry, @cvc);
    `;

    const request = new sql.Request(connection);
    request.input('CardHolderName', sql.VarChar, cardholdername);
    request.input('CardNo', sql.VarChar, cardnumber);
    request.input('Expiry', sql.Date, expiry);
    request.input('CVC', sql.Int, cvc);

    request.query(query, (err) => {
      connection.close(); // Close the connection

      if (err) {
        console.error('Error saving payment:', err.message);
        
        return res.status(500).json({ error: 'Internal server error' });
      }

      console.log('Payment added successfully');
      return res.status(200).json({ message: 'Payment added successfully' });
    });
  });
});


app.post('/api/updateName', (req, res) => {
  const { email, firstName, lastName } = req.body;

  // Perform validation checks
  if (!email || !firstName || !lastName) {
    return res.status(400).json({ error: 'Please provide email, first name, and last name' });
  }

  // Create a new connection from the pool
  pool.connect((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Update the user's name in the database
    const query = `
      UPDATE Users
      SET FirstName = @firstName, LastName = @lastName
      WHERE Email = @email;
    `;

    const request = new sql.Request(connection);
    request.input('FirstName', sql.VarChar, firstName);
    request.input('LastName', sql.VarChar, lastName);
    request.input('Email', sql.VarChar, email);

    request.query(query, (err) => {
      connection.close(); // Close the connection

      if (err) {
        console.error('Error updating user name:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      console.log('User name updated successfully');
      return res.status(200).json({ message: 'User name updated successfully' });
    });
  });
});

app.get("/api/user", (req, res) => {
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    // Add more user objects as needed
  ];
  
  app.get('/api/user', (req, res) => {
    // Assuming you want to fetch the first user from the array
    if (users.length > 0) {
      const user = users[0];
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

app.post('/api/birthday', async (req, res) => {
  const { email, birthday } = req.body;

  try {
    // Create a new connection pool
    const pool = await sql.connect(config);

    // Update user's birthday in the database
    const query = `
      UPDATE Users
      SET DOB = '${birthday}'
      WHERE Email = '${email}';
    `;

    await pool.request().query(query);

    res.status(200).json({ message: 'Birthday updated successfully' });
  } catch (error) {
    console.error('Error updating birthday:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/number', async (req, res) => {
  const { email, number } = req.body;

  try {
    // Create a new connection pool
    const pool = await sql.connect(config);

    // Update user's birthday in the database
    const query = `
      UPDATE Users
      SET PhoneNO = '${number}'
      WHERE Email = '${email}';
    `;

    await pool.request().query(query);

    res.status(200).json({ message: 'Number updated successfully' });
  } catch (error) {
    console.error('Error updating number:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/password', async (req, res) => {
  const { email, currentPassword, newPassword} = req.body;

  try {
    // Create a new connection pool
    const pool = await sql.connect(config);

    // Check if the current password is correct (you may need to adjust the query based on your table structure)
    const checkPasswordQuery = `
      SELECT Email
      FROM Users
      WHERE Email = @email
        AND Password = @currentPassword;
    `;
    const updatePasswordQuery = `
      UPDATE Users
      SET Password = @newPassword
      WHERE Email = @email;
    `;

    await pool
      .request()
      .input('email', sql.VarChar, email) // Assuming you have authenticated the user and stored the user ID in req.user.id
      .input('newPassword', sql.VarChar, newPassword)
      .query(updatePasswordQuery);

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/api/gender', async (req, res) => {
  const { email,gender } = req.body;

  try {
    // Create a new connection pool
    const pool = await sql.connect(config);

    // Update the gender in the database for the authenticated user
    const updateGenderQuery = `
      UPDATE Users
      SET Gender = @gender
      WHERE Email = @email;
    `;

    await pool
      .request()
      .input('email', sql.VarChar, email) // Assuming you have authenticated the user and stored the user ID in req.user.id
      .input('gender', sql.VarChar, gender)
      .query(updateGenderQuery);

    res.status(200).json({ success: true, message: 'Gender updated successfully' });
  } catch (error) {
    console.error('Error updating gender:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
