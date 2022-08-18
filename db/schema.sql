DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;


CREATE TABLE department (
    id INT AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE roles (
    role_id INT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    FOREIGN KEY (id) REFERENCES department(id)
);


CREATE TABLE employee (
    employee_id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);



-- just an example from W3 Schools incase I forget to go back and delete this
-- CREATE TABLE Orders (
--     OrderID int NOT NULL,
--     OrderNumber int NOT NULL
--     PersonID int,
--     PRIMARY KEY (OrderID),
--     FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
-- );

-- INSERT INTO Customers (CustomerName, City, Country)
-- SELECT SupplierName, City, Country FROM Suppliers;
-- need to create manager reference, not hard code
