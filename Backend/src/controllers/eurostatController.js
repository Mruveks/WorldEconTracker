const { getEurostatData } = require('../services/apiService');

exports.getDataset = async (req, res, next) => {
  try {
    const { dataset } = req.params;
    const data = await getEurostatData(dataset, req.query);
    res.json(data);
  } catch (error) {
    next(error);
  }
};