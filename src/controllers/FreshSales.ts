import express from "express"

export const freshsalesRouter = express.Router()

freshsalesRouter.post("/", (req,res) =>{
    return res.json({
        message : "Hello from FreshSales "
    })
})