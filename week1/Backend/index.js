// const express = require('express');
// const app = express();



// app.get('/', (req, res) => {
//     res.send('Hello, World!'); 
// });

// // // single query in url is 
// // // -> ex:-name=hello;
// // // multiple
// // // ->ex:-class=fullstack

// // // Pwd -> will give us whole path our curr dir or file
// // // __dirname -> will give us path of our current directory
// app.get('/hello',(req,res)=>{
//     let {name} = req.query;
//     res.send(name);
// })
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000'); // Log that the server has started
// });



// const express = require('express');
// const fs = require('fs')
// const app = express();
// app.use('/state',express.static('public'));


// app.get('/', (req, res) => {
//     res.send('welcom to learner '); 
// });

// let data = (req,res) =>{
//     fs.readFile('data.txt', "utf-8", (err, response) => { 
//         if (err) { 
//             console.log(err); 
//         } else { 
//             res.send(response);
//         }
//         });
// }
 
// app.get('/coffee',(req, res) => {
//     let {name} = req.query;
//     res.send(`${name} can we go on coffee`); 
// });

// app.get('/data',(req,res)=>{
//     data(req,res);
// })
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000'); // Log that the server has started
// });


// // q.create an api using in express, that do certain things,

