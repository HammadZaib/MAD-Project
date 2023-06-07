-- DROP DATABASE Database_Project;

create database Database_Project; 
use [Database_Project];

-- USE master;
-- DROP TABLE Users;
-- USE master;
-- GO
-- SELECT * FROM sys.sysprocesses WHERE DB_NAME(dbid) = 'Database_Project';
-- USE master;
-- GO
-- KILL 62;


-- drop TABLE Users;

CREATE TABLE Users (
  User_ID INT IDENTITY(1, 1) PRIMARY KEY,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  Email VARCHAR(255),
  Password VARCHAR(255),
  ConfirmPassword VARCHAR(255),
  PhoneNO VARCHAR(255),
  Gender VARCHAR(255),
  DOB DATE
);



CREATE TABLE Product (
  Product_ID INT IDENTITY(1, 1) PRIMARY KEY,
  Name VARCHAR(255),
  Quantity INT,
  Price INT
);

CREATE TABLE Orders (
  Order_ID INT IDENTITY(1, 1) PRIMARY KEY,
  Total INT,
  O_date DATE,
  Product_ID INT,
  User_ID INT,
  FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID),
  FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);

CREATE TABLE BillingDetails (
  Billing_ID INT IDENTITY(1, 1) PRIMARY KEY,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  Email VARCHAR(255),
  Address VARCHAR(255),
  PhoneNO VARCHAR(255),
  City VARCHAR(255),
  Country VARCHAR(255),
  PostalCode INT,
  User_ID INT,
  Order_ID INT,
  FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID),
  FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);

CREATE TABLE Wishlist (
  User_ID INT,
  Product_ID INT,
  FOREIGN KEY (User_ID) REFERENCES Users(User_ID),
  FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID)
);

CREATE TABLE Payment (
  Payment_ID INT IDENTITY(1, 1) PRIMARY KEY,
  CardHolderName VARCHAR(255),
  CardNo INT,
  Expiry DATE,
  CVC INT,
  Order_ID INT,
  FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID)
);




/*If a person wants to change his name from profile screen*/

