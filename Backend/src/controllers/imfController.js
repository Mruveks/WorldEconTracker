const { getIMFData } = require('../services/apiService');

exports.getDataset = async (req, res, next) => {
  try {
    const { dataset, indicator, country, frequency } = req.params;
    const data = await getIMFData(dataset, indicator, country, frequency);
    res.json(data);
  } catch (error) {
    next(error);
  }
};