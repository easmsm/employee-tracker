INSERT INTO department (department_name )
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary)
VALUES
('Sales Lead', '100000'),
('Salesperson', '80000'),
('Lead Engineer', '150000'),
('Software Engineer', '120000'),
('Account Manager', '100000'),
('Accountant', '125000'),
('Legal Team Lead', '250000'),
('Lawyer', '150000'),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, null),
('Mike', 'Chan', 2, 'John Doe'),
('Ashely', 'Rodriquez', 3, null),
('Kevin', 'Tupik', 4, 'Ashely Rodriquez'),
('Kunal', 'Singh', 5, null),
('Malia', 'Brown', 6, 'Kunal Singh'),
('Sarah', 'Lourd', 7, null),
('Tom', 'Allen', 8, 'Sarah Lourd'),







