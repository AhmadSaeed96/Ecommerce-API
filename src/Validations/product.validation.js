import Joi from "joi";
const productValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.any(),
});
export default productValidation;
