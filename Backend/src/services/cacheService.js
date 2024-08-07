const NodeCache = require('node-cache');
const { cacheTime } = require('../config/config');

const cache = new NodeCache({ stdTTL: cacheTime });

exports.getCache = (key) => cache.get(key);
exports.setCache = (key, value) => cache.set(key, value);