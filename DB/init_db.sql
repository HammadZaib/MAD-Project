create database Database_Project  
use [master]

create table Users(
	User_ID int NOT NULL,
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	Password varchar(255),
	ConfirmPassword varchar(255),
	PhoneNO varchar(255),
	Gender varchar(255),
	DOB date,
	
	PRIMARY KEY(User_ID)

);


create table BillingDetails(
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	Address varchar(255),
	PhoneNO varchar(255),
	City varchar(255),
	Country varchar(255),
	PostalCode INT,
	
	User_ID int,
	Order_ID int,
	FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID),
	FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
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


/*If a person wants to change his name from profile screen*/
UPDATE Users
SET FirstName = 'John'
WHERE User_ID = 4;

SELECT * from Users
where User_ID = 4;


DELETE FROM Users WHERE User_ID = 3;