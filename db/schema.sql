DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;


CREATE TABLE department (
    department_id INTEGER NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE roles (
    role_id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
    employee_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    INSERT INTO employee (role_id) SELECT role_id FROM roles, 
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id REFERENCES roles(role_id)
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