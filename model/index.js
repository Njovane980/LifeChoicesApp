import{ Users } from "./controller/userController";
import{ Products } from "./controller/productController";
import { errorHandling } from "../middleware/errorHandling";
import {path} from "path"
import {config} from "dotenv"
//create objects
let users = new Users()
let products = new Products()
export{
    users,
    products
}