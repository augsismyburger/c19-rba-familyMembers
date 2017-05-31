"use strict";

let ap = require("./keyGetter"),
    apiData = ap.getKey();

var config = {
  apiKey: apiData.apiKey,
  databaseURL: apiData.databaseURL
};

module.exports = {config};