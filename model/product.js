import {connection as db} from "../config/index.js"
class Products{
    fetchProducts(req, res){
        const qry = `
        select
        prodID, prodName, prodQuantity, prodAmount, userID
        from
        Products;
        `
        db.query(qry, (err,results)=>{
            if(err) throw err
            res.json({
             status: res.statusCode,
             results
            })
        })
    }
fetchProduct(req, res){
    const qry = `
    select prodID, prodName, prodQuantity, prodAmount, userID
    from Products
    where prodID = ${req.params.id}`
    db.query(qry, (err, results) => {
        if(err) throw err;
        res.json({
            status: res.statusCode,
            results
        })
    })
}
addProduct(req, res){
    const qry = `insert into Products set ?;`
    db.query(qry, (err) => {
        if(err) throw err;
        res.json({
            status: res.statusCode,
            message: 'Product successfully added'
        })
})
}
}
export{
Products
}














