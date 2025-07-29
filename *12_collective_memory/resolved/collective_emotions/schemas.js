import Joi from 'joi';

const emotionSchema = Joi.object({
  xPosition: Joi.number().required(),
  yPosition: Joi.number().required(),
  red: Joi.number().required(),
  green: Joi.number().required(),
  blue: Joi.number().required(),
});

export default emotionSchema;
