const Joi = require("joi");

const UserLoginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6).max(32),
});

const validateLoginUser = async (req, res, next) => {
  try {
    const value = await UserLoginSchema.validateAsync(req.body);
    req.value = value;
    return next();
  } catch (err) {
    req.errorMessage = err.details[0].message;
    return next();
  }
};

module.exports = validateLoginUser;
