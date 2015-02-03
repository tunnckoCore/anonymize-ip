## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Hide last ip numbers for given ip, like `129.89.5.243` -> `129.89.x.xxx` or `79.100.175.45` to `79.100.xxx.xx`. Or replace them with custom mask.

## Install
```
npm i --save anonymize-ip
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var anonymizeIp = require('anonymize-ip');

anonymizeIp('79.100.75.145');
//=> 79.100.xx.xxx

anonymizeIp('231.77.134.6', '*');
//=> 231.77.***.*

anonymizeIp('129.89.5.243', '_');
//=> 129.89._.___

anonymizeIp('92.189.231.21', [1,2,3]);
//=> 92.189.xxx.xx
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/anonymize-ip
[npmjs-img]: https://img.shields.io/npm/v/anonymize-ip.svg?style=flat&label=anonymize-ip

[coveralls-url]: https://coveralls.io/r/tunnckoCore/anonymize-ip?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/anonymize-ip.svg?style=flat

[license-url]: https://github.com/tunnckoCore/anonymize-ip/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/anonymize-ip
[travis-img]: https://img.shields.io/travis/tunnckoCore/anonymize-ip.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/anonymize-ip
[daviddm-img]: https://img.shields.io/david/tunnckoCore/anonymize-ip.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/anonymize-ip/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 3, 2015_