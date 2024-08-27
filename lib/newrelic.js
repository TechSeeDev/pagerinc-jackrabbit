'use strict';

module.exports = (process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) ? require('newrelic') : undefined;
