const { getFredData } = require('../services/apiService');

exports.getSeries = async (req, res, next) => {
  try {
    const { series } = req.params;
    const data = await getFredData(series);
    res.json(data);
  } catch (error) {
    next(error);
  }
};