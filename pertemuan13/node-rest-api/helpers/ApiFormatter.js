exports.success = (message, results, statusCode) => {
  return {
    code: statusCode,
    message: message,
    data: results,
  };
};

exports.error = (message, statusCode) => {
  return {
    code: statusCode,
    message: message,
  };
};

exports.successDelete = (message, statusCode) => {
  return {
    code: statusCode,
    message: message,
  };
};

exports.errorDelete = (message, statusCode) => {
  return {
    code: statusCode,
    message: message,
  };
};
