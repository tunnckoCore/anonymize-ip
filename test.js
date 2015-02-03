/**
 * anonymize-ip <https://github.com/tunnckoCore/anonymize-ip>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var mukla = require('mukla');
var anonymizeIp = require('./index');

mukla('should given `79.100.175.45` be `79.100.xxx.xx`')
.strictEqual(anonymizeIp('79.100.175.45'), '79.100.xxx.xx');

mukla('should given `129.89.5.243` be `129.89.x.xxx`')
.strictEqual(anonymizeIp('129.89.5.243'), '129.89.x.xxx');

mukla('should given `253.110.22.51` be `253.110.xx.xx`')
.strictEqual(anonymizeIp('253.110.22.51'), '253.110.xx.xx');

mukla('should work with custom mask * - `92.189.231.21` be `92.189.***.**` ' )
.strictEqual(anonymizeIp('92.189.231.21', '*'), '92.189.***.**');

mukla('should mask be `x` if no string given' )
.strictEqual(anonymizeIp('92.189.231.21', [1,2,3]), '92.189.xxx.xx');

mukla('should throw Error if no arguments')
.throws(function shouldThrowIfNoArguments() {
  anonymizeIp();
}, Error);

mukla('should throw Error no valid ip address given')
.throws(function shouldThrowIfNoArguments() {
  anonymizeIp('no valid ip address');
}, Error);

mukla('should throw TypeError if no arguments')
.throws(function shouldThrowIfNoString() {
  anonymizeIp([1,2,3]);
}, TypeError);
