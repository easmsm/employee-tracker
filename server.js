const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
const inquirer = require ('inquirer');
const consoleTable = require('console.table');

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'76Te*omcYh8qXXSO9ro45GjxK3ZaudQ1D!',
    database: 'company'
});

//start menu
connection.connect(err => {
    if (err) throw (err);
    //title screen
    console.log('                                            ');
    console.log('.------------------------------------------.');
    console.log('|                                          |' );
    console.log('|                                          |' );
    console.log('|               Employee                   |' );
    console.log('|              Management                  |' );
    console.log('|                System                    |' );
    console.log('|                                          |' );
    console.log('|                                          |' );
    console.log('.------------------------------------------.');


    startPrompt();
});

//functions to start inquirer prompts/menu

function startPrompt() {
    inquirer   
        .prompt({
            message: "What would you like to do?",
            type: "list",
            choices: [
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role"
            ],
            name: "option"
        })
        .then(function (result) {
            console.log("You want to: " + result.option);

            //case functions depending on what option they choose

            switch (result.option) {
                case "View all Departments":
                    viewDepartment();
                    break;
                case "View all Roles":
                    viewRoles();
                    break;
                case "View all Employees":
                    viewEmployee();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update an Employee Role":
                    updateEmployeeRole();
                    break;
            }
        });
};

//functions for the menu above

//view exisiting department
function viewDepartment() {
    const sql = `SELECT * FROM department`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}

//view existing Role
function viewRoles() {
    const sql = `SELECT * FROM roles`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}

//view existing Employee
function viewEmployee() {
    const sql = `SELECT * FROM employee`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}

//add new department
function addDepartment() {
    inquirer.prompt({
        type:"input",
        message: "Please provide the new department's name.",
        name: "newDept"
    }).then (function(answer) {
        connection.query("INSERT INTO department (department_name) VALUES (?)", [answer.newDept], function(err,res) {
            if (err) throw err;
            console.table(res)
            startPrompt()
        })
    })
}

//add new role
function addRole() {
    inquirer.prompt({
        type:"input",
        message: "Please provide the new role's name.",
        name: "newRole"
    },
    { 
        type:"input",
        message: "Please provide the new role's salary.",
        name: "newSalary"
    }).then (function(answer) {
        connection.query("INSERT INTO roles (title, salary) VALUES (?, ?)", [answer.newRole, answer.newSalary], function(err,res) {
        if (err) throw err;
        console.table(res)
        startPrompt()
        })
    })
}


//still need to add manager connection
//common mistake - function (err,res) - make sure you didn't forget it

//add New Employee
function addEmployee() {
    inquirer.prompt([
    {
        type:"input",
        message: "Please provide the new employee's first name.",
        name: "newEmployeeFirstName"
    },
    {
        type:"input",
        message: "Please provide the new employee's last name.",
        name: "newEmployeeLastName"
    },
    {
        type:"input",
        message: "What is the new employee's role id?",
        name: "newEmployeRoleId"
    },
    {
        type:"input",
        message: "Who is the new employee's manager (use manager ID)?",
        name: "newEmployeeManagerId"
    }]).then (function(answer) {
        connection.query("INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.newEmployeeFirstName, answer.newEmployeeLastName, answer.newEmployeeRoleId, answer.newEmployeeManagerId], function(err,res) {
            if (err) throw err;
            console.table(res)
            startPrompt()
        })
    })
}

//update Existing Employee's Role
//need ID, new role id
//check types of brackets - this is a common mistake I'e been making
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter employee id for the employee you'd like to update.",
                name: "employeeIdUpdate"
            },
            {
                type: "input",
                message: "What is this employee's new role id?",
                name: "employeeNewRole"
            }
        ]).then(function (answer) {
            //update the role id to the new role of...
            connection.query ("UPDATE employee SET role_id= ?  WHERE id= ?", [answer.employeeNewRole, answer.employeeIdUpdate], function(err,res) {
                if (err) throw (err);
                //need to require console table
                console.table(res);
                startPrompt();
            })
        })
}

//Not Found message - will override others, make sure it's the last one
app.use((req, res) => {
    res.status(404).end();
});


//start the server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})