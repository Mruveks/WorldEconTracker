const axios = require('axios');
const { getCache, setCache } = require('./cacheService');
const { fredApiKey } = require('../config/config');

const WORLD_BANK_BASE_URL = 'https://api.worldbank.org/v2';
const FRED_BASE_URL = 'https://api.stlouisfed.org/fred';
const IMF_BASE_URL = 'http://dataservices.imf.org/REST/SDMX_JSON.svc';
const EUROSTAT_BASE_URL = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';

exports.getWorldBankData = async (country, indicator) => {
  const cacheKey = `wb_${country}_${indicator}`;
  const cachedData = getCache(cacheKey);
  
  if (cachedData) return cachedData;

  const url = `${WORLD_BANK_BASE_URL}/country/${country}/indicator/${indicator}?format=json`;
  const response = await axios.get(url);
  setCache(cacheKey, response.data);
  return response.data;
};

exports.getFredData = async (series) => {
  const cacheKey = `fred_${series}`;
  const cachedData = getCache(cacheKey);
  
  if (cachedData) return cachedData;

  const url = `${FRED_BASE_URL}/series/observations?series_id=${series}&api_key=${fredApiKey}&file_type=json`;
  const response = await axios.get(url);
  setCache(cacheKey, response.data);
  return response.data;
};

exports.getIMFData = async (datasetCode, indicatorCode, countryCode, frequency) => {
  const cacheKey = `imf_${datasetCode}_${indicatorCode}_${countryCode}_${frequency}`;
  const cachedData = getCache(cacheKey);
  
  if (cachedData) return cachedData;

  const url = `${IMF_BASE_URL}/CompactData/${datasetCode}/${frequency}.${countryCode}.${indicatorCode}`;
  const response = await axios.get(url);
  setCache(cacheKey, response.data);
  return response.data;
};

exports.getEurostatData = async (dataset, params) => {
  const cacheKey = `eurostat_${dataset}_${JSON.stringify(params)}`;
  const cachedData = getCache(cacheKey);
  
  if (cachedData) return cachedData;

  const url = `${EUROSTAT_BASE_URL}/${dataset}`;
  const response = await axios.get(url, { params });
  setCache(cacheKey, response.data);
  return response.data;
};