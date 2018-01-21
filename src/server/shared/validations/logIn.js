const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = "This field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
