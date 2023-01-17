/**
 * * Make function & exports for handle response success
 * */
exports.success = (code, message, data) => {
  return {
    code: code,
    message: message,
    data: data,
  };
};

/**
 * * Make function & exports for handle response error
 * */
exports.error = (code, message) => {
  return {
    code: code,
    message: message,
  };
};

/**
 * * Make function & exports for handle response success delete
 * */
exports.successDelete = (code, message) => {
  return {
    code: code,
    message: message,
  };
};

/**
 * * Make function for validation
 * */
exports.validation = (error) => {
  return {
    code: 422,
    message: "Validation Error",
    error,
  };
};

/**
 * * Make function & exports for handle response success register
 * */
exports.successRegister = (code, message) => {
  return {
    code: code,
    message: message,
  };
};

/**
 * * Make function & exports for handle response success login
 * */
exports.successLogin = (code, message, token) => {
  return {
    code: code,
    message: message,
    token: token,
  };
};
