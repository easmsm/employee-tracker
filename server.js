const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
const inquirer = require ('inquirer');
// const consoleTable = require('console.table');

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//cleaner connection to mysql
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
                //***need to add the following functions
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

function viewDepartment() {
    const sql = `SELECT * FROM department`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}

function viewRoles() {
    const sql = `SELECT * FROM roles`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}

function viewEmployee() {
    const sql = `SELECT * FROM employee`;
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}
// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

function addDepartment() {
    const sql = `INSERT INTO department (department_name)
                VALUES (?)`;
    const params = [];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function addRole() {
    const sql = `INSERT INTO roles (role_id, title, salary)
                VALUES (?,?,?)`;
    const params = [];
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
}

function addEmployee() {
    const sql = `INSERT INTO roles (employee_id, first_name, last_name)
                VALUES (?,?,?)`;
    const params = [];
    db.query(sql, params, (err, result) => {
    if (err) {
    console.log(err);
}
console.log(result);
});
}

function updateEmployeeRole() {
    
}


// //get test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

//Not Found message - will override others, make sure it's the last one
app.use((req, res) => {
    res.status(404).end();
});


//start the server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})