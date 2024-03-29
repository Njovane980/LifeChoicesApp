import { Products } from '../model/products'
import { express } from 'express'
import bodyParser from 'body-parser'
const productRouter = express.Router()
// Fetch all products
productRouter.get('/', (req, res)=>{
    try{
        users.fetchProducts(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
//  Fetch product
productFetch.get('/:id', (req, res)=>{
    try{
        users.fetchProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product'
        })
    }
})
export{
    productRouter
}









