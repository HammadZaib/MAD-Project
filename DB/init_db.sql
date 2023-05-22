
create database Database_Project; 
use [Database_Project]


-- drop TABLE Users;

create table Users(
	User_ID int NOT NULL,
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	Password varchar(255),
	ConfirmPassword varchar(255),
	PhoneNO VARCHAR(255),
	Gender varchar(255),
	DOB date,
	
	PRIMARY KEY(User_ID)

);

create table Product(
	Product_ID int not null,
	Name varchar(255),
	Quantity int,
	Price int,

	PRIMARY KEY(Product_ID)

);

create table Orders(
	Order_ID int not null,
	Total int,
	O_date date,
	Product_ID int,
	User_ID int,

	PRIMARY KEY(Order_ID),
	FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID),
	FOREIGN KEY (User_ID) REFERENCES Users(User_ID)

);

create table BillingDetails(
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	Address varchar(255),
	PhoneNO INT,
	City varchar(255),
	Country varchar(255),
	PostalCode INT,
	
	User_ID int,
	Order_ID int,
	FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID),
	FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);






create table Wishlist(
	User_ID int,
	Product_ID int,

	FOREIGN KEY (User_ID) REFERENCES Users(User_ID),
	FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID)

);

create table Payment(
	CardHolderName varchar(255),
	CardNo int,
	Expiry date,
	CVC int,
	Order_ID int,

	FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID)


);


INSERT INTO Users (User_ID, FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES (1, 'Mohammed', 'Ali', 'mohammed.ali@example.com', 'password123', 'password123', '1234567890', 'Male', '1990-01-01');

INSERT INTO Users (User_ID, FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES (2, 'Aisha', 'Khan', 'aisha.khan@example.com', 'secret123', 'secret123', '0987654321', 'Female', '1995-05-05');

INSERT INTO Users (User_ID, FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES (3, 'Fatima', 'Ahmed', 'fatima.ahmed@example.com', 'pass123', 'pass123', '2345678901', 'Female', '1992-03-15');

INSERT INTO Users (User_ID, FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES (4, 'Amina', 'Khan', 'amina.khan@example.com', 'secure123', 'secure123', '3456789012', 'Female', '1988-11-20');

INSERT INTO Users (User_ID, FirstName, LastName, Email, Password, ConfirmPassword, PhoneNO, Gender, DOB)
VALUES (5, 'Zainab', 'Ali', 'zainab.ali@example.com', 'password321', 'password321', '4567890123', 'Female', '1997-06-05');



SELECT * FROM Users;

INSERT INTO Product (Product_ID, Name, Quantity, Price)
VALUES (1, 'Floral Print Maxi Dress', 20, 80);

INSERT INTO Product (Product_ID, Name, Quantity, Price)
VALUES (2, 'Ruffle Hem Wrap Dress', 15, 100);

INSERT INTO Product (Product_ID, Name, Quantity, Price)
VALUES (3, 'V-Neck Lace Blouse', 25, 50);

INSERT INTO Product (Product_ID, Name, Quantity, Price)
VALUES (4, 'High Waisted Skinny Jeans', 30, 70);

INSERT INTO Product (Product_ID, Name, Quantity, Price)
VALUES (5, 'Leather Moto Jacket', 10, 150);



SELECT * FROM Product;


INSERT INTO Orders (Order_ID, Total, O_date, Product_ID, User_ID)
VALUES (1, 1200, '2023-05-22', 1, 1);

INSERT INTO Orders (Order_ID, Total, O_date, Product_ID, User_ID)
VALUES (2, 2600, '2023-05-22', 2, 2);

INSERT INTO Orders (Order_ID, Total, O_date, Product_ID, User_ID)
VALUES (3, 1500, '2023-05-22', 2, 3);

INSERT INTO Orders (Order_ID, Total, O_date, Product_ID, User_ID)
VALUES (4, 3500, '2023-05-22', 1, 4);

INSERT INTO Orders (Order_ID, Total, O_date, Product_ID, User_ID)
VALUES (5, 1000, '2023-05-22', 3, 5);

SELECT * FROM Orders

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






SELECT * FROM BillingDetails


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


SELECT * FROM Wishlist

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



SELECT * FROM Payment



