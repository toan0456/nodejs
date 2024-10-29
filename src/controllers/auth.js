import User from '../models/auth'
import bcrypt from 'bcryptjs'

export const signUp = async ( request, response) => {
    try {
        
        const { username, email, password } =request.body

        const checkEmail = await User.findOne({email: email})
        if (checkEmail) {
            return response.status(400).json({message: "Email da ton tai"})
        }

        const passMK = await bcrypt.hash(password, 10)

        const user = await User.create({ username, email, password: passMK})

        user.password= undefined

        response.status(200).json({message: "Dang ky thanh cong", data: user})

    } catch (error) {
        console.log(error)
    }
}

export const signIn = async ( request, response) => {
    try {
        
        const { username, email, password } =request.body

        const checkEmail = await User.findOne({email: email})
        if (!checkEmail) {
            return response.status(400).json({message: "Email khong ton tai"})
        }

        const checkPass = await bcrypt.compare(password, checkEmail.password)
        if (!checkPass) {
            return response.status(400).json({message: "Mat khau khong chinh xac"})
        }
       
        checkEmail.password= undefined

        response.status(200).json({message: "Dang nhap thanh cong", data: checkEmail})

    } catch (error) {
        console.log(error)
    }
}