/**
 * anonymize-ip <https://github.com/tunnckoCore/anonymize-ip>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fmt = require('util').format;
var ipRegex = require('ip-regex');

module.exports = function anonymizeIp(ip, mask) {
  if (!ip) {
    throw new Error('[anonymize-ip] should have at least 1 argument');
  }
  if (typeof ip !== 'string') {
    throw new TypeError('[anonymize-ip] expect `ip` be string');
  }
  if (!ipRegex().test(ip)) {
    throw new Error('[anonymize-ip] expect `ip` be valid ip address');
  }

  mask = typeof mask === 'string' ? mask : 'x';

  var nums = ip.split('.');
  var pre = nums[2].replace(/[0-9]/g, mask);
  var last = nums[3].replace(/[0-9]/g, mask);

  return fmt('%s.%s.%s.%s', nums[0], nums[1], pre, last);
};
