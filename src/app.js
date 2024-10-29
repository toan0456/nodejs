import express from "express"
import mongooseDB from "./config/db"
import routerPro from "./routers/products"
import routerAuth from "./routers/auth"

const app = express()

mongooseDB()

app.use(express.json())

app.use('/api', routerPro)
app.use('/api', routerAuth)

export const viteNodeApp = app