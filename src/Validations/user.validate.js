import Joi from "joi";
const userValidate=Joi.object({
    username:Joi.string().required,
    email:Joi.string().email(),
    passowrd: Joi.string().min(6).replace()
    


})
export  default userValidate ;