-- Insert data into Users table
INSERT INTO Users (FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES ('Mohammed', 'Ali', 'mohammed.ali@example.com', 'password123', 'password123', '1234567890', 'Male', '1990-01-01');

INSERT INTO Users (FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES ('Aisha', 'Khan', 'aisha.khan@example.com', 'secret123', 'secret123', '0987654321', 'Female', '1995-05-05');

INSERT INTO Users (FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES ('Fatima', 'Ahmed', 'fatima.ahmed@example.com', 'pass123', 'pass123', '2345678901', 'Female', '1992-03-15');

INSERT INTO Users (FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES ('Amina', 'Khan', 'amina.khan@example.com', 'secure123', 'secure123', '3456789012', 'Female', '1988-11-20');

INSERT INTO Users (FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES ('Zainab', 'Ali', 'zainab.ali@example.com', 'password321', 'password321', '4567890123', 'Female', '1997-06-05');

-- Select all data from Users table
SELECT * FROM Users;

-- Insert data into Product table
INSERT INTO Product (Name, Quantity, Price)
VALUES ('Floral Print Maxi Dress', 20, 80);

INSERT INTO Product (Name, Quantity, Price)
VALUES ('Ruffle Hem Wrap Dress', 15, 100);

INSERT INTO Product (Name, Quantity, Price)
VALUES ('V-Neck Lace Blouse', 25, 50);

INSERT INTO Product (Name, Quantity, Price)
VALUES ('High Waisted Skinny Jeans', 30, 70);

INSERT INTO Product (Name, Quantity, Price)
VALUES ('Leather Moto Jacket', 10, 150);



-- Select all data from Product table
SELECT * FROM Product;

-- Insert data into Orders table
INSERT INTO Orders (Total, O_date, Product_ID, User_ID)
VALUES (1200, '2023-05-22', 1, 1);

INSERT INTO Orders (Total, O_date, Product_ID, User_ID)
VALUES (2600, '2023-05-22', 2, 2);

INSERT INTO Orders (Total, O_date, Product_ID, User_ID)
VALUES (1500, '2023-05-22', 2, 3);

INSERT INTO Orders (Total, O_date, Product_ID, User_ID)
VALUES (3500, '2023-05-22', 1, 4);

INSERT INTO Orders (Total, O_date, Product_ID, User_ID)
VALUES (1000, '2023-05-22', 3, 5);

-- Select all data from Orders table
SELECT * FROM Orders;

-- Insert data into BillingDetails table
INSERT INTO BillingDetails (FirstName, LastName, Email, Address, PhoneNO, City, Country, PostalCode, User_ID, Order_ID)
VALUES ('Mohammed', 'Ali', 'mohammed.ali@example.com', '123 Main St', '1234567890', 'Anytown', 'USA', 12345, 1, 1);

INSERT INTO BillingDetails (FirstName, LastName, Email, Address, PhoneNO, City, Country, PostalCode, User_ID, Order_ID)
VALUES ('Aisha', 'Khan', 'aisha.khan@example.com', '456 Oak Ave', '0987654321', 'Anytown', 'USA', 67890, 2, 2);

INSERT INTO BillingDetails (FirstName, LastName, Email, Address, PhoneNO, City, Country, PostalCode, User_ID, Order_ID)
VALUES ('Fatima', 'Ahmed', 'fatima.ahmed@example.com', '789 Elm St', '2345678901', 'Anytown', 'USA', 34567, 3, 3);

INSERT INTO BillingDetails (FirstName, LastName, Email, Address, PhoneNO, City, Country, PostalCode, User_ID, Order_ID)
VALUES ('Amina', 'Khan', 'amina.khan@example.com', '456 Oak Ave', '3456789012', 'Anytown', 'USA', 67890, 4, 4);

INSERT INTO BillingDetails (FirstName, LastName, Email, Address, PhoneNO, City, Country, PostalCode, User_ID, Order_ID)
VALUES ('Zainab', 'Ali', 'zainab.ali@example.com', '123 Main St', '4567890123','Anytown', 'USA', 12345 ,5 ,5);

-- Select all data from BillingDetails table
SELECT * FROM BillingDetails;

-- Insert data into Wishlist table
INSERT INTO Wishlist (User_ID, Product_ID)
VALUES (1, 2);

INSERT INTO Wishlist (User_ID, Product_ID)
VALUES (2, 1);

INSERT INTO Wishlist (User_ID, Product_ID)
VALUES (3, 1);

INSERT INTO Wishlist (User_ID, Product_ID)
VALUES (4 ,2);

INSERT INTO Wishlist (User_ID ,Product_ID)
VALUES (5 ,1);

-- Select all data from Wishlist table
SELECT * FROM Wishlist;

-- Insert data into Payment table
INSERT INTO Payment (CardHolderName, CardNo, Expiry, CVC, Order_ID)
VALUES ('Mohammed Ali', '12345678', '2024-12-01', 123, 1);

INSERT INTO Payment (CardHolderName, CardNo, Expiry, CVC, Order_ID)
VALUES ('Aisha Khan', '87654321', '2025-06-01', 456, 2);

INSERT INTO Payment (CardHolderName ,CardNo ,Expiry ,CVC ,Order_ID)
VALUES ('Fatima Ahmed' ,'87654321' ,'2025-06-01' ,789 ,3);

INSERT INTO Payment (CardHolderName ,CardNo ,Expiry ,CVC ,Order_ID)
VALUES ('Amina Khan' ,'12345678' ,'2024-12-01' ,101 ,4);

INSERT INTO Payment (CardHolderName ,CardNo ,Expiry ,CVC ,Order_ID)
VALUES ('Zainab Ali' ,'23456789' ,'2026-03-01' ,202 ,5);

-- Select all data from Payment table
SELECT * FROM Payment;

-- Update a record in Users table
UPDATE Users
SET FirstName = 'John'
WHERE User_ID = 4;

-- Select the updated record from Users table
SELECT * FROM Users
WHERE User_ID = 4;

-- Delete a record from Users table
DELETE FROM Users WHERE User_ID = 3;

ALTER TABLE Product
ADD imageUrl VARCHAR(255);

-- Add the Description column
ALTER TABLE Product
ADD Description VARCHAR(MAX);

INSERT INTO Product (Name, Quantity, Price)
VALUES ('Maria.b', 10, 150);

UPDATE Product
SET imageUrl = '//cdn.shopify.com/s/files/1/1464/0726/products/DSC00039-768x1179-2_b1da3305-72bb-4419-99cf-1d337a300b13_5000x.jpg?v=1676901559'
WHERE Name IS NOT NULL;

UPDATE Product
SET Description = 'UNSTITCHED 2PC (SIZE 5.25-METER DRESS)
EMBROIDERED LACE FOR FRONT  
EMBROIDERED SLEEVES
DYED PLAIN BACK & TROUSER
DELIVERY IN 3/4 DAYS
HIGH-QUALITY REPLICA SUIT
NEED HELP? CALL 0320-0097071'
WHERE Name IS NOT NULL;



SELECT * FROM Product;


