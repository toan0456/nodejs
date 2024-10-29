import Products from '../models/products'
import productValidate from '../schemas/products'

export const getAllProducts = async (request, response) => {
    try {
        const data = await Products.find()
        response.status(200).json({message: "Danh sach san pham", data})
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (request, response) => {
    try {
        const data = await Products.findById(request.params.id)
        response.status(200).json({message: "Danh sach san pham theo id", data})
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (request, response) => {
    try {

        const {error } = productValidate.validate(request.body, {abortEarly: false})
        if (error) {
            const errMess = error.details.map((mess)=> mess.message)
            return response.status(400).json(errMess)
        }

        const data = await Products.create(request.body)
        response.status(200).json({message: "Them san pham", data})
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (request, response) => {
    try {
        const data = await Products.findByIdAndUpdate(request.params.id, request.body, {new: true})
        response.status(200).json({message: "Cap nhat san pham", data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (request, response) => {
    try {
        const data = await Products.findByIdAndDelete(request.params.id)
        response.status(200).json({message: "Xoa san pham", data})
    } catch (error) {
        console.log(error)
    }
}