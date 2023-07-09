const logger = require('@utils/logger');
const BaseService = require('../services/base.service');

const getAll = async (req, res) => {
  try {
    logger.info('Okelaaa');
    const result = await BaseService.getAll();
    res.status(200).send(result);
  } catch (error) {
    error.statusCode
      ? res
          .status(error.statusCode)
          .send({ status: false, message: error.message })
      : res.status(500);
  }
};

module.exports = { getAll };
