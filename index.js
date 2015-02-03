/**
 * anonymize-ip <https://github.com/tunnckoCore/anonymize-ip>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fmt = require('util').format;
var ipRegex = require('ip-regex');

/**
 * > Anonymize given ip address.
 *
 * **Example:**
 *
 * ```js
 * var anonymizeIp = require('anonymize-ip');
 *
 * anonymizeIp('79.100.75.145');
 * //=> 79.100.xx.xxx
 *
 * anonymizeIp('231.77.134.6', '*');
 * //=> 231.77.***.*
 *
 * anonymizeIp('129.89.5.243', '_');
 * //=> 129.89._.___
 *
 * anonymizeIp('92.189.231.21', [1,2,3]);
 * //=> 92.189.xxx.xx
 * ```
 *
 * @param  {String} `<ip>`   valid ip address
 * @param  {String} `[mask]` symbol to replace with
 * @return {String}
 * @api public
 */
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
