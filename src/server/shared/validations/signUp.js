const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();

export default function validateInput(data) {
  console.log("Hello there");

  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.hashed_password)) {
    errors.hashed_password = 'This field is required'
  }

  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required'
  }

  if (!Validator.equals(data.hashed_password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'This field is required'
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'This field is required'
  }

  console.log(errors)

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
