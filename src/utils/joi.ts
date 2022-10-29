import Joi, { Schema } from 'joi';

export const joi = Joi.defaults((schema: Schema) => {
  return schema.options({ abortEarly: false });
});
