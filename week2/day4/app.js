const { name } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
const validate = require('zod');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port =5000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"/public")));
// app.use(express.static(path.join(__dirname,"/public")))


// const loginSchema =  validate.object({
//     name: validate.string(),
//     password:validate.string(),
//     age:validate.number(),
// })

// app.get("/:username", (req,res)=>{
//     console.log(req.params)
//     let {username} = req.params;
//     res.send(`you contacted ${username} path`);
// })

// app.get("/search", (req,res)=>{
//     let {q} = req.query;
//     if(!q){
//         res.send("nothing search")
//     }
//     res.send(`${q}`)
// })

// let logger = (req,res,next)=>{
//     console.log("I am a middleware");
//     next();
// }

// app.use(logger);



// app.get("/user",auth,(req,res)=>{
//     res.send("you are authorized")
// })



// const users = [
//     { name: "john", age: 25 },
//     { name: "doe", age: 30 }
// ];

// const users = [
//     { name: "John", age: 25 },
//     { name: "Doe", age: 30 }
// ];

// app.get("/", (req, res) => {
//     const h = "Welcome to the homepage!";
//     const title = "Home";
//     res.render("index", { h, title, users });
// });


// app.get("/", (req, res) => {
//     res.render("index.ejs", { users });
// });



// app.get("/user", (req,res)=>{
//     res.render("user.ejs");
// })


// app.get("/get",(req,res)=>{
//     res.send("get request");
// })
// app.post("/post",(req,res)=>{
//     res.send("post request");
// })
// app.put("/put",(req,res)=>{
//     res.send("put request");
// })
// app.delete("/delete",(req,res)=>{
//     res.send("delete request");
// })

// app.get("/mayur",(req,res)=>{
//     res.send("mayur");
// })

// app.post("/users",(req,res)=>{
//     let {name,password} = req.headers;
//     res.send(`name is ${name} and password is ${password}`);
// })

// app.post("/body",(req,res)=>{
//     let {name,password} = req.body;
//     // res.send(`name is ${name} and password is ${password}`);
//     if(name === "mayur" && password === "passw"){
//         res.send(`you are authorized ${name}`);
//     }else{
//         res.status(401).send("you are not authorized");
//     }
// });

// let auth = (req,res,next)=>{
//     // console.log("I am a auth middleware");
//     let {name} = req.query;
//     if(name === "admin"){
//         // console.log("you are authorized");
//         next();
//     }else{
//         res.send("you are not authorized");
//     }
// }

// let login = (req,res,next)=>{
//     let {name,password,age}= req.body;
//     const validation = loginSchema.safeParse(req.body);
//     if(!validation.success){
//         console.log(validation.error.message);
//     }else{
//         next({name,password,age});
//     }
// }

// // app.post("/body",auth,(req,res)=>{
// //     res.send("you are authorized");
// // })

const RegisterSchema = validate.object({
    name: validate.string(),
    password: validate.string().min(6),
    age: validate.number().min(1).max(2),
    // number: validate.number().lt(11).gt(9),
    number:validate.string().length(10),
    email: validate.string().email(),
    video: validate.string().url(),
});


const loginSchema = validate.object({
    name: validate.string().email(),
    password: validate.string().min(6),
})

let register = (req,res,next)=>{
    let {name,password,age,number,email,video} = req.body;
    const validation = RegisterSchema.safeParse(req.body);
    if(!validation.success){
        console.log(validation.error.message);
    }else{
        next();
    }
}

app.post("/register",register,(req,res)=>{
    res.send("resgister");
})

app.post("/login",(req,res)=>{
    let {name,password} = req.body;
    let validation = loginSchema.safeParse(req.body);
    if(!validation.success){
        console.log(validation.error.message);
    }else{
        res.send("login");
    }
})

// app.post("/body",login,(req,res)=>{
//     res.send({name,password,age});
// })


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});