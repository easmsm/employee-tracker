const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());



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