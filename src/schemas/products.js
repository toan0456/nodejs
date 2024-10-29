import Joi from "joi";

const productValidate = Joi.object({
    name: Joi.string().required().min(5).messages({
        "any.required": "Ten san pham la bat buoc",
        "string.empty": "Ten san pham khong duoc de trong",
        "string.min": "Ten san pham khong it hon 5 ky tu"
    }),
    price: Joi.number().required().min(0).messages({
        "any.required": "Gia san pham la bat buoc",
        "number.empty": "Gia san pham khong duoc de trong",
        "number.min": "Gia san pham khong am",
        "number.base": "Gia san pham phai la so"
    })
})

export default productValidate