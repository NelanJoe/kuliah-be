/**
 * * Membuat format response API success
 * @param {String} message
 * @param {Object} results
 * @param {Number} statusCode
 * @returns {Object}
 */
exports.success = (message, results, statusCode) => {
  return {
    code: statusCode,
    message: message,
    data: results,
  };
};

/**
 * * Membuat format response API error
 * @param {String} message
 * @param {Number} statusCode
 * @returns {Object}
 */
exports.error = (message, statusCode) => {
  return {
    code: statusCode,
    message: message,
  };
};

/**
 * * Membuat format response API success ketika delete
 * @param {String} message
 * @param {Number} statusCode
 * @returns {Object}
 */
exports.successDelete = (message, statusCode) => {
  return {
    code: statusCode,
    message: message,
  };
};

/**
 * * Membuat format response API error ketika delete
 * @param {String} message
 * @param {Number} statusCode
 * @returns {Object}
 */
exports.errorDelete = (message, statusCode) => {
  return {
    code: statusCode,
    message: message,
  };
};
