const Joi = require("joi");

const UserSignUpSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6).max(32),
  confirm_password: Joi.ref("password"),
});

const validateUserSignUp = async (req, res, next) => {
  try {
    const value = await UserSignUpSchema.validateAsync(req.body);
    req.value = value;
    return next();
  } catch (err) {
    req.errorMessage = err.details[0].message;
    return next();
  }
};

module.exports = validateUserSignUp;
