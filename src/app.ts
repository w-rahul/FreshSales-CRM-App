import  express  from "express";
import { freshsalesRouter } from "./controllers/FreshSales";

const app = express()
app.use(express.json())

app.use("/psot/createcontact", freshsalesRouter)

app.listen(3000)