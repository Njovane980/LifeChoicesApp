import{ Users, userRouter } from "./controller/userController.js";
import{ Products, productRouter } from "./controller/productController.js";
import { errorHandling } from "../middleware/errorHandling.js";
import {path} from "path";
import {config} from "dotenv";
import  express from 'express'
// ES
// const express = require('express')   ----command js
// create express app
const app = express()
const port = +process.env.PORT || 4000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credintials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
// router middleware to be more specific
// const router = express.Router()
app.use(
    router,
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/lifechoices', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './Static/index.html'))
})
app.use('./users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
// Router -- where you going , app get from which is the /
router.get('^/$|/express',display, (req, res)=>{
res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/about',(req, res)=>{
    res.json({
    })
})
//Middleware
function display(req,res,next){
    console.log("Shawn Louw");
    next()
}
app.get('/about', (req, res)=>{
    res.json({
        status: res.statusCode,
        message: 'about'
    })
    })
    app.get('*', (req, res)=>{
        res.json({
            status: res.statusCode,
            message: 'error 404'
        })
        })
app.listen(port)