CREATE TABLE department (
    id INT AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- removed the foreign keys to try to resolve seed error

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    -- FOREIGN KEY (id) REFERENCES department(id)
    PRIMARY KEY (id)

);


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT,
    role_id INT,
    -- manager BOOLEAN,
    -- FOREIGN KEY (id) REFERENCES roles(id)
    PRIMARY KEY (id)

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
