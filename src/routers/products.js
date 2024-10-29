import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/products'

const routerPro = express.Router()

routerPro.get('/products', getAllProducts)
routerPro.get('/products/:id', getProductById)
routerPro.post('/products', addProduct)
routerPro.put('/products/:id', updateProduct)
routerPro.delete('/products/:id', deleteProduct)

export default routerPro