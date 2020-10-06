const Joi = require("joi");

const UserSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6).max(32),
});

const validateUser = async (req, res, next) => {
  try {
    const value = await UserSchema.validateAsync(req.body);
    req.value = value;
    return next();
  } catch (err) {
    req.errorMessage = err.details[0].message;
    return next();
  }
};

module.exports = validateUser;
