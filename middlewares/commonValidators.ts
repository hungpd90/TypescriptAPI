import { Request, Response, NextFunction } from "express";
import Joi from "joi";

class CommonValidator {
  validate = function (schema: Joi.ObjectSchema) {
    return function (req: Request, res: Response, next: NextFunction) {
      const { value, error } = schema.validate(req.body);
      if (!error) {
        return next();
      }
      console.log(schema.validate(req.body));
      return res.status(400).json({
        status: "error",
        message: error,
      });
    };
  };
}
export default CommonValidator;
