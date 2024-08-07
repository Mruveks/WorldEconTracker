const { getWorldBankData } = require('../services/apiService');

exports.getIndicator = async (req, res, next) => {
  try {
    const { country, indicator } = req.params;
    const data = await getWorldBankData(country, indicator);
    res.json(data);
  } catch (error) {
    next(error);
  }
};