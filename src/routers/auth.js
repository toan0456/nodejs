import exxpress from 'express'
import { signIn, signUp } from '../controllers/auth'

const routerAuth = exxpress.Router()

routerAuth.post('/signup', signUp)
routerAuth.post('/signin', signIn)

export default routerAuth